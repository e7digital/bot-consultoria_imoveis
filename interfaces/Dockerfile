FROM botpress/server:v12_31_2

EXPOSE 3000
FROM node:18

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

