#! /bin/bash

# Build server app
cd springboot-backend
sudo apt install maven
mvn package
cd target
java -jar springboot-backend-0.0.1-SNAPSHOT.jar