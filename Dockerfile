FROM node:20.10-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

# RUN npm install --save-dev sequelize-cli

COPY . . 

RUN npx sequelize-cli db:seed:all

# COPY ./dist ./dist
CMD ["npm", "run", "start:dev"]