


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