const refranes = [
    "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
    "CAMARON QUE SE DUERME SE LO LLEVA LA CORRIENTE",
    "QUIEN A HIERRO MATA A HIERRO MUERE"
]

let refran = ""
let refranOculto = ""

const elegirRefran = () => {
    const pos = Math.round(Math.random() * 2);
    return refranes[pos]
}

const ocultarRefran = (refran) => {
    let refranOcultado = ""
    for(let caracter of refran) {
        if (caracter != " ") {
            // Debe ocultar
            refranOcultado += "_"
        }else {
            // No debe ocultar
            refranOcultado += caracter
        }
    }
    return refranOcultado
}

const cargarRefran = (refran) => {
    //const divRefran = document.getElementById("refran")
    const divRefran = document.querySelector("#refran")
    divRefran.innerHTML = refran
}

const buscarLetraRefran = (letra, refran, refranOculto) => {
    let nuevoRefranOculto = ""
    for (let i=0; i< refran.length; i++) {
        if (letra == refran[i]) {
            nuevoRefranOculto += refran[i]
        }else {
            nuevoRefranOculto += refranOculto[i]
        }
    }
    return nuevoRefranOculto;
}

const letraInputOnKeypress = (evt) => {
    const letraIngresada = evt.key.toUpperCase()
    const nuevoRefranOculto = buscarLetraRefran(letraIngresada, refran, refranOculto)
    if (refranOculto == nuevoRefranOculto) {
        // No descubrio una nueva letra
        console.log("Deberia mostrar nueva imagen")
    }else {
        refranOculto = nuevoRefranOculto
        cargarRefran(refranOculto)
    }
}


const main = () => {
    refran = elegirRefran()
    refranOculto = ocultarRefran(refran)
    
    cargarRefran(refranOculto)

    let inputLetras = document.querySelector("#letras")
    inputLetras.addEventListener("keypress", letraInputOnKeypress)

}

window.addEventListener("load", main)