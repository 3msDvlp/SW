const http = require('http');

let cont=0;
http.createServer(function(req, res) {
    //res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    cont++;
    let pregunta=req.url;

    console.log('Llega una solicitud #',cont, '-', req.url);
    //res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });

    /*
    if (pregunta.startsWith('/Buscar'))
        res.write('No encuentro lo que me pides');
    else
        res.write('¿Pero qué dices? (prueba a pedir enr)');
*/
    switch (pregunta.charAt(1))
    {
        case 'A':
            res.write('Alicante es bonito');
            break;
        case 'B':
            res.write('Barcelona es feo');
        break;
        default:
            res.write('No sé lo que me pides');
        break;
    }
    res.end();    
}).listen(3000);