# RESTAPIDocs server

Where full URLs are provided in responses they will be rendered as if service
is running on 'http://' + IP_SERVER + ':' + PORT_SERVER + '/'.

## Open Endpoints

Open endpoints require no Authentication.

* [GET Login]() : `GET /users/login`
* [POST register]() : `POST /users/register`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Current User related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* [GET user track Historic info]() : `GET /users/historic`
* [ADD track to Historic]() : `POST /users/add_historic`
* [GET user track favorite]() : `GET /tracks/favorite`
* [GET user track unfavorite]() : `GET /tracks/unfavorite`
* [ADD track to user favorite]() : `POST /tracks/add_favorite`
* [ADD track to user unfavorite]() : `POST /tracks/add_unfavorite`
* [DEL track from user favorite]() : `POST /tracks/rem_favorite`
* [DEL track from user unfavorite]() : `POST /tracks/rem_unfavorite`
* [GET user album favorite]() : `GET /albums/favorite`
* [ADD album to user favorite]() : `POST /albums/add_favorite`
* [DEL album from user favorite]() : `POST /albums/rem_favorite`


### Album related

Endpoints to access album data of the server.

* [GET album by id]() : `GET /albums/id`
* [GET random album]() : `GET /albums/random`
* [GET List random id album]() : `GET /albums/randomList`
* [GET List of all album]() : `GET /albums/all`
* [POST upload album]() : `POST /albums/upload`
* [POST link album to playlist]() : `POST /albums/link`
* [POST change album data]() : `POST /albums/mod`
* [POST delete album]() : `POST /albums/delete`

### Image related

Endpoints to access image data of the server.

* [GET image by id]() : `GET /images/id`
* [GET list of all image]() : `GET /images/all`
* [POST upload image]() : `POST /images/upload`
* [POST change image data]() : `POST /images/mod`
* [POST delete image]() : `POST /images/delete`


### Playlist related

Endpoints to access playlist data of the server.

* [GET playlist by id]() : `GET /playlists/id`
* [GET random playlist]() : `GET /playlists/random`
* [GET list of all playlist]() : `GET /playlists/all`
* [POST upload playlist]() : `POST /playlists/upload`
* [POST change playlist data]() : `POST /playlists/mod`
* [POST delete playlist]() : `POST /playlists/delete`


### Track related

Endpoints to access track data of the server.

* [GET track by id]() : `GET /tracks/id`
* [GET track by title]() : `GET /tracks/research`
* [GET random track]() : `GET /tracks/random`
* [GET list of all track]() : `GET /tracks/all`
* [GET track by title]() : `GET /tracks/research`
* [POST upload track]() : `POST /tracks/upload`
* [POST change track data]() : `POST /tracks/mod`
* [POST delete track]() : `POST /tracks/delete`
