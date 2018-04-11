$("#searchSongBtn").on("click", function (event) {
    event.preventDefault();
    let searchSong = $("#searchSong").val().trim();
    let searchArtist = $("#searchArtist").val().trim();
    let searchAlbum = $("#searchAlbum").val().trim();
    let songLink = spotifySearch(searchSong, searchArtist, searchAlbum);


    //returnValues = { link: linkReturn }
    let {
        link
    } = songLink;
    $("#link").val = "<a href src=" + link + "/>";
    console.log("Link: " + link);
});
