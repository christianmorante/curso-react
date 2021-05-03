
console.log('React - Hola Mundo');



const activo = true;
/*
let mensaje ='';

if(!activo) {
    mensaje = 'Activo';
}
else {
    mensaje = 'Inactivo';
}
*/

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//cuando se desea solo ejecutar por true
//const mensaje = (!activo) ? 'Activo' : null;


//forma corta de hacer un IF
const mensaje =  activo && 'Activo';
console.log(mensaje);
