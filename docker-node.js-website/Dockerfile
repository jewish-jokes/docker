FROM node:18-alpine

RUN mkdir -p /home/node/my-app/ && chown -R node:node /home/node/my-app

WORKDIR /home/node/my-app

COPY --chown=node:node ["package-lock.json", "package.json", "./"]

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]