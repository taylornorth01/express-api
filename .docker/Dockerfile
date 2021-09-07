FROM node:16-alpine3.11
WORKDIR /usr/app

COPY package*.json ./
CMD ['npm', 'install'] 
COPY . .

CMD ['npm', 'run', 'startdev']