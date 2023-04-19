#!/bin/bash

cd eknizka

# Vytvorenie Docker siete pre aplikáciu
docker network create my-app-network

# Vytvorenie Docker zväzku pre statické súbory
docker volume create my-app-static-volume

# Vytvorenie konfiguračného súboru pre aplikáciu
cat <<EOF > my-app-config.env
APP_NAME=my-app
APP_PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=webovetechnologie
DB_USER=mysql
DB_PASSWORD=heslo
EOF

# Spustenie Docker kontajnera pre MySQL server
docker run -d \
 --name webovetechnologie \
 --network my-app-network \
 --volume webovetechnologie-volume:/var/lib/mysqld/ \
 -p 3306:3306 \
 -e MYSQL_ROOT_PASSWORD=MYSQL_ALLOW_EMPTY_PASSWORD \
 -e MYSQL_USER=mysql \
 -e MYSQL_PASSWORD=heslo \
 -e MYSQL_DATABASE=webovetechnologie \
mysql:latest

# Importovanie databázy z SQL súboru
docker exec -i webovetechnologie mysql -u mysql -p webovetechnologie < C:/Users/miros/Desktop/zv1/eknizka/webovetechnologie.sql

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