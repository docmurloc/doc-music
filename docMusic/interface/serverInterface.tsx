export interface IAlbum {
    _id?: string;
    id?: string;
    title: string;
    artist: string;
    artwork: string;
    date: string;
    genre: string;
    playlistId: string;
    like: number;
}

export interface IPlaylist {
    _id?: string;
    id?: string;
    tile: string;
    date: string;
    author: string;
    artwork: string;
    album: string;
    trackListId: [string];
}

export interface ITrack {
    _id?: string;
    id?: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    date: string;
    url: string;
    artwork: string;
    like: number;
}

export interface IUser {
    _id?: string;
    pseudo: string;
    password: string;
    access_token: string;
    trackHistoric: [string];
    trackFavorite : [string];
    trackUnfavorite: [string];
    albumFavorite: [string]
}