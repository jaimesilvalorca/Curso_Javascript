let a = 5;
if (a > 10){
    console.log('A es mayor a 10')
}else{
    console.log('A es menor a 10')
}

console.log('Fin del programa')


const hoy = new Date();

console.log(hoy)

let dia = hoy.getDay()

console.log(dia)

if (dia === 0 ){
    console.log('Domingo')
}else if(dia ===1){
    console.log('Lunes')
}else if(dia ===2){
    console.log('Martes')
}else if(dia ===3){
    console.log('Miercoles')
}else if(dia ===4){
    console.log('Jueves')
}else if(dia ===5){
    console.log('Viernes')
}else if(dia ===6){
    console.log('Sabado')
}else if(dia ===7){
    console.log('Domingo')
}

const diasLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
    7:'domingo'
}

const diaLetras2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

console.log(diasLetras[dia])
console.log(diaLetras2[dia])