const axios = require('axios')
const endpoit = "https://pokeapi.co/api/v2/type"

let config = {
    url: endpoit,
    method: 'get'
}

const f = async ()=>{
    try {
        let response= await axios(config)
        exito(response.data)
    } catch (error) {
        fallo(error) 
    }
}

//funcion callback: exito
const exito =(response)=>{
    const tipos =response.results
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('---------------------')
    });
}
//funcion callback: fallo
const fallo=(status)=>{
    console.log(status)
}

f()