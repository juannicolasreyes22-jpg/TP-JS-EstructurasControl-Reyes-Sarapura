import PromptSync from "prompt-sync";
const prompt = PromptSync();

const ingresoNeto = parseFloat(prompt('Ingrese su ingreso mensual neto en ARS:'));
const antiguedad = parseFloat(prompt('Ingrese su antigüedad laboral en años:'));
const deudas = prompt('¿Posee deudas pendientes? ("si" o "no"):')?.toLowerCase();
const montoSolicitado = parseFloat(prompt('Ingrese el monto del crédito solicitado en ARS:'));

if (isNaN(ingresoNeto) || isNaN(antiguedad) || isNaN(montoSolicitado)) {
  console.log('Entrada no válida. Asegúrese de ingresar números válidos.');
} else if (deudas === 'si') {
  console.log('Solicitud Rechazada: Posee deudas pendientes.');
} else if (antiguedad < 1) {
  console.log('Solicitud Rechazada: La antigüedad laboral debe ser de al menos 1 año.');
} else {
  const montoConInteres = montoSolicitado * 1.30;
  const cuotaMensual = montoConInteres / 12;
  const limiteCuota = ingresoNeto * 0.30;

  if (cuotaMensual > limiteCuota) {
    console.log(`Solicitud Rechazada: La cuota estimada ($${cuotaMensual.toFixed(2)}) supera el 30% de su ingreso neto ($${limiteCuota.toFixed(2)}).`);
  } else {
    console.log(`¡Solicitud Pre-Aprobada! Cuota estimada mensual: $${cuotaMensual.toFixed(2)} ARS por 12 meses.`);
  }
}