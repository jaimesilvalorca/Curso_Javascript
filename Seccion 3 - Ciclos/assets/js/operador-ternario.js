const dia = 1;
const horaActual = 11;

let horaApertura;
let mensaje;

if (dia === 0 || dia === 6){
    console.log('Fin de semana');
    horaApertura = 9;
}else{
    console.log('Dia de semana')
    horaApertura = 11;
}

if (horaActual >= horaApertura){
    mensaje = 'Esta Abierto';
}else{
    mensaje = `Está cerrado, hoy abrilos a las ${horaApertura}`
} 