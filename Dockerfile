FROM node:10.12.0

WORKDIR /usr/app

COPY package.json .

RUN npm install --quiet

COPY . .
