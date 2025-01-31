document.getElementById("MostrarRegistros").addEventListener("click", mostrarDatosAPI_v3, true);
document.getElementById("limpiar").addEventListener("click", limpiarDatosAPI, true);
let contenido = document.querySelector("#contenido");
function incrustarFoto(url_foto, nombre)
{
    console.log(url_foto);
    //let imagen= `<img src="${url_foto}" alt="Mi ejemplo">`;
    let imagen= `<a href=""><img src='C:\SW\prueba 3\swap\fotos\',${url_foto}' title='${nombre}'></a>`;
    // contenido.innerHTML += `${imagen}<br>`;
    return imagen;
    // let codigoHTML = `<a href="${url_foto}"> Ver Foto </a>`;
    // return codigoHTML;
}
function filaProducto(item, url_imagen)
{
    let mi_fila = '<tr>'; // Empieza la fila
    console.log("Artículo: ",item);
    mi_fila += `<td> ${item.nombre} </td>`;
    mi_fila += `<td> ${item.precio} </td>`;
    mi_fila += `<td> ${item.tipo} </td>`;
    let fecha = item.caducidad;
    fecha = new Date(fecha).toLocaleDateString();
    mi_fila += `<td> ${fecha} </td>`;
    mi_fila += `<td> ${ incrustarFoto(url_imagen, item.first) } </td>`;
    mi_fila += '</tr>'; // Final de fila
    return mi_fila;
}
function mostrarDatosAPI_v3()
{
console.log('Ha pulsado mostrar productos');
fetch("http://localhost:3000")
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        //let mi_tabla = '<table border=1><thead><tr><th>Title</th><th>Nombre</th><th>Apellido</th><th>Foto</th></tr></thead><tbody>'
          let mi_tabla = '<table border=1><thead><tr><th>nombre</th><th>precio</th><th>tipo</th><th>caducidad</th><th>foto</th></tr></thead><tbody>'
           let n=data.length;
        for(i=0; i<n; i++)
        {   
            let articulo = data[i];
            let url_foto =articulo.first+'.jpg';
            console.log(articulo),
            mi_tabla += filaProducto(articulo, url_foto);
        }
        mi_tabla += '</tbody></table>';
        contenido.innerHTML = mi_tabla;
    })
    
}
function limpiarDatosAPI()
{
    console.log('Ha pulsado borrar tabla');
    // Vaciar el contenido de la caja
    contenido.innerHTML = '';
    // Vaciar el contenido de la tabla (cabecera y cuerpo)
    tCabecera.innerHTML = '';
    tCuerpo.innerHTML = '';
}