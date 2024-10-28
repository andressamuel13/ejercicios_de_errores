// const miPromesa = new Promise((resolve,reject) =>{
//     const exito = false
//    return exito ? resolve('operacion completada') : reject('operacion fallida')
// })
// miPromesa
//     .then(resultado => {
//         console.log(resultado); // Esto se ejecuta si la promesa se cumple
//     })
//     .catch(error => {
//         console.error(error); // Esto se ejecuta si la promesa es rechazada
//     });

// console.log('inicio')
// setTimeout(() =>{
//     console.log('esto se mostrara dentro de 2 segundos')}, 2000)

// console.log('fin');

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const e = false
//         return e ? resolve('operacion cumplida') : reject('operacion fallida')  
//     }, 2000);
// })
// promesa
// .then(x =>{console.log(x)})
// .catch(error =>{console.error(error)})

//ejemplo de encadenamiento de promesas
// const devolverDatos = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true
//             return exito ? resolve('exito') : reject('fallo')
//         }, 1000);
//     })
// }

// const procesoDatos = datos =>{
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve(`datos procesados y es un ${datos}`)
//         }, 1000);
//     })
// }

// devolverDatos()
// .then(x => {
//     console.log(x)
//     return procesoDatos(x)
// })
// .then(a => {
//     console.log(a)
// })
// .catch(error => {console.error(error)})

//ejemplo de promise.all()
// const promesa1 = new Promise((resolve) => setTimeout(() => resolve('resultado 1'), 1000))
// const promesa2 = new Promise((resolve) => setTimeout(() => resolve('resultado 2'), 1500))

// Promise.all([promesa1,promesa2])
// .then(x => {console.log(x)})
// .catch(error => {console.error(error)})

//error de una promesa con el metodo promise.all()
// const promesa1 = new Promise((resolve) => setTimeout(resolve, 100, 'Resultado de promesa 1'));
// const promesa2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Error en promesa 2'));
// const promesa3 = new Promise((resolve) => setTimeout(resolve, 300, 'Resultado de promesa 3'));

// Promise.all([promesa1, promesa2, promesa3])
//     .then((resultados) => {
//         console.log(resultados); // Este bloque NO se ejecutará
//     })
//     .catch((error) => {
//         console.error('Una de las promesas fue rechazada:', error); // 'Una de las promesas fue rechazada: Error en promesa 2'
//     });

//ejemplo de promise.race()
// const p1 = new Promise((resolve) => setTimeout(resolve,200,'valor A'))
// const p2 = new Promise((resolve) => setTimeout(resolve,100,'valor B'))
// const p3 = new Promise((resolve) => setTimeout(resolve,150,'valor C'))

// Promise.race([p1,p2,p3])
// .then(x => console.log(x))
// .catch(error => console.error(error))

// const p1 = new Promise((resolve,reject) => setTimeout(reject,150,'valo 1'))
// const p2 = new Promise((resolve) => setTimeout(resolve,150,'valor 2'))
// const p3 = new Promise((resolve) => setTimeout(resolve,200,'valor 3'))

// Promise.race([p1,p2,p3])
// .then(x => console.log(x))
// .catch(error => console.error(error))

//ejemplo de promise.any()
// const p1 = new Promise((resolve,reject) => setTimeout(reject,200,'valor 1'))
// const p2 = new Promise((resolve,reject) => setTimeout(resolve,109,'valor 2'))
// const p3 = new Promise((resolve,reject) => setTimeout(reject,110,'valor 3'))

// Promise.any([p1,p2,p3])
// .then(x => console.log(x))
// .catch(error => console.error(error))

//ejercicios de promesas

//ejercicio 1
// const datos = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true
//             return exito ? resolve('exito') : reject('fallo')
//         }, 2000);
//     })
// }
// datos()
// .then(x => console.log(x))
// .catch(error => console.error(error))

