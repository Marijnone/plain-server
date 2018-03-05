const http =require('http')
const path = require('path')
const fs = require('fs')
const dir = require('node-dir') 
const static = ('./static/images')
const mime = {
'.html': 'text/html',
'.css': 'text/css',
'.png': 'image/png'
}

http.createServer(onRequest).listen(8000)

console.log('Server Running on http://127.0.0.1:8000 ');


function onRequest(request, response){
        var route = request.url
        console.log("There was a request")
        
         
if (route === '/') {
    route = 'index.html'
}

if (route == '/about') {
    route = 'about.html'

} if (route == '/images'){
        route = '/static/images/images.html'
}
// if (route == '/images/index.html')
//     dir.Readfiles(__static, function(err,files){
//         if (err) throw err;
//         console.log(files);
        
//     })
    //still debugging the code 🦆
   
 
    fs.readFile(path.join('static', route), onread)    

    function onread (err,buf) {
      response.setHeader('Content-type', 'text/html')
        if (err){
            response.statusCode = 404
            response.end('404 page is not found. :( \n')
        } else{
            var extension = path.extname(route)
            var type = mime [extension] || 'text/plain'
            response.statusCode = 200
            response.setHeader('Content-Type',type)
            response.end(buf)

        }
    }   

}
