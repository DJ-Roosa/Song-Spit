$("#searchSongBtn").on("click", function (event) {
    event.preventDefault();
    let searchTerm = $("#searchSong").val().trim();
    let songInfo = spotifySearch(searchTerm);

console.log("songInfo");
console.log(songInfo);


//https://accounts.spotify.com/authorize?client_id=e3f88cfb7e5c4c218a192eccbbad9249&response_type=token&redirect_uri=https://dj-roosa.github.io/Song-Spit/spotifytest.html&scope=user-read-private



    // let accessToken = "BQCwQGrrCAjkWnMAcgE984izB9qhSGTBxuTVjcqecj7ewcytvPEcZh_rZZeuhqSr5s4SItoKP7vT73zky74_EJlq4nUJs4VuxX3_dSJrbLdoVXgWu59rzo9IYDST_xfJjFsF7Ck6436hrZCm1LTbrB7YLDq5c5s";

    // // let queryURL = "https://api.spotify.com/v1/search?q=" + '"' + searchTerm  + '"' + "&type=track&limit=5&offset=0";
    // let queryURL = "https://api.spotify.com/v1/search?q=" + searchTerm + "&type=track&limit=5&offset=0";


    // console.log("success button");
    // console.log(queryURL);


    // $.ajax({
    //         url: queryURL,
    //         method: "GET",
    //         headers: {
    //             'Authorization': 'Bearer ' + accessToken
    //         },
    //     })
    //     .then(function (response) {
    //         console.log(response)
    //         console.log("success API")
    //         // let results = JSON.parse(response);
    //         // console.log(results);

    //         console.log(response.tracks.items[0]);
    //         for (let i = 0; i < response.tracks.items.length; i++) {
    //             console.log(response.tracks.items[i].name);
    //             console.log(response.tracks.items[i].album.artists[0].name);
    //             console.log(response.tracks.items[i].album.name);
    //             console.log(response.tracks.items[i].album.external_urls.spotify);
    //             for (let j = 0; j < response.tracks.items[i].album.images.length; j++) {
    //                 console.log(response.tracks.items[1].album.images[j].url);
    //                 console.log(response.tracks.items[1].album.images[j].height);
    //                 console.log(response.tracks.items[1].album.images[j].width);
    //             };
    //             console.log("-------------------------------------------")
    //         };
    //     });

});