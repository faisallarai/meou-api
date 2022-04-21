FROM node:17-alpine3.14

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci --production

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]