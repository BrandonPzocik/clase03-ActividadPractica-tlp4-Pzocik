String.prototype.concatenarPalabra = function (palabra) {
  return `${this} ${palabra}`;
};

const titular = "Brandon";
const resultado = titular.concatenarPalabra("tiene una cuenta bancaaria");

console.log(resultado);
