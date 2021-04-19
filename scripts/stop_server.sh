#!/bin/bash
node_process=`pgrep node`
for i in $node_process
do
    sudo kill -9 $i
    echo  "Process $i killed"
done

#Delete old npm files to avoid future errors on ubuntu Linux
sudo rm -rf /home/ubuntu/nodejs
