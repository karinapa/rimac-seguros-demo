#!/bin/bash
cd /home/ubuntu/nodejs
public_ip=`curl http://169.254.169.254/latest/meta-data/public-ipv4`
sudo ng serve --port 3000 --host 0.0.0.0 --publicHost $public_ip > /dev/null 2>&1 &
#sudo npm start > /dev/null 2>&1 &
#sudo npm start
#sudo node -r source-map-support/register