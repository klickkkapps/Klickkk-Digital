FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY server.js ./
COPY src ./src
COPY style.css script.js ./

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
