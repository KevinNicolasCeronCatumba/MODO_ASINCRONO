const needle = require("needle");

const endpoint="https://restcountries.com/v3.1/all"

const f= async ()=>{
    try {
        const response= await needle('get',endpoint)
        //exito(response.body)
        //console.log(response.body)
        response.body.forEach(pais => {
            console.log(pais.name.common)
            console.log('---------------------')
        });
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