FROM telkomindonesia/alpine:nodejs-12

ARG ARGS_NODE_BUILD
ENV BABEL_DISABLE_CACHE=1
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build:${ARGS_NODE_BUILD}
EXPOSE 4000
USER user

CMD ["npm", "start"]
