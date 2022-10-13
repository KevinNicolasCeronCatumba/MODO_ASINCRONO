const needle = require("needle");

const endpoint="https://animechan.vercel.app/api/random"

const f= async ()=>{
    try {
        const response= await needle('get',endpoint)
        console.log('-------Nombre--------')
        console.log(response.body.anime)
        console.log('-------FRASE---------')
        console.log(response.body.quote)
    } catch (error) {
        fallo(error)
    }
}
//funcion callback: exito
const exito =(response)=>{
    console.log(response)
    /*const pais =response.results
    pais.forEach(element => {
        console.log(`Nombre: ${element.name}`)
        console.log('---------------------')
    });*/
}
//funcion callback: fallo
const fallo=(status)=>{
    console.log(status)
}

f()