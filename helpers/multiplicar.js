const fs = require('fs')

// const crearArchivo = ( base = 5) => {
// // con el base = 5 dejamos ese valor por defecto
//     console.clear()
//     console.log('======================')
//     console.log(`Table del: ${ base}`)
//     console.log('======================')

//     let salida = ''

//     for (let i = 1;  i <= 10; i++) {
//         salida += `${ base } * ${ i } = ${base * i}\n`
//     }

//     console.log(salida)

//     fs.writeFileSync(`tabla-${ base }.txt`, salida)
//     console.log(`tabla-${ base }.txt creado`)
// }

//convertimos la funcion creararchivo en una promesa

const crearArchivo = async( base = 5, lista, hasta = 10) => {

    try {
        let salida = ''
    
        for (let i = 1;  i <= hasta; i++) {
            salida += `${ base } * ${ i } = ${base * i}\n`
        }
        if(!!lista) {

            console.clear()
            console.log('======================'.rainbow)
            console.log(`Tabla del: ${ base}`.green)
            console.log('======================'.rainbow)
            console.log(salida.brightMagenta)
        }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        return `tabla-${ base }.txt`
        
    } catch (error) {
        throw err
    }
    }

// module es un obj global 

module.exports = {
    crearArchivo
}