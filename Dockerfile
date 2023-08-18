FROM node:20-slim as builder

WORKDIR /app
RUN apt-get update && apt-get install -y python3

RUN npm install gatsby-cli -g


COPY package.json ./
RUN npm install --force

FROM node:20-alpine

WORKDIR /app
COPY --from=builder --chown=node:node /app/node_modules/ /app/
COPY . .
RUN npm run build

RUN rm -rf ./src

EXPOSE 9000
CMD [ "node_modules/.bin/gatsby","serve","-H","0.0.0.0","-p","9000" ]