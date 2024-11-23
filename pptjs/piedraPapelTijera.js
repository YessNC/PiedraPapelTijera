function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//0 piedra, 1 papel, 2 tijera
const opciones = ["👊", "🖐", "✌"];
let nombre = prompt("Ingresa tu nombre");
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  let pc = aleatorio(0, 2);
  let jugador = parseInt(
    prompt("Elige 0 para piedra, 1 para papel y 2 para tijera"),
    10
  );

  function mostrarEleccion(nombre, eleccion) {
    alert(`${nombre} eligió ${opciones[eleccion]}`);
  }

  if (jugador >= 0 && jugador <= 2) {
    mostrarEleccion(nombre, jugador);
    mostrarEleccion("PC", pc);

    if (jugador == pc) {
      alert("EMPATE 🤝");
    } else if (
      (jugador == 0 && pc == 2) ||
      (jugador == 1 && pc == 0) ||
      (jugador == 2 && pc == 1)
    ) {
      alert("GANASTE 🎆🎉");
      triunfos += 1;
    } else {
      alert("PERDISTE 😨😭");
      perdidas += 1;
    }
  } else {
    3;
    alert("Esa opción no existe 👎😫 ");
  }
}
alert(`Ganaste ${triunfos} veces y perdiste ${perdidas} veces.`);
