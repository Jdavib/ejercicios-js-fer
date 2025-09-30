
// console.log('Hola Mundo de nuevo');

// let numberOfLines = 1;

// function increaseLineNumber(){
//     numberOfLines ++;
// }

// // console.log('línea #', numberOfLines);

// // increaseLineNumber();
// // console.log('línea #', numberOfLines);

// // increaseLineNumber();
// // console.log('línea #', numberOfLines);

// // increaseLineNumber();
// // console.log('línea #', numberOfLines);

// function printLineNumber(){
//     console.log('línea #', numberOfLines);
//     numberOfLines ++;
    
// }
// printLineNumber();
// printLineNumber();
// printLineNumber();
// printLineNumber();

function multiplicar (num1, num2){
    return num1 * num2;
}

export function printMultiplicationTable (base, limite){
    for(let i=1; i<=limite; i++){
        console.log(base+ ' x ' + i, '= '+multiplicar(base, i)); 
    }
}
