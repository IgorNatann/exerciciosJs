let a = 3;

global.b = 123; // criando uma variável e atribuindo ela globalmente

// this refese a global, assim com widown !
this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// criando uma variável maluca: sem var ou let.
abc = 3 // Nunca criar variável dessa forma.
console.log(global.abc);