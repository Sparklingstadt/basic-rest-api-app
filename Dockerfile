# syntax=docker/dockerfile:1
FROM node:22

WORKDIR /src

RUN apt update && apt install -y less man-db sudo

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "server.mjs"]