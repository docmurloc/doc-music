# RESTAPIDocs server

Where full URLs are provided in responses they will be rendered as if service
is running on 'http://' + IP_SERVER + ':' + PORT_SERVER + '/'.

## Open Endpoints

Open endpoints require no Authentication.

* [Login](login.md) : `GET /users/login`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Current User related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* [GET user track Historic info](user/get.md) : `GET /users/historic`
* [ADD track to Historic](user/put.md) : `POST /users/add_historic`
* [GET user track favorite](user/put.md) : `GET /tracks/favorite`
* [GET user track unfavorite](user/put.md) : `GET /tracks/unfavorite`
* [ADD track to user favorite](user/put.md) : `POST /tracks/add_favorite`
* [ADD track to user unfavorite](user/put.md) : `POST /tracks/add_unfavorite`
* [DEL track from user favorite](user/put.md) : `POST /tracks/rem_favorite`
* [DEL track from user unfavorite](user/put.md) : `POST /tracks/rem_unfavorite`
* [GET user album favorite](user/put.md) : `GET /albums/favorite`
* [ADD album to user favorite](user/put.md) : `POST /albums/add_favorite`
* [DEL album from user favorite](user/put.md) : `POST /albums/rem_favorite`


### Album related

Endpoints to access album data of the server.

* [GET album by id](user/put.md) : `GET /albums/id`
* [GET random album](user/put.md) : `GET /albums/random`

### Playlist related

Endpoints to access playlist data of the server.

* [GET playlist by id](user/put.md) : `GET /playlists/id`
* [GET random playlist](user/put.md) : `GET /playlists/random`


### Track related

Endpoints to access track data of the server.

* [GET track by id](user/put.md) : `GET /tracks/id`
* [GET track by title](user/put.md) : `GET /tracks/research`
* [GET random track](user/put.md) : `GET /tracks/random`
