#!/bin/bash
ng_process=`pgrep ng`
node_process=`pgrep node`
for i in $ng_process $node_process
do
    sudo kill -9 $i
    echo  "Process $i killed"
done
#Kill last process executed in the background
#sudo kill $!

#Delete old npm files to avoid future errors on ubuntu Linux
sudo rm -rf /home/ubuntu/nodejs

#stop apache2 service
sudo systemctl stop apache2

#Delete old dist file
sudo rm -rf /var/www/html/*

