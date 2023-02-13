//Productos y precios

//marioBros = 5.99
//sonic = 9.99
//bomberMan = 4.99
//tetris = 4.99

//android= 3
//ios = 5

//Los juegos se elegirían en la página con su respectivo código (del 1 al 4), 
//luego se debe escribir la plataforma android o ios.



let juegoElegido = prompt('Elija un juego por favor con el numero que tiene asignado')

function juego(){

     if(juegoElegido == 1) {
          precioJuego = 5.99
          console.log ('El usuario ha elegido Mario Bros')
     } else if (juegoElegido == 2) {
          juegoElegido = 9.99
          console.log ('El usuario ha elegido Sonic')     
     } else if (juegoElegido == 3) {
          juegoElegido = 4.99
          console.log ('El usuario ha elegido Bomber Man')     
     } else if (juegoElegido == 4) {
          juegoElegido = 4.99
          console.log ('El usuario ha elegido Tetris')     
     } else {
          juegoElegido = 0
          console.log ('El usuario no ha elegido ningun juego')
     }
}     
juego()


//elegir plataforma

let plataformaElegida = prompt ('Elija la plataforma por favor: iOS o Android')

if (plataformaElegida == 'iOS') {
     plataformaElegida = 5
     console.log ('El usuario ha elegido iOS')          
} else if (plataformaElegida == 'Android') {
     plataformaElegida = 3
     console.log ('El usuario ha elegido Android')     
} else {
     console.log ('El usuario no ha elegido ninguna plataforma')
}

let sumaProdPlat = (juegoElegido + plataformaElegida)
console.log ('El total del producto es ' + '$' +sumaProdPlat)

