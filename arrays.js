


let juegos = ['Zelda', 'Mario', 'Metroid','Chrono'];

console.log('largo:',juegos.length ) //despues del juegos. van a aparecer los metodos(son instrucciones que se ejecutan con un parentesis excepto las que tienen forma de prisma(esas no necesitan parentesis))
//el length nos va a decir cuantos elementos hay dentro del arreglo 

let primero = juegos[0];//con esto sabemos cual es el primer elemento 
let ultimo = juegos [ juegos.length - 1] //esto lo podemos usar cuando el arreglo tiene demasiadas posiciones para contar o no se a ciencia cierta cual es el último 

console.log({ primero,ultimo
})

juegos.forEach((elemento,indice,arr)=> {
    console.log({elemento,indice,arr});
});




// ejemplos nuevos 


const frutas = [ 'Manzana', 'Pera', 'Piña'];

const otrasFrutas = frutas;

otrasFrutas.push('Mango');

console.table( {frutas, otrasFrutas} );




const frutas2 = ['sandía','durazno','piña'];

const otrasFrutas2 = [...frutas2];

otrasFrutas2.push('cereza');

console.table({frutas2,otrasFrutas2});







let dia = 0

if( dia === 0){
    console.log('Domingo')
} else {
    console.log('no es el dia correcto')
}




const hoy = new Date();

let nuevoDia = hoy.getDay(); 


const diasLetras = {
0: 'domingo', 
1: 'lunes', 
2: 'martes', 
3: 'miercoles',
4: 'jueves', 
5: 'viernes', 
6: 'sábado',
} 

console.log(diasLetras[nuevoDia] || 'Dia no definido');