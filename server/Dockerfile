FROM node:19

WORKDIR usr/src/app

COPY package.json ./
RUN npm i

COPY . .

CMD [ "node", "index.js" ]