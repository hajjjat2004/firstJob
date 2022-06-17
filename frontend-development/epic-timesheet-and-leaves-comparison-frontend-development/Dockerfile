FROM node:10-alpine

ENV NODE_VERSION 18.3.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
