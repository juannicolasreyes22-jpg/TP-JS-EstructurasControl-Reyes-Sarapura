import PromptSync from "prompt-sync";
const prompt = PromptSync();

const respiraDificultad = prompt('¿Presenta dificultad para respirar? ("si" / "no"):')?.toLowerCase();
const nivelDolor = parseInt(prompt('Ingrese nivel de dolor (1 al 10):'));
const presionSistolica = parseInt(prompt('Ingrese presión arterial sistólica (mm Hg):'));

if (isNaN(nivelDolor) || isNaN(presionSistolica)) {
  console.log('Entradas numéricas inválidas para dolor o presión.');
} else {
  let colorTriaje = '';
  let tiempoEspera = '';

  if (respiraDificultad === 'si' || presionSistolica > 180) {
    colorTriaje = 'Rojo';
    tiempoEspera = 'Atención Inmediata (0 minutos)';
  } else if (nivelDolor >= 7 || (presionSistolica >= 140 && presionSistolica <= 180)) {
    colorTriaje = 'Amarillo';
    tiempoEspera = 'Urgencia Media (Hasta 30-60 minutos)';
  } else {
    colorTriaje = 'Verde';
    tiempoEspera = 'Consulta Baja Prioridad (Hasta 120 minutos)';
  }

  console.log(`NIVEL DE TRIAJE: ${colorTriaje}`);
  console.log(`Tiempo máximo de espera sugerido: ${tiempoEspera}`);
}