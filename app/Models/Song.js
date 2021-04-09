export default class Song {
    constructor(data) {
        this.title = data.trackName || data.title;
        this.albumArt =
            data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
        this.artist = data.artistName || data.artist;
        this.album = data.collectionName || data.album;
        this.price = data.trackPrice || data.price;
        this.preview = data.previewUrl || data.preview;
        this.id = data.trackId || data._id;
    }

    get Template() {
        return/*html*/ `
        <div class="card apiCard mb-3" onclick='app.songsController.setActive(${this.id})'>
                <div class="row">
                    <div class="col-md-4">
                        <img src="${this.albumArt}" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <small class="card-title m-0">${this.artist}</small>
                            <small class="card-text m-0">${this.title}</small>
                            <audio>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    get playlistTemplate() {
        return/*html*/ `
        <div class="card mb-3" onclick="app.songsController.setActive('${this.id}')">
                <div class="row">
                    <div class="col">
                        <div class="card-body">
                            <p class="card-title m-0">${this.artist}</p>
                            <p class="card-text m-0">${this.title}</p>
                            <small><i class="fas fa-trash" onclick="app.songsController.removeSong('${this.id}')"></i></small>

                            
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    get ActiveTemplate() {
        return /*html */ `
        <div class="card"  >
            <img class="card-img-top" src="${this.albumArt}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.artist} - ${this.title}</h4>
                <p class="card-text">${this.album} | Buy Now: $${this.price}</p>
                <button class="btn btn-outline-sucess"><i class="fas fa-plus" onclick='app.songsController.addSong(${this.id})'></i></button>

            </div>
        </div>

    `
    }
}
