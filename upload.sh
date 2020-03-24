#!bash
if [ "$1" != "" ]; then
	git add .
	git commit -m \"$1\"
	git push -u origin master
else
    echo "Please add a commit message"
fi
