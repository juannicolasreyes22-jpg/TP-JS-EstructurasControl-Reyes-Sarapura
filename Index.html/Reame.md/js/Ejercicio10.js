import PromptSync from "prompt-sync";
const prompt = PromptSync();

const montoARS = parseFloat(prompt('Ingrese el monto en Pesos Argentinos (ARS):'));
const monedaDestino = prompt('Ingrese moneda de destino ("USD", "EUR", "BRL"):')?.toUpperCase();
const mesesProyeccion = parseInt(prompt('Ingrese meses de proyección de inflación (entero entre 1 y 12):'));

if (isNaN(montoARS) || isNaN(mesesProyeccion) || montoARS <= 0 || mesesProyeccion < 1 || mesesProyeccion > 12) {
  console.log('Error en los datos numéricos ingresados.');
} else {
  let cotizacion = 0;

  switch (monedaDestino) {
    case 'USD':
      cotizacion = 1300;
      break;
    case 'EUR':
      cotizacion = 1420;
      break;
    case 'BRL':
      cotizacion = 220;
      break;
    default:
      console.log('Moneda de destino no soportada.');
  }

  if (cotizacion > 0) {
    const comision = montoARS * 0.02;
    const montoNetoCambio = montoARS - comision;
    const divisasRecibidas = montoNetoCambio / cotizacion;

    const inflacionAcumulada = 0.04 * mesesProyeccion;
    const perdidaPoderAdquisitivo = montoARS * (1 + inflacionAcumulada);

    console.log('--- SIMULACIÓN FINANCIERA ---');
    console.log(`Monto en ARS ingresado: $${montoARS.toFixed(2)} ARS`);
    console.log(`Comisión de cambio (2%): $${comision.toFixed(2)} ARS`);
    console.log(`Monto final recibido: ${divisasRecibidas.toFixed(2)} ${monedaDestino}`);
    console.log(`Valor equivalente proyectado a ${mesesProyeccion} meses por inflación: $${perdidaPoderAdquisitivo.toFixed(2)} ARS`);
  }
}