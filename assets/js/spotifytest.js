$("#searchSongBtn").on("click", function (event) {
    event.preventDefault();
    let searchSong = $("#searchSong").val().trim();
    let searchArtist = $("#searchArtist").val().trim();
    let searchAlbum = $("#searchAlbum").val().trim();
    let songLink = spotifySearch(searchSong, searchArtist, searchAlbum);


    //returnValues = { link: linkReturn }
    if (songLink === "#") {
        console.log("No Match Found");
        $("#link").val = "No Match Found";
    } else {
        let {
            link
        } = songLink;
        $("#link").val = "<a href src=" + link + "/>";
        console.log("Link: " + link);
    };
});
