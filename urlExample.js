const http = require("http");
const url = require("url");

http.createServer((request , response) =>
{
    console.log(request.url)
}).listen(8082);