//ejercicio 2 
// const numeroAleatorio = () => {
//     return new Promise((resolve, reject) => {
//         const numero = Math.random()
//         return numero < 0.5 ? reject(`fallo su numero fue ${numero}`) : resolve(`exito su numero es ${numero}`)
//     })
// }
// numeroAleatorio()
// .then(x => console.log(x))
// .catch(error => console.error(error))

// const numeroAleatorio = () => {
//     return new Promise((resolve, reject) => {
//         const numero = Math.random(); // Genera un número aleatorio entre 0 y 1
//         if (numero < 0.5) {
//             reject(`Fallo: su número fue ${numero}`);
//         } else {
//             resolve(`Éxito: su número es ${numero}`);
//         }
//     });
// }
// numeroAleatorio()
// .then(x => console.log(x))
// .catch(error => console.error(error));

//ejercicio 3 
// const usuario = () => {
//     return new Promise((resolve, reject) => {
//         let nombreUsuario = 'admin'
//         return nombreUsuario === 'admin' ? resolve(`bienvenido su nombre es ${nombreUsuario}`) : reject(`ut no pertenece a este lugar`)
//     })
// }
// usuario()
// .then(x => console.log(x))
// .catch(error => console.error(error))

//ejercicio 4 
// const cuadrado = () => {
//     return new Promise((resolve, reject) => {
//         let numero = Math.trunc(Math.random() * 21) -10
//         let numero1 = numero ** 2
//         return numero < 0 ? reject(`fallo su numero es ${numero}`) : resolve(`Éxito: el cuadrado de ${numero} es ${numero1}`)
//     })
// }
// cuadrado()
// .then(x => console.log(x))
// .catch(error => console.error(error))

// const numero = x => {
//     return new Promise((resolve, reject) => {
//         let num = x ** 2
//         return x < 0 ? reject(`fallo su numero no puede ser negativo`) : resolve(`exito su numero es ${num}`)
//     })
// }
// numero(-9)
// .then(x => console.log(x))
// .catch(error => console.error(error))

//ejercicio 5 
// let mensaje = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('bienvenido')
//         }, 1000);
//     })
// }
// mensaje()
// .then(x => console.log(x))

//ejercicio 6
// const llamadaApi = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true
//             let persona = {
//                 nombre : 'samuel',
//                 edad: 18
//             }
//             return exito ? resolve(`llamada a api exitosa ${JSON.stringify(persona)}`) : reject('fallo al llamar la api')
//         }, 2000);
//     })
// }
// llamadaApi()
// .then(x => console.log(x))
// .catch(error => console.error(error))

//ejercicio 7
// const p1 = new Promise(resolve => setTimeout(resolve,200,'tarea 1 hecha'))
// const p2 = new Promise(resolve => setTimeout(resolve,200,'tarea 2 hecha'))

// Promise.all([p1,p2])
// .then(x => console.log(x))
// .catch(error => console.error(error))

//ejercicio 8
// let inicioSesion = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let usuario = {
//                 usuario: 'user',
//                 contraseña: '1234'
//             }
//             return usuario.usuario == 'user' && usuario.contraseña == '1234' ? resolve('inicio de sesion exitoso') : reject('fallo al inicio de sesion')
//         }, 2000);
//     })
// }
// inicioSesion()
// .then(x => console.log(x))
// .catch(error => console.error(error))

//ejercicio 9
// let numeroAleatorio = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let exito = Math.random()
//             return exito < 0.8 ? resolve(`operacion exitosa ${exito}`) : reject(`operacion fallida ${exito}`)
//         }, 1000);
//     })
// }
// numeroAleatorio()
// .then(z => console.log(z))
// .catch(error => console.error(error))

//ejercicio 10
let pago = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let paga = false
            return paga ? resolve('compra exitosa') : reject('fallo en la compra')
        }, 1000);
    })
}
pago()
.then(x => console.log(x))
.catch(error => console.error(error))