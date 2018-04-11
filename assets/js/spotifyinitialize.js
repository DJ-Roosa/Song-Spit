// force browser to go to Spotify link
// link passes the Spotify client defined for this application and a redirect URL for the custom app 
// Spotify will check to see if the user is logged on. If not, the Spotify logon page is presented
// when user logged on, Spotify creates an acceess token
// the page is then redirected to the redirect_url provided in the orignal link.
// the access token is added to the redirect link
// the app then parses out the access_token and uses it in the Header on API calls
console.log("spotifyinitialize");
window.location.href = "https://accounts.spotify.com/authorize?client_id=e3f88cfb7e5c4c218a192eccbbad9249&response_type=token&redirect_uri=https://dj-roosa.github.io/Song-Spit/index.html&scope=user-read-private";