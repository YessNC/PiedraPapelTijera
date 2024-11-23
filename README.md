# Juego de Piedra, Papel o Tijera

## Descripción

Este es un simple juego de Piedra, Papel o Tijera implementado en HTML y JavaScript. Permite a los jugadores enfrentarse contra la computadora y jugar hasta que uno de los dos gane tres veces.

## Características

- Interfaz de usuario sencilla y clara.
- Juego contra la computadora con resultados visuales.
- Permite jugar múltiples rondas hasta que un jugador gane tres veces.
- Muestra un mensaje al final del juego indicando el resultado final.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```sh
   git clone git@github.com:YessNC/PiedraPapelTijera.git
   ```
2. Abre el archivo `piedraPapelTijera.html` en tu navegador favorito.

## Uso

1. Abre `piedraPapelTijera.html` en tu navegador.
2. Ingresa tu nombre cuando se te solicite.
3. Elige tu opción entre Piedra (0), Papel (1) o Tijera (2).
4. La computadora también hará una elección aleatoria.
5. Se mostrará el resultado de cada ronda.
6. El juego continuará hasta que un jugador gane tres veces.
7. Al final del juego, se mostrará un mensaje con el número de veces que ganaste y perdiste.

## Código

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Piedra, Papel o Tijera</title>
  </head>
  <body>
    <h1>Piedra, Papel o Tijera</h1>
    <script src="JS/piedraPapelTijera.js"></script>
  </body>
</html>
```

```JavaScript
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
    alert("Esa opción no existe 👎😫 ");
  }
}
alert(`Ganaste ${triunfos} veces y perdiste ${perdidas} veces.`);

```

## Contribución

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git
checkout -b feature/AmazingFeature`).
3. Haz commit de tus cambios (`git commit
-m 'Add some AmazingFeature'`).
4. Haz push a la rama (`git push origin
feature/AmazingFeature`).
5. Abre un Pull Request. ## Contacto

## CONTACTO

- Nombre: Yessie Neira Cortés
- LinkedIn: https://www.linkedin.com/in/yessie-neira/
- Email: yessie_neira@icloud.com
# PiedraPapelTijera
