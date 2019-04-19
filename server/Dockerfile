FROM node:8-alpine

WORKDIR /srv

EXPOSE 3000

RUN npm install -g serverless 

ADD package.json .
ADD package-lock.json .

RUN npm install
ADD . ./

CMD ["serverless", "offline", "start"]
