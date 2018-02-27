const http =require('http')
const path = require('path')
const fs = require('fs')

const mime = {
'.html': 'text/html',
'.css': 'text/css'
}

const routes = {
    '/about': 'This is a static server running on node.js with no package used 👌',
    '/': 'Hello World \n'
}

http.createServer(onRequest).listen(8000)


function onRequest(request, response){
        var route = request.url
        console.log("Hellooo")
    
if (route === '/') {
    route = 'index.html'
}

if (route == '/about')
    route = 'about.html'
       

        // if (request.url in routes) {
        //     response.setHeader('Content-Type', 'text/html')
        //     response.end("<h1>This is the About page</h1>")
        //     response.statusCode = 200
        // }

        // else {
        //     response.statusCode = 404 
        //     response.setHeader('Content-Type', 'text/html')
        //     response.end("<h1>Ah, we could not find this page \n</h1>")
        // }


    
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
