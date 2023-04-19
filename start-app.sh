#!/bin/bash

# Zmena adresara na eknizka

# Spustenie Docker kontajnera pre databázu
docker start webovetechnologie 

# Spustenie Docker kontajnera pre aplikáciu
docker start my-app

# Konfigurácia kontajnerov pre znovuspustenie v prípade poruchy
docker update --restart=always webovetechnologie 
docker update --restart=always my-app

# Získanie portu, na ktorom aplikácia beží
APP_PORT=$(docker inspect --format='{{(index (index .NetworkSettings.Ports "3000/tcp") 0).HostPort}}' my-app)

# Vypísanie správy s portom
echo "Aplikácia beží na porte: $APP_PORT"