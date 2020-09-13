# doc-music

This project is the creation of a small music streaming application with the back and front end.

![First page](/documentation/image/first.jpg)
![log in](/documentation/image/log_in.jpg)
![sign up](/documentation/image/sign_up.jpg)
![library](/documentation/image/library.jpg)
![for you](/documentation/image/forYou.jpg)
![browse](/documentation/image/browse.jpg)
![search](/documentation/image/search.jpg)
![playlist](/documentation/image/playlist.jpg)
![player](/documentation/image/player.jpg)

# Installation

You need to have react-native, node, docker and docker-compose

# Getting Started with Doc-music

## Mobile

    cd ./docMusic/

    npm install

    npx react-native start

    Connect your android phone or emulator to your computer

### development version

    npx react-native run-android

### production version

    cd android/

    ./gradlew bundleRelease

    cd ../

    npx react-native run-android --variant=release

### environement

You can change the default value at './docMusic/env.js'

    IP_SERVER : ip to access server

    PORT_SERVER : port to access server


## Server and website

    cd ./server/serverDocMusic/

    npm install

    npm start

go to your browser at 'http://127.0.0.1:3000/'

### environement

You can change the default value at './server/serverDocMusic/env.js'

    PORT_LISTEN : port where the server listen

    IP_ADDRESS_LISTEN : ip where the server listen

    PORT_SERVER : port give by the server to access data

    IP_SERVER : ip give by the server to access data

#### exemple
your server listen to IP_ADDRESS_LISTEN at PORT_LISTEN but to access to your server from outside your  computer you have to go at 'http://' + IP_SERVER + ':' + 'PORT_SERVER' + '/'


## DataBase

    cd ./server/

    docker-compose up

check your database in your browser at 'http://localhost:8082/'


# Learn More

[API server](https://github.com/docmurloc/doc-music/tree/master/documentation/APIserver)

[API sound](https://github.com/docmurloc/doc-music/tree/master/documentation/APIsound)

[mobile cache management](https://github.com/docmurloc/doc-music/tree/master/documentation/cache)
