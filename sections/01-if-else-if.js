

// console.log('Inicio de Programa');

// // let isTired = true;

// // if (isTired){
// //     console.log ('Tomar café');
// // } else{
// //     console.log ('Tomar agua');
// // }

// let grade = 59;

// if ( grade >= 60 ) {
//     console.log('El alumno aprueba la clase');
// } else if ( grade > 50 ) {
//       console.log('Por favor estudie más!')
// } else {
//       console.log('El alumno No aprueba la clase')
//   }

//     // if ( grade >= 50 ) {
//     //     console.log('Por favor estudie más!')
//     // } else {
//     //     console.log('El alumno No aprueba la clase')
//     //     if ( grade >= 50 ) {
//     //     console.log('por favor estudie mas')
// //     // } else {
// //     //     console.log('el alumno No apruena la clase')
// //     }
// // }
// console.log('Fin de Programa');

// let grade = 59

// if( grade >= 90 ){
//     console.log ('la nota del alumno es A');
// } else if ( grade >= 80 ){
//     console.log ('la nota del alumno es B');
// } else if ( grade >= 70 ) {
//     console.log ('la nota del alumno es C');
// } else if ( grade >= 60 ) {
//     console.log ('la nota del alumno es D');
// } else {( grade < 60 ) 
//     console.log ('la nota del alumno es F');
// }

let grade = 59
let gradeLetter;

if( grade >= 90 ){
    gradeLetter = 'A';
} else if ( grade >= 80 ){
    gradeLetter = 'B';
} else if ( grade >= 70 ) {
    gradeLetter = 'C';
} else if ( grade >= 60 ) {
    gradeLetter = 'D';
} else { 
    gradeLetter = 'F';
}

console.log('el valor de la letra es' + " " + gradeLetter);