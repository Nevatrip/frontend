FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./

COPY . .
RUN npm install --ignore-scripts
RUN npm run prod

EXPOSE 8000
CMD [ "npm", "start" ]
