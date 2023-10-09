# development stage
FROM node:18 as base

WORKDIR /app

COPY package*.json tsconfig.json ./

COPY ./src ./src

COPY ./config ./config

COPY ./assets ./dist/assets

RUN npm install

RUN npm run build