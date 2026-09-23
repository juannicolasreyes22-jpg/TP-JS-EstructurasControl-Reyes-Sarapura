import PromptSync from "prompt-sync";
const prompt = PromptSync();

const montoCarrito = parseFloat(prompt('Ingrese el monto total del carrito en ARS:'));
const categoriaUsuario = prompt('Ingrese su membresía ("Bronce", "Plata", "Oro"):');
const cupon = prompt('Ingrese su código de descuento ("DESC10", "SUPER20", o deje en blanco):')?.toUpperCase();

if (isNaN(montoCarrito) || montoCarrito <= 0) {
  console.log('Error: Monto de carrito no válido.');
} else {
  let porcMembresia = 0;
  if (categoriaUsuario?.toLowerCase() === 'plata') {
    porcMembresia = 0.05;
  } else if (categoriaUsuario?.toLowerCase() === 'oro') {
    porcMembresia = 0.15;
  }

  let porcCupon = 0;
  switch (cupon) {
    case 'DESC10':
      porcCupon = 0.10;
      break;
    case 'SUPER20':
      if (montoCarrito > 50000) {
        porcCupon = 0.20;
      } else {
        console.log('El cupón SUPER20 solo es aplicable a compras mayores a $50.000 ARS.');
      }
      break;
    default:
      porcCupon = 0;
  }

  const descMembresiaMonto = montoCarrito * porcMembresia;
  const descCuponMonto = montoCarrito * porcCupon;
  const subtotalConDescuentos = montoCarrito - (descMembresiaMonto + descCuponMonto);

  const costoEnvio = subtotalConDescuentos > 100000 ? 0 : 4500;
  const totalNetoPagar = subtotalConDescuentos + costoEnvio;

  console.log('--- DETALLE DE COMPRA ---');
  console.log(`Monto Original: $${montoCarrito.toFixed(2)} ARS`);
  console.log(`Descuento Membresía (${categoriaUsuario}): -$${descMembresiaMonto.toFixed(2)} ARS`);
  console.log(`Descuento Cupón (${cupon || 'Ninguno'}): -$${descCuponMonto.toFixed(2)} ARS`);
  console.log(`Costo de Envío: ${costoEnvio === 0 ? 'GRATIS' : `$${costoEnvio.toFixed(2)} ARS`}`);
  console.log(`Total Neto a Pagar: $${totalNetoPagar.toFixed(2)} ARS`);
}