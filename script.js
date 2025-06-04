// *Retornar un mensaje de agradecimiento
function realizarDonacion(ropa, zapatillas, juguetes) {
  return "Gracias por tu donación";
}
console.log(realizarDonacion("ropa","zapatillas","juguetes"));
alert(realizarDonacion("ropa","zapatillas","juguetes")); 
// Salida en consola: Gracias por tu donación
 
alert( realizarTipodeDonacion("Juan", "ropa", "zapatillas", "juguetes"));
// *Retornar un mensaje de agradecimiento con el nombre del donante 
{

return `Gracias ${nombre} por tu donación de ${ropa}, ${zapatillas} y ${juguetes}`;
}
console.log(realizarDonacionConNombre("Juan", "ropa", "zapatillas", "juguetes"));

// *Retornar un mensaje de agradecimiento con el nombre del donante y la cantidad de cada donación
function realizarDonacionConCantidad(nombre, ropa, cantidadRopa, zapatillas, cantidadZapatillas, juguetes, cantidadJuguetes){
}

