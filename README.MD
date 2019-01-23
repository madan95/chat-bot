# Speech Chat Bot

Simple chat bot implementation.

## Getting Started

- Once you have the clone of the repo. Create account from [Dialogflow](https://console.dialogflow.com/api-client/#/login) and get the API_TOKEN. Set the .env API_TOKEN variables.


### Prerequisites

- Docker
- Docker composer
- Make
- node
- [Dialogflow](https://console.dialogflow.com/api-client/#/login)

### Installing

- ```cd chat-bot```
- ```git submodule init```
- ```git submodule update```
- ```cd traffic```
- ```make start```
- ```cd ..```
- Set the .env variable
- ```npm install```
- ```make start```

## Running the tests

Now you should be able to access site on [chatbot.localhost](https://chatbot.localhost)

## Built with

- Docker
- DialogFlow
- WebSpeechAPI
- Socket.io

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/madan95/dockerTemple/tags).

## TODO

- Add chat components
- Add support for scss in webpack
- Fix node in docker
- Make node usable from both docker and host
- Better initial start script
- Fix gitignore for submodule

## Author
- Madan Limbu
