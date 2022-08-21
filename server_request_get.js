var http = require('http');

// 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require('url');

// 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring');

var server = http.createServer(function(request, response){
    // 콘솔화면에 로그 시작 부분을 출력
    console.log('---log start---');
    // 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    // 객체화된 url 중에 QueryString 부분만 따로 객체화 후 출력
    var parsedQuery = querystring.parse(parseUrl.query,'&','=');
    console.log(parsedQuery);
    // 콘솔화면에 로그 종료 부분을 출력
    console.log('---log end---');
    response.writeHead(200, {'Content-type':'text/html'});
    response.end('Hello node.js!!');
});

server.listen(8080, function(){
    console.log('Server is running...');
});