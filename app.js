
const { option, options, boolean } = require('yargs')
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')


console.clear()
// console.log(process.argv)
// console.log(argv)

console.log('base: yargs', argv.b)

//con process.argv veo los argumentos que salen en consola de node
// console.log(process.argv)
//1er arg muestra la ubicación donde está instalado Node de forma global
//2do arg muestra donde está el archivo app
//muestra la bandera "base=9" que yo le pase, para extraer la base 

// const [,,arg3 = 'base=5'] = process.argv
// const [ , base ] = arg3.split('=')
// console.log(base)
 
// const base = 3 
crearArchivo( argv.b, argv.l, argv.h )
     .then( nombreArchivo => console.log(nombreArchivo, 'creado'.green))
     .catch( err => console.log(err))
// console.log('======================')
// console.log('TABLA DEL CINCO')
// console.log('======================')
// let salida = ''

// for (let i = 1;  i <= 10; i++) {
//     salida += `${ base } * ${ i } = ${base * i}\n`
// }

// console.log(salida)

// fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log(`tabla-${ base }.txt creado`)
    //esto es una info persistente porque se grabó en disco

// })
// nuestro app o server js debe ser lo más limpio posible

// fs.writeFileSync(`tabla-${ base }.txt`, salida)
// console.log(`tabla-${ base }.txt creado`)