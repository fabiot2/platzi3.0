const seleccionarAtaque = document.getElementById('seleccionAtaque')
const seccionReiniciar = document.getElementById('boton-reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

const seccionarMascotaJugador = document.getElementById('seleccionMascotas')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre,foto,vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp',5)

let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.webp',5)

let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.webp',5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() {
    seleccionarAtaque.style.display = 'none'
    seccionReiniciar.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `                
        <input type="radio" name="mascota" id="${mokepon.nombre}" />
        <label class="cardMascota" for=${mokepon.nombre}>
            <span class="mascotaNombre"><span class="mascotaIcono">💧</span>${mokepon.nombre}</span>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
    inputLangostelvis = document.getElementById('Langostelvis')
    inputTucapalma = document.getElementById('Tucapalma')
    inputPydos = document.getElementById('Pydos')


    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)  
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {
    
    seleccionarAtaque.style.display = 'block'   
    seccionarMascotaJugador.style.display = 'none'
    let seccionReiniciar = document.getElementById('boton-reiniciar')
    seccionReiniciar.style.display = 'block'
   

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
        crearMensajeFinal("GANASTE LA BATALLA")
        
    } else if (vidasJugador == 0) {
        crearMensajeFinal("PERDISTE LA BATALLA")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonMascotaJugador.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)



// const nombres = ["David", "Juanfer","David", "Juanes"]

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }

const persona = {
    nombre: "David",
    edad: 24,
    comidaFavorita: "Hamburguesas"
}


for (let key in persona) {
    console.log(key,persona[key])
}