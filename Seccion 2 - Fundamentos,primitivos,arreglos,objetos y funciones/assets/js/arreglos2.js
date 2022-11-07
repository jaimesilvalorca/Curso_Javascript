let juegos = ['Zelda','Mario','Metroid','Chrono']
console.log('Largo: ',juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length -1]

console.log({primero,ultimo})

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr})
});

let nuevaLongitud = juegos.push('F-Zero'); //entrega un nuevo valor al arreglo al final
console.log({nuevaLongitud,juegos})

nuevaLongitud = juegos.unshift('Fire Emblem') // integra un nuevo elemento al arreglo en la primera posicion
console.log({nuevaLongitud,juegos})

let juegoBorrado = juegos.pop() // elimina el ultimo valor de un arreglo    
console.log({juegoBorrado,juegos})

let pos = 1

let juegosBorrados = juegos.splice(pos,1); // elimina datos del arreglo indica inicio y final
console.log({juegosBorrados,juegos})

let metroidIndex = juegos.indexOf('Metroid') // bsca un indice si encuentra -1 es porque no encontro ningun valor
console.log({metroidIndex})


