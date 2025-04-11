FROM botpress/server:v12_31_2

EXPOSE 3000
FROM node:18

WORKDIR /app

COPY . .


RUN corepack enable
RUN pnpm install
RUN pnpm build


EXPOSE 3000

CMD ["yarn", "start"]
FROM node:18

WORKDIR /app


