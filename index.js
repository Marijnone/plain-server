const http =require('http')
const path = require('path')
const fs = require('fs')

const mime = {
'.html': 'text/html',
'.css': 'text/css',
'.png': 'image/png'
}


http.createServer(onRequest).listen(8000)


function onRequest(request, response){
        var route = request.url
        console.log("Hellooo")
    
if (route === '/') {
    route = 'index.html'
}

if (route == '/about') {
    route = 'about.html'

} if (route == '/images/avatar.png'){
        route = 'images.html'
        response.setHeader('Content-type', 'image/png')
}
 
    fs.readFile(path.join('static', route), onread)    

    function onread (err,buf) {
      response.setHeader('Content-type', 'text/html')
        if (err){
            response.statusCode = 404
            response.end('Not found.\n')
        } else{
            response.statusCode = 200
            response.end(buf)
        }
    }   

}
