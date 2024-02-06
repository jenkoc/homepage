FROM node:alpine

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY ./server/package.json ./

USER node

RUN npm install --pure-lockfile

COPY --chown=node:node . .

WORKDIR /usr/src/node-app/server

EXPOSE 3000

ENTRYPOINT ["npm", "start"]