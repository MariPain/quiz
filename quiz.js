// REQUISITOS:
// Primero has de obtener todos los datos introducidos en el cuestionario. Ten en cuenta lo siguiente:
//
// 1.1 Evitar que la página se refresque cuando pulsamos el botón de envío de formulario.
//
// 1.2 Se han puesto restricciones para que todas las preguntas se deban responder obligatoriamente.




const respuestas = {
  humanBones: "206",
  kazajistan: "asiaEuropa",
  spainRiverLonger: "ebro",
  odisea: "homero",
  ultimaCena: "leonardo"
}



document.querySelector('form[name="bones"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta").length; i++) {
        document.getElementsByClassName("respuesta")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.bones.length; i++) {
        document.getElementById(respuestas.bones).style.backgroundColor = "green"
    }
    if (event.target.elements.bones.value == respuestas.bones) {
        console.log("¡Has acertado!");
    } else {
        console.log("¡Te equivocaste!")
    }
})

document.querySelector('form[name="kazajistan"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta").length; i++) {
        document.getElementsByClassName("respuesta")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.kazajistan.length; i++) {
        document.getElementById(respuestas.kazajistan).style.backgroundColor = "green"
    }
    if (event.target.elements.kazajistan.value == respuestas.kazajistan) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="river"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta").length; i++) {
        document.getElementsByClassName("respuesta")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.river.length; i++) {
        document.getElementById(respuestas.river).style.backgroundColor = "green"
    }
    if (event.target.elements.river.value == respuestas.river) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="odisea"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta").length; i++) {
        document.getElementsByClassName("respuesta")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.odisea.length; i++) {
        document.getElementById(respuestas.odisea).style.backgroundColor = "green"
    }
    if (event.target.elements.odisea.value == respuestas.odisea) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="dinner"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta").length; i++) {
        document.getElementsByClassName("respuesta")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.ultimaCena.length; i++) {
        document.getElementById(respuestas.ultimaCena).style.backgroundColor = "green"
    }
    if (event.target.elements.ultimaCena.value == respuestas.ultimaCena) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})











// 300
// En asia europa
// ebro
// Homero
// leonardo
