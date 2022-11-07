let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords:{
        lat:34.034,
        lgn: -118.70 
    },
    trajes: ['Mark I','Mark V', 'HulkBuster'],
    direccion:{
        zip:'10880, 90265',
        ubicacion: 'Malibú, California'
    }

}; // objeto literal

console.log('Nombre: ', personaje.nombre);
console.log(personaje)
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ',personaje.edad)
console.log('Coors',personaje.coords)
console.log('Lats',personaje.coords.lat)
console.log('Trajes: ', personaje.trajes.length)
console.log('Ultimo Trajes: ', personaje.trajes[personaje.trajes.length -1])

const x = 'vivo';
console.log('Vivo',personaje[x])

personaje.casado = true;

delete personaje.edad;

const entriesPares = Object.entries(personaje)
console.log(entriesPares)

Object.freeze(personaje);

personaje.dinero = 1000000000000000000;

const propiedades = Object.getOwnPropertyNames (personaje);
console.log(propiedades)
const valores = Object.values(personaje);
console.log(valores)
