# doc-music

This project is the creation of a small music streaming application with the back and front end.

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


## Server and website

    cd ./server/serverDocMusic/

    npm install

    npm start

go to your browser at 'http://127.0.0.1:3000/'

## DataBase

    cd ./server/

    docker-compose up

check your database in your browser at 'http://localhost:8082/'


# Learn More