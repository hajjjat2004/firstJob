FROM node:latest

ENV NODE_VERSION 18.3.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install 
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
