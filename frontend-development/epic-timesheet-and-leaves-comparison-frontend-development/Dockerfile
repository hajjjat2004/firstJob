FROM  hajjjat2004/dd_frontend-development:latest

ENV NODE_VERSION 18.3.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install 
COPY . .

CMD ["npm", "run", "start"]
