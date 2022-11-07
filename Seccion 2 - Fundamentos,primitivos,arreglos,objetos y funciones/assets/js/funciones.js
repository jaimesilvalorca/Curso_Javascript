function saludar(nombre){
    console.log('hola ' + nombre);
    return 1;
}

//const saludar2= function(){
//    console.log('hola mundo');
//}

saludar('Jaime')


const saludarFlecha = () =>{
    console.log('hola flecha')
}

const saludarFlecha2 = (nombre) =>{
    console.log('hola ' + nombre)
}

saludarFlecha2('Melisa')

function sumar(a,b){
    return a + b
}

console.log(sumar(1,2))

const sumar2 = (a,b) => {
    return a + b;
}

console.log(sumar2(1,2))

function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random()

console.log(getAleatorio2())