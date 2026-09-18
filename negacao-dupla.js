//Valore falsy
console.log(!!0);           //false
console.log(!!"");           //false
console.log(!!null);           //false

// Valores truthy
console.log(!!1);           //true
console.log(!!"Texto");           //true
console.log(!![]);           //true(arrays vazios são objetos, logo são truthy)
console.log(!!{});           //true(objetos vazios inteiros são truthy)