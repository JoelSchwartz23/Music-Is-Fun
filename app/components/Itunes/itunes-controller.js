import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ""
  results.forEach(song => {
    template += `
  <div  class="songdivider">
  <audio controls src="${song.preview}"></audio>
  <img src="${song.albumArt}">
  <h5> | <ins><b>Artist:</b></ins> ${song.artist} | <ins><b>Title:</b></ins> ${song.title} | <ins><b>Album:</b></ins> ${song.collection} </h5> 
  <h6> <ins><b>Price:</b></ins> $${song.price}</h6>
  </div>

  `
  });
  document.getElementById('songs').innerHTML = template
}




//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    // @ts-ignore
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      // @ts-ignore
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController