FROM node AS site
RUN npm install -g http-server
WORKDIR /app
COPY . .
ENTRYPOINT http-server -p 80