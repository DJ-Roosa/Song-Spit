


const tableHTML = `<table class="table table-hover" class="display" id="songTable" style="width:70%">
<thead>
    <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>Year</th>
        <th></th>
        <th></th>
    </tr>
</thead>
<tbody>
    <!-- entries added here dynamically -->
</tbody>
</table>`;

var config = {
    apiKey: "AIzaSyBsPXDi99BrxNm0bPOL68bdEq_T63CK_oI",
    authDomain: "dj-roosa.firebaseapp.com",
    databaseURL: "https://dj-roosa.firebaseio.com",
    projectId: "dj-roosa",
    storageBucket: "dj-roosa.appspot.com",
    messagingSenderId: "24241039386"
};



firebase.initializeApp(config);
var database = firebase.database();

$("#search-button").click(function (event) {
    event.preventDefault();
    $("#song-return").empty();
    var lyrics = $("#lyrics-input").val().trim();

    // pushing Lyrics/Search Info to Firebase
    firebase.database().ref().push({
        lyrics: lyrics
    });

    $.ajax({
        method: "GET",
        data: {
            apikey: "ab6018d2a0d1bbeef89eaa602857cdd8",
            q_lyrics: lyrics,
            page_size: 30,
            format: "jsonp",
            callback: "jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/track.search",
        async: false,
        dataType: "jsonp",
        jsonpCallback: "jsonp_callback",
        contentType: 'application/json',
        success: function (artist) {
            console.log(artist.message.body);

            // console.log(artist.message.body.track_list[0].track.artist_name)
            var trackList = artist.message.body.track_list;
            console.log("tracklist" + trackList)

            // build the basic table for the data
            $("#song-return").append(tableHTML);
          
            for (let i = 0; i < trackList.length; i++) {

                let songTitle = trackList[i].track.track_name;
                let artist = trackList[i].track.artist_name;
                let album = trackList[i].track.album_name;

                let queryURL = "https://api.spotify.com/v1/search?q=" + songTitle +
                    "&type=track&limit=30&offset=0";


                // get the parameters values. Spotify uses anchor tag # in the response from the authorize redirect.
                let params = document.location.hash;
                // drop the leading #
                params = params.substring(1);
                // new object with for the parameter string. Methods available for the object
                let urlParams = new URLSearchParams(params);
                // use the get methods to find the value of the access_token parameter. This is needed for the search API call
                let accessToken = urlParams.get('access_token');

                $.ajax({
                        url: queryURL,
                        method: "GET",
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        },
                    })
                    .then(function (response) {
                        // console.log(response);
                        // console.log("success API");

                        // find match song title
                        let linkReturn = "";
                        mainLoop:
                            for (let x = 0; x < response.tracks.items.length; x++) {
                                // chech for match on song title and album name
                                // console.log("name: " + response.tracks.items[x].name);
                                // console.log("album: " + response.tracks.items[x].album.name);
                                if (response.tracks.items[x].name === songTitle &&
                                    response.tracks.items[x].album.name === album) {
                                    //when match song and album, look for match on artist
                                    for (let y = 0; y < response.tracks.items[x].album.artists
                                        .length; y++) {
                                        // when artist matches, return spotify link
                                        // console.log("artist: " + response.tracks.items[
                                        // x].album.artists[y].name);
                                        if (response.tracks.items[x].album.artists[y].name =
                                            artist) {
                                            // console.log("link found: " + response.tracks
                                            // .items[x].external_urls.spotify);
                                            linkReturn = response.tracks.items[x].external_urls.spotify;
                                            break mainLoop;
                                        };
                                    };
                                };
                            };

                        //*************************************************************************************
                        if (linkReturn != "") {

                            console.log("Spotify Link: " + linkReturn);

                            $("#songTable > tbody").append("<tr><td>" +
                                trackList[i].track.track_name +
                                "</td><td>" +
                                trackList[i].track.artist_name +
                                "</td><td>" +
                                trackList[i].track.album_name +
                                "</td><td>" +
                                trackList[i].track.first_release_date.substring(0, 4) +
                                "</td><td>" +
                                "<span><a target='_blank' href=" + trackList[i].track.track_share_url + "><img src='assets/images/musixmatch.jpg' class='musixmatchImg'></a></span>" +
                                "</td><td>" +
                                "<span><a target = '_blank' href=" + linkReturn + "><img src='assets/images/spotify.png' class='spotifyImg'></a></span>" +
                                "</td></tr>");


                            // songReturn.addClass('titleBox');

                        };

                    });
            };
            
        }
               
    });
  
});

