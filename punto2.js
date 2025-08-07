class CuentaBancaria1 {
  titular;
  #saldoInicial;
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldoInicial = saldoInicial;
  }

  get saldo() {
    return this.#saldoInicial;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this.#saldoInicial = nuevoSaldo;
      console.log(`Saldo modificado: ${nuevoSaldo}`);
    } else {
      console.log("El saldo no puede ser negativo");
    }
  }
}

const miCuenta1 = new CuentaBancaria1("Brandon1", 3000);

console.log(miCuenta1.saldo);
miCuenta1.saldo = 50;
miCuenta1.saldo = -2;
