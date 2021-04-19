#!/bin/bash
cd /home/ubuntu/nodejs
public_ip=`curl http://169.254.169.254/latest/meta-data/public-ipv4`

# copy dist
#sudo mkdir /home/ubuntu/angular
sudo mv -u /home/ubuntu/nodejs/dist/application/* /var/www/html/

cd /var/www/html 
sudo cp htaccess.txt .htaccess

cd /home/ubuntu/nodejs
DIRECTORY_INDEX='/var/www/html/index.html'
if [ -f "$DIRECTORY_INDEX" ]; then
  sudo systemctl start apache2
else
  sudo ng serve --port 4200 --host 0.0.0.0 --publicHost $public_ip > /dev/null 2>&1 &
fi