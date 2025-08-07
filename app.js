const cuentaPrototype = {
  depositar(monto) {
    this.saldoInicial += monto;
  },

  extraer(monto) {
    if (this.saldoInicial >= monto) {
      saldoInicial = saldoInicial - monto;
    } else {
      console.log("Fondo insuficiente");
    }
  },

  consultarSaldo() {
    console.log(`Saldo actual: $${this.saldoInicial}`);
  },
};

function CuentaBancaria(titular, saldoInicial) {
  (this.titular = titular), (this.saldoInicial = saldoInicial);
}

Object.assign(CuentaBancaria.prototype, cuentaPrototype);

const miCuenta = new CuentaBancaria("brandon", 2000);

console.log(miCuenta.consultarSaldo());

// PUNTO 2
