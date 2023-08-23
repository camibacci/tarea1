let numero = Math.random() * (100 - 1) + 1;

let i = 0; 
let acerto = false;

do {
  i = i + 1;
  let intento = prompt(toString(i) + " intentos: ingrese un numero");
  if (numero == intento) {
   console.log("ACERTASTE, EN EL PRIMER INTENTO!!!");
   let acerto = true;
    } else if (numero > intento ) {
       console.log("DEBE SER MAS GRANDE");
    } else {
        console.log("DEBE SER MAS CHICO");
    }

  if ( acerto == true ) break; 

} while (i < 4);

 if ( acerto == true ) {
  console.log("ganaste en el intento" + toString(i))
  } else {
       console.log("el numero era" + toString(numero));
    }