import songService from "../Services/SongsService.js";
import { ProxyState } from "../AppState.js"


//Private
/**Draws the Search results to the page */
function _drawResults() {
  let songs = ProxyState.songs
  let template = ''
  songs.forEach(s => template += s.Template)
  document.getElementById('songs').innerHTML = template
}

function _drawActive() {
  document.getElementById('active-song').innerHTML = ProxyState.activeSong ? ProxyState.activeSong.ActiveTemplate : " "
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let playlist = ProxyState.playlist
  let template = ''
  playlist.forEach(s => template += s.playlistTemplate)
  document.getElementById('playlist').innerHTML = template
}

//Public
export default class SongsController {
  constructor() {
    ProxyState.on('songs', _drawResults)
    ProxyState.on('activeSong', _drawActive)
    ProxyState.on('playlist', _drawPlaylist)
    this.getMySongs()

    _drawPlaylist()

    // this.getMusicByQuery()
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      songService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  async addSong(id) {
    try {
      await songService.addSong(id)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  async removeSong(id) {
    try {
      console.log(id)
      await songService.removeSong(id)
    } catch (error) {
      console.error(error)
    }
  }

  async setActive(id) {
    try {
      await songService.setActive(id)

    } catch (error) {
      console.error(error)
    }
  }

  async getMySongs() {
    try {
      await songService.getMySongs()
    } catch (error) {
      console.error(error)
    }
  }
}

