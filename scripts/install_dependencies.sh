#!/bin/bash
cd /home/ubuntu
apt-get update
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

#cd /home/ubuntu/nodejs
#sudo npm install
