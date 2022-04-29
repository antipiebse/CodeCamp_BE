FROM node:16

WORKDIR /api-gateway/
COPY ./package.json /api-gateway/
COPY ./yarn.lock /api-gateway/
RUN yarn install

COPY . /api-gateway/
CMD yarn start:dev