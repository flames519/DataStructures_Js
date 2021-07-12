userName="$(git config user.name)"
branchName="$(git symbolic-ref --short HEAD)"
Author="$(git log --author="$userName"  -1 HEAD | grep Author)"
Date="$(git log -1 HEAD | grep Date)"


echo "$(node script.js  userName=$userName branchName=$branchName Author="$Author" Date="$Date")"