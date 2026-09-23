import PromptSync from "prompt-sync";
const prompt = PromptSync();

const edad = parseInt(prompt('Ingrese la edad del conductor:'));
const cobertura = prompt('Ingrese tipo de cobertura ("terceros", "terceros_completo", "todo_riesgo"):')?.toLowerCase();
const accidentes = parseInt(prompt('Ingrese cantidad de accidentes en el último año:'));

if (isNaN(edad) || isNaN(accidentes) || edad < 18 || accidentes < 0) {
  console.log('Datos ingresados no válidos.');
} else if (accidentes >= 3 && cobertura === 'todo_riesgo') {
  console.log('Contratación denegada: Opción todo_riesgo inhabilitada por registrar 3 o más accidentes.');
} else {
  let tarifaBase = 0;

  if (cobertura === 'terceros') {
    tarifaBase = 45000;
  } else if (cobertura === 'terceros_completo') {
    tarifaBase = 70000;
  } else if (cobertura === 'todo_riesgo') {
    tarifaBase = 110000;
  } else {
    console.log('Tipo de cobertura no válido.');
  }

  if (tarifaBase > 0) {
    const recargoEdad = edad < 25 ? tarifaBase * 0.20 : 0;
    const descuentoAccidentes = accidentes === 0 ? tarifaBase * 0.10 : 0;
    const recargoAccidentes = accidentes >= 3 ? tarifaBase * 0.30 : 0;

    const valorFinal = tarifaBase + recargoEdad + recargoAccidentes - descuentoAccidentes;
    console.log(`El valor final de la póliza es: $${valorFinal.toLocaleString('es-AR')} ARS`);
  }
}
