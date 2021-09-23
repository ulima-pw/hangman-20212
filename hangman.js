const refranes = [
    "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
    "CAMARON QUE SE DUERME SE LO LLEVA LA CORRIENTE",
    "QUIEN A HIERRO MATA A HIERRO MUERE"
]

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


const main = () => {
    const refran = elegirRefran()
    const refranOculto = ocultarRefran(refran)
    
    cargarRefran(refranOculto)

}

window.addEventListener("load", main)