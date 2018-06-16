if [ -d "./$1" ]; then
	echo "错误：已存在该文件夹"
else
	mkdir $1
	cd $1
	touch index.html
	echo "<!DOCTYPE><title>hello</title><h1>Hi</h1>" > index.html
	mkdir css
	cd css
	touch style.css
	echo "h1{Color:red;}" > style.css
	cd ..
	mkdir js
	cd js
	touch main.js
	echo "var string = "Hello World";alert(string);"> main.js
	exit
fi
