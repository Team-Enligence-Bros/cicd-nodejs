#!/bin/bash

#download node and npm
curl --silent --location https://rpm.nodesource.com/setup_16.x | bash -. ~/.nvm/nvm.sh
echo installing node
yum -y install nodejs
#create our working directory if it doesnt exist
DIR="/home/ec2-user/express-app"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi