const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // así es como hacemos el enrutamiento
    if(request.url === '/autos') {
        fs.readFile('vistas/autos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    if(request.url === '/gatos') {
        fs.readFile('vistas/gatos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    if(request.url === '/autos/nuevos') {
        fs.readFile('vistas/nuevos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    if(request.url === '/imagenes/auto1.jpg') {
        fs.readFile('./imagenes/auto1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    if(request.url === '/imagenes/auto2.jpg') {
        fs.readFile('./imagenes/auto2.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    if(request.url === '/imagenes/gato1.jpg') {
        fs.readFile('./imagenes/gato1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    if(request.url === '/imagenes/gato2.jpg') {
        fs.readFile('./imagenes/gato2.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }


  /*  else {
        fs.readFile('error.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }*/
});
// dile a tu servidor qué puerto ejecutar
server.listen(6789);
// imprime a una ventana terminal
console.log("Running in localhost at port 6789");

