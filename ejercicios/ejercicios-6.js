//Ejercicio 1

let libras = 150;
let kilogramos = libras * 0.453592;

const div1 = document.getElementById("ejercicio1");
      div1.innerHTML = `${libras} libras = ${kilogramos} kilogramos`


// Ejercicio 2

let kilometros = 10;
let millas = kilometros * 0.62;

const div2 = document.getElementById("ejercicio2");
      div2.innerHTML = `${kilometros} kilómetros = ${millas} millas`

    
// Ejercicio 3

let base = 10;
let altura = 5;
let area = base * altura * 0.5;

const div3 = document.getElementById("ejercicio3");
      div3.innerHTML = `${base}cm x ${altura}cm x 0.5 = ${area}cm²`

// Ejercicio 4

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let mayor = 0;
for (let i =0; i < numbers.length; i++) {
  if( numbers[i]>= mayor ){
     mayor = numbers[i];
}   
  }
 const div4 = document.getElementById("ejercicio4");
       div4.innerHTML = `El número mayor es ${mayor}`

// Ejercicio 5

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let par = 0;
let impar = 1;

for (let i =0; i < numeros.length; i++) {
  if( numeros[i] % 2 === par ){
     numeros [i], 'es un numero par';
//      console.log(numeros[i], 'es un numero par');
     const div5 = document.getElementById("ejercicio5");
       div5.innerHTML += `${numeros[i]}  es un numero par <br>`;
  }
  if( numeros[i] % 2 === impar ){
     numeros [i], 'es un numero impar';
//      console.log(numeros[i], 'es un numero impar');
     const div5a = document.getElementById("ejercicio5a");
       div5a.innerHTML += `${numeros[i]} es un numero impar <br>`;
  }
}

// Ejercicio 6

for (let j=1; j <=5; j++){
      let linea = "";
      for (let i=1; i <= 5 ; i++) {
          linea = linea + " " + j*i;              
      }
      // console.log(linea)
      const div6 = document.getElementById("ejercicio6");
      div6.innerHTML += `${linea} <br>`;
}
   
// Ejercicio 7

let maxValue = max( 8, 10, 4);

// function max (num1, num2, num3){
//   if( num1 >= num2 ){
//     return num1;
// } else if ( num2 >= num1 ){
//     return num2;
// } else if ( num2 >= num3 ){
//     return num2;
// } else if (num3 >= num2){
//     return num3;
// } else if (num3 >= num1){
//     return num3;
// } else (num1 >= num3)
//     return num1;
// }

// function max (num1, num2, num3){
//   if( num1 >= num2 ){
//     return num1;
//   } else{
//     return num2;
//   }
// }
//   if ( num2 >= num3 ){
//     return num2;
//   } else{
//     if (num1 > num3){
//     return num1;
//   } else {
//       return num3;
//   }

//   }

function max (num1, num2, num3){
  if( num1 > num2 ){
    if ( num1 > num3){
    return num1;
    } else {
      return num3;
    }
}
if ( num2 > num3){
    return num2;
    } else {
      if (num1 > num3){
      return num1;
  } else {
        return num3;
      }
}
}

// console.log( maxValue );

const div7 = document.getElementById("ejercicio7");
      div7.innerHTML += `${maxValue}`;

// Ejercicio 8

function largestNameOfArray( nameArray){
let valor = "";
// let posicion;
for (let i =0; i < nameArray.length; i++) {
       
  if( nameArray[i].length > valor.length ){
     valor = nameArray[i];
//      posicion = i; 
      }  
  }
//    console.log( posicion); 
  console.log( valor); 
}
  let heroes = ['Deadpool', 'Ciclope12345678', 'Magneto', 'Profesor Charles Xavier'];
largestNameOfArray( heroes );


// Tip:
// let hero = 'Strider';
// hero.length; // 7
    


                   


