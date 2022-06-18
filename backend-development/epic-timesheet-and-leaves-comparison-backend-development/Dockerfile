FROM  hajjjat2004/dd_backend-development:latest

ENV NODE_VERSION 18.3.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install
RUN npm install nodemon -y
   
COPY . .

CMD ["node", "app.js"]
