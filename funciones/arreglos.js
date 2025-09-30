


let employees = ['Fernando', 'Melissa', 'Eduardo'];
let salaries = [1500, 2400, 3200];
let flowers = ['Rosa', 'Girasol', 'Lirio'];

// array.length = flowers [];

for (let i = 0; i < flowers.length; i++) {
    console.log(flowers[i]);    
}

// for (let i = 0; i < employees.length; i++) {
// }
// for (let i = 0; i < salaries.length; i++) {
     
//     console.log(employees[i], 'tiene un salario de', salaries[i] );   
// }

for (let i = 0; i <= employees.length-1; i++) {
    let employee = employees[i];
    let salary = salaries[i];
    console.log (employee + ' tiene un salario de '+ salary);
}
        