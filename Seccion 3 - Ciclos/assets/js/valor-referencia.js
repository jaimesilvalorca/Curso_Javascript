let a = 10;
let b = a;
a = 30;

console.log({a, b})


let juan = { nombre: 'Juan '}
let ana  = {...juan}; //parametro spred que conserva el nuevo valor a ana

console.log({juan,ana})

ana.nombre = 'Ana'

const cambiaNombre = (...persona) => { // si se agrega ... en persona muestra el arreglo completo en la funcion
    persona.nombre = 'Tony'
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter)

console.log({peter,tony})

const frutas = ['Manzan','Pera','Piña']

const otrasFrutas = [...frutas]

otrasFrutas.push('Mango ')

console.table({frutas,otrasFrutas})


const frutas2 = ['Manzan','Pera','Piña']

const otrasFrutas2 = frutas2.slice()


