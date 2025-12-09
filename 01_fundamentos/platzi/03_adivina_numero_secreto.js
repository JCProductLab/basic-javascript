const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

if (numeroJugador === numeroSecreto) {
    console.log("¡Felicidades! Has adivinado el número secreto.");
} else {
    console.log(`Lo siento, el número secreto era ${numeroSecreto}. ¡Inténtalo de nuevo!`);
}