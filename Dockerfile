FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN yarn install 
COPY . .
RUN yarn build




EXPOSE 3000

ENTRYPOINT ["yarn","start"]
