FROM alpine:3.15

ENV NODE_VERSION 18.3.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install
RUN npm install nodemon -y
   
COPY . .

EXPOSE 3010

CMD ["node", "app.js"]
