// const usuario = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = false
//             return data ? resolve({ username: "JaneDoe", age: 28 }) : reject('invalido no se puede acceder a los datos')
//         }, 1000);
//     })
// }
// const usuarioData = async () =>{
//     try{
//         const datos = await usuario()
//         console.log(datos)
//     }catch(error){
//         console.error('error' , error)
//     }
// }
// usuarioData()

//ejercicio 1 
// const public = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const api = {
//                 nombre:"samuel",
//                 edad:18,
//                 genero:'masculino'
//             }
//             const manejo = true
//             return manejo ? resolve('exito al crearlo ' + JSON.stringify(api)) : reject('fallo al crearlo')
//         }, 1000);
//     })
// }
// const par = async () =>{
//     try{
//         const datos = await public()
//         console.log(datos)
//     }catch(error){
//         console.error('error',error)
//     }
// }
// par()

//ejercicio 2 
// const mensaje = async () => {
//     console.log('cargando...')
//     await new Promise(resolve => setTimeout(resolve,2000))
//     console.log('listo')
// }
// mensaje()

//ejercicio 3
// const datos = async () =>{
//     let user = {
//         nombre:'samuel',
//         edad:18
//     }
//     try{
//         const response = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({ ok: false })
//             }, 1000);
//         })
//         if (!response.ok) {
//             throw new Error('Error al obtener el usuario');
//         }
//         console.log(`el usuario creado ha sido encomtrado tu nombre es: ${user.nombre}`)
//     }catch(error){
//         console.error(`${error.message}`)
//     }
// }
// datos()
// const datos = async () => {
//     let user = {
//         nombre:'samuel',
//         edad:18
//     }
//     try{
//         const respondido = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const ok = true
//                 return ok ? resolve(`el usuario creado ha sido encomtrado tu nombre es: ${user.nombre}`) : reject(new Error('Error al obtener el usuario'))
//             }, 2000);
//         })
//         console.log(respondido);
        
//     }catch(error){
//         console.error(`${error.message}`)
//     }
// }
// datos()

//ejercicio 4
// const numero = async () => {
//     let a = 10
//     let b = -100
//     let suma = a + b
//     try{
//         let resultado = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 return suma < 0 ? reject(new Error(`no se permiten numeros negativos ya que su numero fue: ${suma}`)) : resolve(`el resualtado es: ${suma}`)
//             }, 1000);
//         })
//         console.log(resultado)
//     }catch(error){
//         console.error(`${error.message}`)
//     }
// }
// numero()

//ejercicio 5
// const api =  async () => {
//     try{
//         let app = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 let llamado = true 
//                 return llamado ? resolve('llamada apa exitosa') : reject('fallo al llamar a la api')
//             },1000)
//         });
//         console.log(app)
//     }catch(error){
//         console.error(error)
//     }
// }
// api()

//ejercicio 6
// const llamado = (valor,tiempo) =>{
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve(valor)
//         }, tiempo);
//     })
// }

// const llamado2 = async () =>{
//     const promise = [
//         llamado('hola',1000),
//         llamado('nos vemos',1100),
//         llamado('adios',1500)
//     ]
//     const n = await Promise.all(promise)
//     console.log(n)
// }
// llamado2()

//ejercicio 7
// const contar = () => {
//     return new Promise((resolve) =>{
//         setTimeout(resolve,1000)
//     })
// }

// const numeros = async () =>{
//     for(let i = 1; i <= 5; i++){
//         console.log(i)
//     }
//     await contar()
// }
// numeros()

//ejercicio 8
// toca estudiar 

//ejercicio 9
// const leer = async letra =>{
//     let resultado = await new Promise((resolve, reject) => {
//        return typeof letra === 'string' && letra.length === 1 ? resolve('esto esta correcto') : reject('esto esta incorrecto')
//     })
//     return resultado
// }
// leer(1)
// .then(x => console.log(x))
// .catch(error => console.error(error))

//ejercicio 10 
