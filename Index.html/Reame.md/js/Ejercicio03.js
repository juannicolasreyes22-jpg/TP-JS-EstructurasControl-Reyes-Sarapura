import PromptSync from "prompt-sync";
const prompt = PromptSync();

const sueldoBruto = parseFloat(prompt('Ingrese el Sueldo Bruto del trabajador en ARS:'));

if (isNaN(sueldoBruto) || sueldoBruto <= 0) {
  console.log('Error: Ingrese un sueldo bruto válido.');
} else {
  const jubilacion = sueldoBruto * 0.11;
  const obraSocial = sueldoBruto * 0.03;
  const ley19032 = sueldoBruto * 0.03;
  const totalRetencionesFijas = jubilacion + obraSocial + ley19032;

  const sueldoNetoProvisorio = sueldoBruto - totalRetencionesFijas;
  let impuestoGanancias = 0;

  if (sueldoNetoProvisorio > 2000000) {
    const excedente = sueldoNetoProvisorio - 2000000;
    impuestoGanancias = 120000 + (excedente * 0.25);
  } else if (sueldoNetoProvisorio > 1200000) {
    const excedente = sueldoNetoProvisorio - 1200000;
    impuestoGanancias = excedente * 0.15;
  }

  const sueldoNetoFinal = sueldoNetoProvisorio - impuestoGanancias;

  console.log('--- RECIBO DE SUELDO ---');
  console.log(`Sueldo Bruto: $${sueldoBruto.toFixed(2)} ARS`);
  console.log(`- Jubilación (11%): $${jubilacion.toFixed(2)} ARS`);
  console.log(`- Obra Social (3%): $${obraSocial.toFixed(2)} ARS`);
  console.log(`- Ley 19.032 (3%): $${ley19032.toFixed(2)} ARS`);
  console.log(`Total Descuentos de Ley: $${totalRetencionesFijas.toFixed(2)} ARS`);
  console.log(`Retención Impuesto a las Ganancias: $${impuestoGanancias.toFixed(2)} ARS`);
  console.log(`Sueldo Neto Final: $${sueldoNetoFinal.toFixed(2)} ARS`);
}