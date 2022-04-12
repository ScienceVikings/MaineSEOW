FROM node AS site
RUN npm install -g http-server sass
WORKDIR /app
COPY . .
ENTRYPOINT http-server -p 80