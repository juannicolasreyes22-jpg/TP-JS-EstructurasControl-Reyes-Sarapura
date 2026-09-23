import PromptSync from "prompt-sync";
const prompt = PromptSync();

const rol = prompt('Ingrese su rol ("admin", "editor", "cliente"):')?.toLowerCase();
const estado = prompt('Ingrese el estado de su cuenta ("activa" o "suspendida"):')?.toLowerCase();
const hora = parseInt(prompt('Ingrese la hora actual (entero de 0 a 23):'));

if (isNaN(hora) || hora < 0 || hora > 23) {
  console.log('Hora no válida.');
} else if (estado === 'suspendida') {
  console.log('Acceso denegado: Cuenta suspendida.');
} else if (rol === 'admin') {
  console.log('Acceso permitido: Control total.');
} else if (rol === 'editor') {
  if (hora >= 8 && hora <= 18) {
    console.log('Acceso permitido: Editor dentro del horario autorizado.');
  } else {
    console.log('Acceso denegado: Fuera del horario permitido para editores (8 a 18 hs).');
  }
} else if (rol === 'cliente') {
  if (estado === 'activa') {
    console.log('Acceso permitido: Cliente con cuenta activa.');
  } else {
    console.log('Acceso denegado.');
  }
} else {
  console.log('Rol no autorizado.');
}
