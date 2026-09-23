import PromptSync from "prompt-sync";
const prompt = PromptSync();

const SALDO_INICIAL = 250000;
let saldoActual = SALDO_INICIAL;

console.log('CAJERO AUTOMÁTICO');
console.log('1: Consultar Saldo');
console.log('2: Extraer Dinero');
console.log('3: Depositar Dinero');
console.log('4: Salir');

const opcion = prompt('Ingrese el número de opción:');

switch (opcion) {
  case '1':
    console.log(`Su saldo actual es: $${saldoActual.toLocaleString('es-AR')} ARS`);
    break;
  case '2':
    const montoExtraer = parseFloat(prompt('Ingrese la cantidad a extraer (múltiplo de $1.000):'));
    if (isNaN(montoExtraer) || montoExtraer <= 0) {
      console.log('Error: Monto no válido.');
    } else if (montoExtraer % 1000 !== 0) {
      console.log('Error: El monto a extraer debe ser múltiplo de $1.000 ARS.');
    } else if (montoExtraer > saldoActual) {
      console.log('Error: Fondo insuficiente.');
    } else {
      saldoActual -= montoExtraer;
      console.log(`Extracción exitosa. Nuevo saldo: $${saldoActual.toLocaleString('es-AR')} ARS`);
    }
    break;
  case '3':
    const montoDepositar = parseFloat(prompt('Ingrese el monto a depositar:'));
    if (isNaN(montoDepositar) || montoDepositar <= 0) {
      console.log('Error: Monto no válido.');
    } else {
      saldoActual += montoDepositar;
      console.log(`Depósito exitoso. Nuevo saldo: $${saldoActual.toLocaleString('es-AR')} ARS`);
    }
    break;
  case '4':
    console.log('Gracias por utilizar nuestros servicios.');
    break;
  default:
    console.log('Opción no válida.');
}