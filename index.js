console.log("si esta vinculado")

let pregunta = prompt("Como estas?")

if(pregunta == "bien"){
    alert("Buenisimo me alegro por vos")
    alert("Que te vaya bien, cuidame eso")
}else if(pregunta == "mal"){
    alert("uh bajon")
}else{
    alert("se ejecuta el else")
}

let mentor = {
    name: "Lucas",
    age: 22,
    heLikesPizza: prompt("Te gusta la pizza?")
}

if(mentor.heLikesPizza == "si") {
    alert("A mi también :D")
    let otraPregunta = prompt("y que gusto te gusta mas?")
    if(otraPregunta == "muzza") {
        alert("o mai gad")
    }else if(otraPregunta == "calabresa"){
        alert("buena elección chaval")
    }else{
        alert("no te entendi, disculpa")
    }
}else if(mentor.heLikesPizza == "no"){
    alert("vos te lo perdes")
}else{
    alert("disculpa, lo podes volver a repetir")
}

//SWITCH CASE

let superheroe = prompt("que superheroe eres")
switch(superheroe){
    case 'thor':
        alert("es thor")
        break
    case 'superman':
        alert("es superman")
        break
    case 'spiderman':
        alert("es spiderman")
        break
    case 'mateo':
        alert("es mateo")
        break
    default:
        alert("ninguno")
}

let productos = [
    {
        nombre: 'Air Force 1',
        categoria: 'Nike',
        color: ""
    },
    {
        nombre: 'Bounce',
        categoria: 'Converse',
        color: ""
    },
    {
        nombre: 'Yeezy 600',
        categoria: 'Adidas',
        color: ""
    },
    {
        nombre: 'Future',
        categoria: 'Puma',
        color: ""
    }
]

switch (productos[3].categoria) {
    case 'Nike':
        productos[0].color = 'Naranja'
        console.log(productos[0].color)
        break
    case 'Converse':
        productos[1].color = 'Azul'
        console.log(productos[1].color)
        break
    case 'Adidas':
        productos[2].color = 'Verde'
        console.log(productos[2].color)
        break
    case 'Puma':
        productos[3].color = 'Amarillo'
        console.log(productos[3].color)
        break
}

// exercise 1: Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

let numm1 = 22
let numm2 = 3

 if(numm1>numm2){
    console.log ('num1 es mayor que num2')
 } else if (numm1<numm2) {
     console.log ('num2 es mayor que num1 ')
 } else {
     console.log( "son iguales")
 }

//  Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.
console.log('--------------');
let numb1 = 105
let numb2 = 117

if (numb1 !== numb2){
     console.log('son distintos')
}else if(numb1 === numb2){
     console.log('son iguales')
}else{
     console.log('ingrese un numero correcto')
}

//  Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.

console.log('--------')
let num1 = 103
let num2 = 100
let num3 = 5

if(num1<num2 && num1<num3){
    console.log('num1 es el mas chico')
}else if(num2<num1 && num2<num3){
    console.log('num2 es el mas chico')
}else{
    console.log('num3 es el mas chico')
}

//  Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

console.log('--------')
let persona1 = {
    nombre: 'Pepe',
    edad: 74,
    altura: 1.20
}
let persona2 = {
    nombre: 'Toto',
    edad: 28,
    altura: 1.90
}

if (persona1.edad > persona2.edad){
    console.log('persona1 es mayor que persona2');
}else if(persona2.edad > persona1.edad){
    console.log('persona2 es mayor que persona1');
}else{
    console.log('tienen la misma edad');
}

if(persona1.altura > persona2.altura){
    console.log('persona1 es mas alto que persona2');
}else if(persona1.altura< persona2.altura){
    console.log('persona2 es mas alto que persona1');
}

// Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.

let nombre = prompt("ingrese su nombre")
let pase = prompt("vip o normal")
let entrada = prompt("tiene entrada o no?")

if(nombre === "antonella" || pase === "vip"){
    console.log("bienvenido " + nombre)
} else if (entrada === "si"){
   let pregunta = prompt("desea utilizarla?")
   if(pregunta === "si"){
    console.log("bienvenido")
   }
} else{
    let pregunta2 = prompt("desea comprar una entrada?")
    if(pregunta2 === "si"){
        let dinero = Number(prompt("dinero disponlible"))
        if(dinero >= 1000){
            console.log("entrada disponible, bienvenido " + nombre)
        } else{ console.log("rechazo de venta")}
    } 
    else{console.log("despedida")
}
}

//  Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.
// console.log('--------')

 let numeroCorrecto = 3
 let numeroIncognita = Number(prompt('Ingrese un número del 1 al 10'))
 if(numeroIncognita > numeroCorrecto){
    alert('el numero ingresado es mayor, vuelve a intentarlo')
 } else if(numeroIncognita < numeroCorrecto){
     alert ('el numero ingresado es menor, vuelve a intentarlo')
 }else if(numeroIncognita === numeroCorrecto){
     alert ('el numero ingresado es correcto')
 }

// exercise 5: Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
// console.log('--------')

let edadDato = prompt ('ingresar edad')
if(edadDato <= 12){
    console.log('es un infante');
}else if(edadDato <= 18){
    console.log('es un adolescente');
}else if (edadDato <= 45){
    console.log('es un mayor');
}else if (edadDato < 99 && edadDato > 45 ){
    console.log('es un anciano');
}else if (edadDato > 100){
    console.log('realmente tiene esa edad?');
}

// Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

let jugadores = [
    { nombre: "agus", opcion: prompt("piedra, papel o tijera") },
    { nombre: "anto", opcion: prompt("piedra, papel o tijera") },
  ];

  if (jugadores[0].opcion === "papel" && jugadores[1].opcion === "piedra") {
    alert("gano agus");
  } else if (
    jugadores[0].opcion === "tijera" &&
    jugadores[1].opcion === "papel"
  ) {
    alert("gano agus");
  } else if (
    jugadores[0].opcion === "piedra" &&
    jugadores[1].opcion === "tijera"
  ) {
    alert("gano agus");
  } else if (jugadores[0].opcion === jugadores[1].opcion){
    alert("empate");
  } else {
    alert("gano anto");
  }

//  Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

let color = prompt('escribi un color')

switch(color){
    case 'negro':
    case 'blanco':
        alert('falta de color')
        break
    case 'verde':
        alert('elegiste verde')
        break
    case 'rojo':
        alert('elegiste rojo')
        break
    case 'vermelho':
        alert('elegiste rojo en portugues')
        break
}

//  Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

let operacion = (prompt("ingrese una operacion"))
let val1 = Number(prompt("ingrese un numero"))
let val2 = Number(prompt("ingrese un numero"))



switch (operacion){
    case "suma":
        console.log(val1+val2);
        break
        case "multiplicacion":
        console.log(val1*val2);
        break
        case "division":
          if(val2 === 0){alert("ERROR")};
          console.log(val1/val2);
            break

}

// Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

let datos = {
    nombre: prompt("ingrese su nombre"),
    apellido: prompt("ingrese su apellido"),
    dni: Number(prompt("ingrese su dni"))
}

console.log(datos)
 let pregunta1 = prompt("los datos estan correctos?")

switch (pregunta1) {
    case "si":
        console.table(datos), 
         console.log("datos ingresados exitosamente")
         break
         case "no":  console.log("vuelva a intentarlo en un mes")

}