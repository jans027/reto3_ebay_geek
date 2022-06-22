// ......................................................


// pedimos los datos a la base de datos
export const getData = async(url) => {
    try{
        const respuesta = await fetch(url);  // fetch
        const data = await respuesta.json()
        return data
    }catch(error){
        throw error
    }

}

