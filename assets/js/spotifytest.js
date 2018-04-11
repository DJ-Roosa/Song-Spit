$("#searchSongBtn").on("click", function (event) {
    event.preventDefault();


    //    var a;
    //    searchsong( a,b,c, function(result){
    //        a = result;
    //        console.log(a);

    //    });
    //    function saerchsong(a,b,c, callback){
    //        ...
    //        $.ajax(...).then(function(response){
    //            var link = {key: response};
    //            callback(link);
    //        })
    //    }
    // console.log(a);

    let songTitle = $("#searchSong").val().trim();
    let artist = $("#searchArtist").val().trim();
    let album = $("#searchAlbum").val().trim();

    let queryURL = "https://api.spotify.com/v1/search?q=" + songTitle + "&type=track&limit=30&offset=0";

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
            console.log(response);
            console.log("success API");


            // find match song title
            let linkReturn = "#";
            mainLoop:
                for (let i = 0; i < response.tracks.items.length; i++) {
                    // chech for match on song title and album name
                    console.log("name: " + response.tracks.items[i].name);
                    console.log("album: " + response.tracks.items[i].album.name);
                    if (response.tracks.items[i].name === songTitle && response.tracks.items[i].album.name === album) {
                        //when match song and album, look for match on artist
                        for (let j = 0; j < response.tracks.items[i].album.artists.length; j++) {
                            // when artist matches, return spotify link
                            console.log("artist: " + response.tracks.items[i].album.artists[j].name);
                            if (response.tracks.items[i].album.artists[j].name = artist) {
                                console.log("link found: " + response.tracks.items[i].external_urls.spotify);
                                linkReturn = response.tracks.items[i].external_urls.spotify;
                                break mainLoop;
                            };
                        };
                    };
                };
            $("#link").empty();
            $("#link").append("<a href=" + linkReturn + " target='_blank'>" + linkReturn + "</a>");
        });
});