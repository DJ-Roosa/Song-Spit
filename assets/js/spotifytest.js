$("#searchSongBtn").on("click", function (event) {
    event.preventDefault();
    let searchSong = $("#searchSong").val().trim();
    let searchArtist = $("#searchArtist").val().trim();
    let searchAlbum = $("#searchAlbum").val().trim();
    let songLink = spotifySearch(searchSong, searchArtist, searchAlbum);

    console.log(songLink.link);
    //returnValues = { link: linkReturn }
    if (songLink.link === "#") {
        console.log("No Match Found");
        $("#link").val = "No Match Found";
    } else {
        let {
            link
        } = songLink.link;
        $("#link").val = "<a href src=" + link + "/>";
        console.log("Link is: " + link);
    };
});
