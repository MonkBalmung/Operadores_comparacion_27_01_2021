// Operadores de Copulación o Relación entre valores lógicos true o false
// Compara y evalúa dos expresiones lógicas, cuyo resultado depende del tipo de relación
// AND && El resultado es true sólo cuando ambas expresiones son true 1*1=1

console.log("%cCompuerta AND", "color:red;");
console.log(`false Y false es ${false && false}`);//false
console.log(`false Y true es ${false && true}`);//false
console.log(`true Y false es ${true && false}`);//false
console.log(`true Y true es ${true && true}`);//true

// OR || El resultado es false sólo si ambas expresiones son false 0*0=0

console.log("%cCompuerta OR", "color:blue;");
console.log(`false O false es ${false || false}`);//false
console.log(`false O true es ${false || true}`);//true
console.log(`true O false es ${true || false}`);//true
console.log(`true O true es ${true || true}`);//true

// NOT ! El resultado es el valor contrario a su estado inicial 0=1; 1=0
console.log("%cCompuerta NOT", "color:green;");
console.log(`NO true es ${!true}`);//false
console.log(`NO false es ${!false}`);//true

// XOR 

// Expresiones de comparacion logicas anidadas

console.log((8>4) && (7>90));//false
console.log((8>4) || (7>90));//true
console.log(!((8>4) || (7>90)));//false