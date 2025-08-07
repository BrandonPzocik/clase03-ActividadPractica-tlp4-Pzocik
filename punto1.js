//PUNTO 1
const cuentaPrototype = {
  consultarSaldo() {
    console.log(`Saldo actual: $${this.saldoInicial}`);
  },

  depositar(monto) {
    this.saldoInicial = this.saldoInicial + monto;
    console.log(`deposito exitoso: $${this.saldoInicial}`);
  },

  extraer(monto) {
    if (this.saldoInicial >= monto) {
      this.saldoInicial = this.saldoInicial - monto;
      console.log(this.saldoInicial);
    } else {
      console.log("Fondo insuficiente");
    }
  },
};

function CuentaBancaria(titular, saldoInicial) {
  (this.titular = titular), (this.saldoInicial = saldoInicial);
}

Object.assign(CuentaBancaria.prototype, cuentaPrototype);

const miCuenta = new CuentaBancaria("brandon", 2000);

miCuenta.consultarSaldo();
miCuenta.depositar(1);
miCuenta.extraer(100);
