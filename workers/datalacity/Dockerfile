FROM node:12.16-slim

RUN apt update

WORKDIR /srv/www/workers.datalacity.com

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run start
