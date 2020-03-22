#!bash
if [ "$1" != "" ]; then
    echo "Commit Message is:" \'$1\'
	git add .
	git commit -m $1
	git push -u origin master
else
    echo "Please add a commit message"
fi
