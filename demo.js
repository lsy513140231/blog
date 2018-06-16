var fs= require("fs")
var dirName = process.argv[2]
var err
fs.mkdirSync("./"+dirName,0777,err)
{
	if(err)
	{
		console.log(err)
	}else
	{
		process.chdir("./"+dirName)
		fs.writeFileSync("./index.html","<!DOCTYPE><title>hello</title><h1>Hi</h1>")
		fs.mkdirSync("css")
		fs.mkdirSync("js")
		fs.writeFileSync("css/style.css","h1{Color:red;}")
		fs.writeFileSync("js/main.js","var string = \"Hello Word\";alert(string);")
		process.exit(0)
	}
}
