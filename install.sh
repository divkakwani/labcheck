#!/bin/bash


uid=$(id -u);

if [[ $uid -ne 0 ]]; then
    echo 'Run as root, please'
    exit -10
fi


deps=(nginx python3 python3-virtualenv  python3-mysqldb)

echo "LabCheck depends on the following system packages:"
echo "-----------------------------------------"
for dep in ${deps[*]}; do
    echo $dep
done
echo "-----------------------------------------"

echo "Proceed with the installation (y/n):"
read response

if [ $response != "y" ]; then
    echo "exiting..."
    exit -23
fi

for dep in ${deps[*]}; do
    echo -e "\nInstalling $dep ..."
    sudo apt-get install -y $dep
done

echo -e "\nInstalling python packages..."





