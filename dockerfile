FROM node:8
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /

COPY package.json ./

RUN npm install -g typescript

RUN npm install -g ts-node

RUN npm install --production

COPY . .

RUN export GOOGLE_APPLICATION_CREDENTIALS="My First Project-a32422b9263b.json"

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

