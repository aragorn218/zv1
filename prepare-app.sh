#!/bin/bash

# Vytvorenie Docker siete pre aplikáciu
docker network create my-app-network

# Vytvorenie Docker zväzku pre statické súbory
docker volume create my-app-static-volume

# Vytvorenie konfiguračného súboru pre aplikáciu
cat <<EOF > my-app-config.env
APP_NAME=my-app
APP_PORT=3000
DB_HOST=mysql
DB_PORT=3306
DB_NAME=mydb
DB_USER=mysql
DB_PASSWORD=password
EOF

# Vytvorenie Docker obrazu pre aplikáciu
docker build -t my-app .

# Spustenie Docker kontajnera pre aplikáciu
docker run -d \
  --name my-app \
  --env-file my-app-config.env \
  --network my-app-network \
  --volume my-app-static-volume:/app/static \
  -p 3000:3000 \
  my-app
