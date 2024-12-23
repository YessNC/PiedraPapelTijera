function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//0 piedra, 1 papel, 2 tijera
const opciones = ["👊", "🖐", "✌"];
let nombre = prompt("Ingresa tu nombre");
let triunfos = 0;
let perdidas = 0;

document.getElementById("player_name").innerText = nombre;

function mostrarEleccion(nombre, eleccion) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML += `${nombre} eligió ${opciones[eleccion]}`;
}

function actualizarMarcador() {
  document.getElementById("player_score").innerText = triunfos;
  document.getElementById("computer_score").innerText = perdidas;
}

function jugar(jugador) {
  let pc = aleatorio(0, 2);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";
  mostrarEleccion(nombre, jugador);
  mostrarEleccion("PC", pc);

  if (jugador == pc) {
    resultadoDiv.innerHTML += "<span>EMPATE 🤝</span><br>";
  } else if (
    (jugador == 0 && pc == 2) ||
    (jugador == 1 && pc == 0) ||
    (jugador == 2 && pc == 1)
  ) {
    resultadoDiv.innerHTML += "<span>GANASTE 🎆🎉</span><br>";
    triunfos += 1;
  } else {
    resultadoDiv.innerHTML += "<span>PERDISTE 😨😭</span><br>";
    perdidas += 1;
  }
  actualizarMarcador();
  if (triunfos >= 3 || perdidas >= 3) {
    alert(
      `El juego ha terminado. Ganaste ${triunfos} veces y perdiste ${perdidas} veces!`
    );
    reiniciar();
  }
}

function reiniciar() {
  triunfos = 0;
  perdidas = 0;
  actualizarMarcador();
  document.getElementById("resultado").innerHTML = "";
  window.location.reload();
}

window.onload = function () {
  actualizarMarcador();
};
