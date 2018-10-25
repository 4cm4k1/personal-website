FROM mhart/alpine-node:11 as base
WORKDIR /usr/src
COPY package.json next.config.js server.js yarn.lock /usr/src/
RUN apk add --no-cache g++ make python
RUN yarn install
COPY . .
RUN yarn build && yarn --production

FROM alpine:3.7
COPY --from=base /usr/bin/node /usr/bin/
COPY --from=base /usr/lib/libgcc* /usr/lib/libstdc* /usr/lib/
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src .
EXPOSE 4242
CMD ["node", "server.js"]
