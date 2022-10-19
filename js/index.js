
// Iteration 1: Names and Input
//
console.log("Atividade 1:");
const hacker1 = "Jose Antonio Jarbas";
console.log ("The driver's name is " + hacker1);
const hacker2 = "Carlos de Souza Feliz das Americas";
console.log("The navigator's name is ",hacker2);
console.log("\n");





// Iteration 2: Conditionals
//

// Versão tradicional
console.log("Atividade 2:");
if ( hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else { 
    if ( hacker2.length > hacker1.length ) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
    } else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }
}
console.log("\n");

// Versão para testar uso de operador (pode ser muito interessante em algumas situações)
console.log("Atividade 2 (versão alternativa):");
console.log( hacker1.length > hacker2.length ? `The driver has the longest name, it has ${hacker1.length} characters` : ( hacker2.length > hacker1.length ) ? `It seems that the navigator has the longest name, it has ${hacker1.length} characters` : `Wow, you both have equally long names, ${hacker1.length} characters!` )
console.log("\n");




// Iteration 3: Loops

// Iteration 3.1
console.log("Atividade 3.1:");
let newString2 = "";
for ( let i=0; i < hacker1.length; i++ ) {
    newString2 += (hacker1.slice(i,i+1) + " ").toUpperCase();
}
console.log(newString2);
console.log("\n");

// Iteration 3.2
console.log("Atividade 3.2:");
let newString = "";
for ( let i=hacker2.length - 1; i >= 0; i-- ) {
    newString += hacker2.slice(i,i+1);
}
console.log(newString);
console.log("\n");

// Iteration 3.3
console.log("Atividade 3.3:");
if ( hacker1 > hacker2 ) {
    console.log("Yo, the navigator goes first definitely.");
} else { 
    if ( hacker2 > hacker1 ) {
        console.log("The driver's name goes first.");
    } else {
        console.log("What?! You both have the same name?");
    }
}
console.log("\n");
