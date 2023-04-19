#!/bin/bash

# Zmena adresara na eknizka

# Zastavenie a odstránenie Docker kontajnera pre aplikáciu
docker stop my-app
docker rm my-app

# Zastavenie a odstránenie Docker kontajnera pre databázu
docker stop webovetechnologie 
docker rm webovetechnologie 

# Odstránenie Docker sieťe
docker network rm my-app-network

# Odstránenie Docker zväzkov
docker volume rm webovetechnologie -data

# Odstránenie Docker obrazov
docker rmi my-app-image
docker rmi postgres:12