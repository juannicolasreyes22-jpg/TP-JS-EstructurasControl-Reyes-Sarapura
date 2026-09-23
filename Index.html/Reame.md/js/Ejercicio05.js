import PromptSync from "prompt-sync";
const prompt = PromptSync();

const ingresosBrutos = parseFloat(prompt('Ingrese sus ingresos brutos anuales en ARS:'));
const superficie = parseFloat(prompt('Ingrese la superficie afectada en m2:'));

if (isNaN(ingresosBrutos) || isNaN(superficie) || ingresosBrutos < 0 || superficie < 0) {
  console.log('Valores numéricos no válidos.');
} else {
  let categoria = '';

  if (ingresosBrutos <= 6000000 && superficie <= 30) {
    categoria = 'Categoría A';
  } else if (ingresosBrutos <= 12000000 && superficie <= 45) {
    categoria = 'Categoría B';
  } else if (ingresosBrutos <= 18000000 && superficie <= 85) {
    categoria = 'Categoría C';
  } else {
    categoria = 'Régimen General';
  }

  console.log(`Categoría tributaria asignada: ${categoria}`);
}