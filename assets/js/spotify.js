
// get song information from Spotify using the search API
function spotifySearch(title) {

    let accessToken = "BQCr-TxNwWDjpOZUnyZYs_NKlilH20ZFWCwIBmgBLdPkCb_bXAnePFv34Ujxluox9uSZWZVelz8Umsj3F5AoNp1ZC6kZbOzmOsncwuVrZpd6Xl0Ebh3xoq02FAWcllxl8pPBATzNdr_bWa5yRClUlknCvJs4KFk";

    // let queryURL = "https://api.spotify.com/v1/search?q=" + '"' + searchTerm  + '"' + "&type=track&limit=5&offset=0";
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