// function load()
// {
//     window.location.href = "https://accounts.spotify.com/authorize?client_id=e3f88cfb7e5c4c218a192eccbbad9249&response_type=token&redirect_uri=https://dj-roosa.github.io/Song-Spit/spotifytest.html&scope=user-read-private";
// }
// get song information from Spotify using the search API
function spotifySearch(title) {

    // let accessToken = "BQCO0pMVbqFOIb4HhbsKagMMKL96Hg0MWIM--HdVsNhMGPU_doVx5swfFkMDrPutRBdHVwH-iFqDBjsAS_whtj2pne61RbuZoWW8K8GB8n78zR-TZUH6UTjCHGswYkeQaGV-c79CAfIyjx79kqPaG5tkt_8cS3M";

    // let queryURL = "https://api.spotify.com/v1/search?q=" + '"' + searchTerm  + '"' + "&type=track&limit=5&offset=0";


    // window.location.href = "https://accounts.spotify.com/authorize?client_id=e3f88cfb7e5c4c218a192eccbbad9249&response_type=token&redirect_uri=https://dj-roosa.github.io/Song-Spit/spotifytest.html&scope=user-read-private";

    let queryURL = "https://api.spotify.com/v1/search?q=" + title + "&type=track&limit=5&offset=0";


    console.log("success button");
    console.log(queryURL);

    let songData = "";

    $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
        })
        .then(function (response) {
            console.log(response)
            console.log("success API")
            
          

            console.log(response.tracks.items[0]);
            for (let i = 0; i < response.tracks.items.length; i++) {
                console.log(response.tracks.items[i].name);
                console.log(response.tracks.items[i].track_number);
                console.log(response.tracks.items[i].preview_url);
                console.log(response.tracks.items[i].album.artists[0].name);
                console.log(response.tracks.items[i].album.name);
                console.log(response.tracks.items[i].album.external_urls.spotify);
                for (let j = 0; j < response.tracks.items[i].album.images.length; j++) {
                    console.log(response.tracks.items[1].album.images[j].url);
                    console.log(response.tracks.items[1].album.images[j].height);
                    console.log(response.tracks.items[1].album.images[j].width);
                };
                console.log("-------------------------------------------")
            };

            songData = response;
            console.log("songData:");
            console.log(songData);
            return songData;
        });

};