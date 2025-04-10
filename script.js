const continuarBtn = document.getElementById('continuar');

const filas = 8;
const columnas = 12;

function crearAsientos() {
  for (let i = 0; i < filas * columnas; i++) {
    const asiento = document.createElement('div');
    asiento.classList.add('seat', 'disponible');

    // Simular algunos asientos ocupados
    if (Math.random() < 0.3) {
      asiento.classList.remove('disponible');
      asiento.classList.add('ocupada');
    }

    asiento.addEventListener('click', () => {
      if (asiento.classList.contains('ocupada')) return;

      asiento.classList.toggle('seleccionada');
      actualizarBoton();
    });

    seatingArea.appendChild(asiento);
  }
}

function actualizarBoton() {
  const seleccionadas = document.querySelectorAll('.seat.seleccionada');
  if (seleccionadas.length > 0) {
    continuarBtn.classList.add('enabled');
    continuarBtn.disabled = false;
  } else {
    continuarBtn.classList.remove('enabled');
    continuarBtn.disabled = true;
  }
}

crearAsientos();
