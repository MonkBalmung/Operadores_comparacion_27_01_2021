var expresion_a = "500";
var expresion_b = 50;

// Comparación de Igualdad
console.log(
"Operador == \n"+expresion_a, typeof(expresion_a), expresion_b, typeof(expresion_b));
console.log("¿Valor A es igual a Valor B?");
console.log(expresion_a == expresion_b);

// Comparación de desigualdad
console.log("Operador != \n"+expresion_a, typeof(expresion_a), expresion_b, typeof(expresion_b));
console.log("¿Valor A es diferente a Valor B?");
console.log(expresion_a != expresion_b);

var expresion_a = "500";
var expresion_b = 50;
// Comparación de Igualdad exacta en valor y en Tipo de Dato
console.log("Operador === \n"+expresion_a, typeof(expresion_a), expresion_b, typeof(expresion_b));
console.log("¿Valor A es igual a Valor B? (en valor y en tipo)");
console.log(expresion_a === expresion_b);

// Comparación de Desigualdad exacta en valor y en Tipo de Dato
console.log("Operador !== \n"+expresion_a, typeof(expresion_a), expresion_b, typeof(expresion_b));
console.log("¿Valor A es diferente a Valor B? (en valor y en tipo)");
console.log(expresion_a !== expresion_b);

var expresion_a = 500;
var expresion_b = 50;

// Comparación de Mayor Que
console.log("Operador > \n"+expresion_a, typeof(expresion_a), expresion_b, typeof(expresion_b));
console.log("¿Valor A es mayor a Valor B?");
console.log(expresion_a > expresion_b);

// COmparación de Mayor o Igual a
console.log("Operador >= \n"+expresion_a, typeof(expresion_a), expresion_b, typeof(expresion_b));
console.log("¿Valor A es mayor o igual a Valor B?");
console.log(expresion_a >= expresion_b);

// Comparación de Menor Que
console.log("Operador < \n"+expresion_a, typeof(expresion_a), expresion_b, typeof(expresion_b));
console.log("¿Valor A es menor a Valor B?");
console.log(expresion_a < expresion_b);

// Comparación de Menor o Igual a
console.log("Operador <= \n"+expresion_a, typeof(expresion_a), expresion_b, typeof(expresion_b));
console.log("¿Valor A es menor o igual a Valor B?");
console.log(expresion_a <= expresion_b);

// Comparaciones String tienen que ver con su valor binario en ASCII
a = "A";
b = "a";
console.log(`¿Es A mayor que a? ${a>b} ¡Qué raro! ¿Por qué? \nPorque string tiene que ver con su valor en ASCII`)

