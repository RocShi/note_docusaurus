#!/bin/bash

file_log=deploy.log
file_fifo=run.fifo
rm -f "$file_log" "$file_fifo"
mkfifo $file_fifo
cat $file_fifo | tee -a $file_log &
exec 3>&1
exec 4>&2
exec 1>$file_fifo
exec 2>&1

gbError="\033[1;31m[ERROR]\033[0m"
gbWarning="\033[1;33m[WARNING]\033[0m"
gbInfo="\033[1;32m[INFO]\033[0m"
gbGood="\033[1;32m[GOOD]\033[0m"

current_time=$(date "+%Y-%m-%d %H:%M:%S")
echo -e "\n <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< $current_time >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n"
echo -e "$gbInfo Start to build and deploy note...\n"

uames=$(uname -s)
os_name=${uames:0:4}
if [ "$os_name" == "Linu" ]; then # Linux
    source /usr/local/nvm/nvm.sh
elif [ "$os_name" == "MING" ]; then # MINGW, windows, git-bash
    :
else
    exit 1
fi

nvm use 16.15.1
npm install
npm run build

if [ $? -eq 0 ]; then
    rm -rf build/{robots.txt,sitemap.xml} # forbid SEO
    echo -e "\n$gbGood Successfully built and deployed note!"
else
    echo -e "\n$gbError Faild to deploy note, please check it!"
fi

printf "\015"
exec 1>&3
exec 2>&4
rm -f "$file_fifo"
