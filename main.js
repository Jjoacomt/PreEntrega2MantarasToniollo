/*Pre entrega dos, la idea temporalmente sera simular un lugar en el que puedan comprar ropa eligiendo tanto que prenda (ARRAY) 
Luego dee eso deberia escribir si la prenda es la seleccionada(ALERT ) + (Switch por si o por no)
en caso de que la respuesta sea positiva me enviaria a elegir un color, basicamente repitiendo el primer proceso y agregando una busqueda de color para saber si se encuentra en el array, en caso de que no este deberiad e saltar un alert que avise que no se encunentra en ese color.
En caso de que sea Negativa volveria a preguntarme que prenda de ropa deseo.

Mediante una function concateno ambas respuesta, tanto prenda como color para al final preguntar si la convinacion es la correcta.


*/

// ARRAYS
var ropa=["remera", "pantalon", "buzo", "campera"]

var color=["rojo","azul","amarillo","negro", "blanco", "verde", "marron"]

// Inicio
let prenda = prompt("Bienvenido a GymBoost, que prenda desea comprar? Porfavor ingrese el nombre de la misma en singular").toLowerCase()

let encontrar = ropa.find(x => x === prenda)

// Eleccion de prenda de ropa
if (encontrar !== undefined) {
    let yon = prompt('usted quiere comprar 1 ' + prenda + ' ¿verdad?').toLowerCase()
    var sn = yon

// Eleccion de color
    switch(sn){
        case 'si':
        let colorPrenda = prompt('Exelente, de que color desea su ' + prenda).toLowerCase()
        let encontrarColor = color.find(x => x === colorPrenda)
    if(encontrarColor !== undefined){
        let preguntaFinal = prompt('Usted desea comprar una ' + prenda + ' de color '+ colorPrenda + '¿Correcto?').toLowerCase()

// Posibles respuestas a la pregunta final 
    if(preguntaFinal == 'si'){
        alert("Exelente, su encargo ya fue tomado! Espere a que el personal se comunique con usted, muchas gracias por elegirnos")
    }
    else{
        alert("Bien, pruebe con rehacer el pedido desde el comienzo o espere a que alguien del personal se comunique con usted¡Disculpe por el inconveniente !")
    }
    }    
        else {
            alert(`Disculpe, no tenemos en ese color, pero podemos ofrecerle los siguientes colores: ` + color )
    
    }
        break;
    
        default:
        alert('Entendido, le vamos a pedir que recargue la pagina para volver a empezar con su pedido.')

        break;
    }
}
else{
    alert(`Disculpe, no tenemos "${prenda}" en la tienda.`)
}

