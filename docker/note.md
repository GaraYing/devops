- docker build -t user-service-api:latest .

- docker ps

- docker rm -f $(docker ps -aq)

-  docker run --name user-service-api -d -p 3000:3000 user-service-api

### reduce image size

- `https://www.alpinelinux.org/about/`
    - pulling alpine image ``dcoerk pull node:lts-alpine``
    - 