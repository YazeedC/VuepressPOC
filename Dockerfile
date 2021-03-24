ARG node_version=10
FROM node:${node_version}

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
COPY . .
RUN npm ci

RUN npm run build
ENV PORT=3000
EXPOSE ${PORT}
CMD ["npm", "start"]