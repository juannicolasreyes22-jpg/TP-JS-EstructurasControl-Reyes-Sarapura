import PromptSync from "prompt-sync";
const prompt = PromptSync();

const distanciaKm = parseFloat(prompt('Ingrese la distancia en kilómetros:'));
const tiempoMinutos = parseFloat(prompt('Ingrese el tiempo estimado en minutos:'));
const nivelDemanda = prompt('Ingrese el nivel de demanda ("baja", "media", "alta"):')?.toLowerCase();

if (isNaN(distanciaKm) || isNaN(tiempoMinutos) || distanciaKm <= 0 || tiempoMinutos <= 0) {
  console.log('Error en el ingreso de números para distancia o tiempo.');
} else {
  const bajadaBandera = 800;
  const costoKm = 350;
  const costoMinuto = 80;

  let multiplicadorDemanda = 1.0;

  switch (nivelDemanda) {
    case 'baja':
      multiplicadorDemanda = 1.0;
      break;
    case 'media':
      multiplicadorDemanda = 1.3;
      break;
    case 'alta':
      multiplicadorDemanda = 1.8;
      break;
    default:
      console.log('Nivel de demanda desconocido. Se asumirá demanda baja.');
      multiplicadorDemanda = 1.0;
  }

  const costoSubtotal = (bajadaBandera + (distanciaKm * costoKm) + (tiempoMinutos * costoMinuto)) * multiplicadorDemanda;
  const recargoPeaje = distanciaKm > 20 ? 1500 : 0;

  const costoTotal = costoSubtotal + recargoPeaje;
  console.log(`Costo estimado total del viaje: $${costoTotal.toFixed(2)} ARS`);
}