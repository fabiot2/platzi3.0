let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego() {
    let seleccionarAtaque = document.getElementById('seleccionAtaque')
    seleccionarAtaque.style.display = 'none'

    let seccionReiniciar = document.getElementById('boton-reiniciar')
    seccionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {
    let seleccionarAtaque = document.getElementById('seleccionAtaque')
    seleccionarAtaque.style.display = 'block'

    let seccionarMascotaJugador = document.getElementById('seleccionMascotas')
    seccionarMascotaJugador.style.display = 'none'

    let seccionReiniciar = document.getElementById('boton-reiniciar')
    seccionReiniciar.style.display = 'block'

    //variables
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')

    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let botonReiniciar = document.getElementById('boton-reiniciar')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge 💧'
    }
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo 🌱'
    }
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya 🔥'
    }
    else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis 💧🔥'
    }
    else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma 💧🌱'
    }
    else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos 🌱🔥'
    }
    else {
        alert('DEBES SELECCIONAR UNA MASCOTA')
    }

    botonReiniciar.disabled = false
    
    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    


    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge 💧'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo 🌱'
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya 🔥'
    } else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis 💧🔥'
    } else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma 💧🌱'
    } else {
        spanMascotaEnemigo.innerHTML= 'Pydos 🌱🔥'
    }

    
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO 🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA 💧'
    } else {
        ataqueEnemigo = 'TIERRA 🌱'
    }

    combate()

}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    let botonReiniciar = document.getElementById('boton-reiniciar')


    if(ataqueEnemigo == ataqueJugador) {
       crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱') {
       crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') {
       crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧') {
       crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
       crearMensaje("PERDISTE")
       vidasJugador--
       spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
    botonReiniciar.disabled = false
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("GANASTE EL COMBATE")
        
    } else if (vidasJugador == 0) {
        crearMensajeFinal("PERDISTE EL COMBATE")
    }
}

function crearMensaje(resultado) {

    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    // let parrafo = document.createElement('p')
    // parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo ataca con ' + ataqueEnemigo + ' - ' + resultado

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal) {

    let sectionMensajes = document.getElementById('resultado')

    let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = resultadoFinal
 
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.disabled = true


}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)