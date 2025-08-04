FROM node:24-alpine
LABEL authors="sajithjeewantha"

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install

#3000:3000

CMD ["node","server.js"]