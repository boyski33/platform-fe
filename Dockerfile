FROM node:10.15.0
LABEL project="Hippo Survey"

WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
COPY angular.json /app/
COPY tsconfig.json /app/
COPY ./src/ /app/src/

RUN npm install

CMD npm start --prod
