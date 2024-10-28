// let x 
// try{
//     x = 1 / 0
// }catch(error){
//     console.error("error" , error.message)
// }finally{
//     console.log("fin de la division")
// }

// let dividir = (x,y) => {
//     if(y === 0){
//         throw new Error("no se puede dividir entre cero")
//     }
//     return x / y
// }
// try{
//     console.log(dividir(1 , 0));
// }catch(error){
//     console.error("error " + error.message);
// }finally{
//     console.log("fin del programa");
// }

// let b = (a , b) =>{
//     let ter = a < 0  || b < 0 ? 'no se sumar numeros negativos ' : ''
//     return ter + b
// }
// let result = b(6 , 4)
// try{
//     if(result.startsWith('no se sumar numeros negativos')){
//         throw new Error('no se sumar numeros negativos')
//     }
//     console.log(`la suma es ${result}`)
// }catch(error){
//     console.error(`Error ${error.message}`); 
// }finally{
//     console.log('fin del programa')
// }

// let b = (a, b) => {
//     if (a < 0 || b < 0) {
//         return 'no se sumar numeros negativos'; // Devuelve el mensaje de error
//     }
//     return a+b; // Devuelve el valor de b si a no es negativo
// }
// try {
//     let result = b(-1, -2); // Llama a la función y guarda el resultado
//     if (result === 'no se sumar numeros negativos') {
//         // Si el resultado es el mensaje de error, lo manejamos como un error
//         throw new Error(result);
//     }
//     console.log('la suma es', result); // Imprime el resultado
// } catch (error) {
//     console.error(`Error ${error.message}`); // Captura y muestra el mensaje de error
// }// } finally {
//     console.log('esto esta fatal'); // Siempre se ejecuta
// }

// let b = (a , b) =>{
//     let ter = a < 0  || b < 0 ? 'no se sumar numeros negativos ' : ''
//     return ter + (b + a)
// }
// let result = b(6 ,-20)
// try{
//     if(result.startsWith('no se sumar numeros negativos')){
//         throw new Error('no se sumar numeros negativos')
//     }
//     console.log(`la suma es ${result}`)
// }catch(error){
//     console.error(`Error ${error.message}`); 
// }finally{
//     console.log('fin del programa')
// }

//ejercicios del try y catch 

//ejercicio 1 
// let dividir = (a,b) =>{
//     if(a === 0 || b === 0){
//         throw new Error('no se puedes divir entre cero')  
//     }
//     return a / b
// }
// try{
//     let resultado = dividir(10 , 5)
//     console.log(`el resultado de la division es ${resultado}`)
// }catch(error){
//     console.error(`Error ${error.message}`);
// }

//ejercicio 2 
// let objeto = () =>{
//     const carro = {
//         marca: 'suzuki',
//         año: 2010,
//         caballosDeFuerza: 1200
//     }
//     try{
//         if(carro.hasOwnProperty('dueño')){
//             console.log(`el objeto si existe`)
//         }else{
//             throw new Error('la propiedad no existe')
//         }
//     }catch(error){  
//         console.error(`ERROR ${error.message}`);
    
//     }finally{  
//         console.log('fin del objeto')
//     }
// }
// objeto()

//ejercicio 3
// let convertir = (x) =>{
//      x = parseInt(x)
//     if(isNaN(x)){
//         throw new Error("ingrese un numero correcto");
//     } 
//     return `el numero que has ingresado fue: ${x}`  
// }
// try{
//     console.log(convertir('2345'))
// }catch(error){
//     console.error(`Error ${error.message}`);
// }

//ejercicio 4
// let error = x =>{
//     x = parseInt(x)
//     if(isNaN(x)){
//         throw new Error("debe de ser un numero");
//     }
//     return `el numero que has ingresado fue: ${x * 2}`;
// }
// try{
//     console.log(error('hola'))
// }catch(error){
//     console.error(`Error ${error.message}`);
// }

//ejercicio 5
// let readFile = filename =>{
//     const leer = ['file1.txt', 'file2.txt', 'file3.txt']
//     if(!leer.includes(filename)){
//         throw new Error("archivo no encontrado");
//     }
//     return `el contenido del archivo es: ${filename}`
// }
// let readFileSafe = filename =>{
//     try{
//         const contenido = readFile(filename)
//         console.log(`${contenido}`);
//     }catch(error){
//         console.error(`Error ${error.message}`);
//     }
// }
// readFileSafe('file1.txt')
// readFileSafe('mo.txt')
// let leer = nombre =>{
//     const leido = ['texto 1','texto 2','texto 3']
//     if(!leido.includes(nombre)){
//         throw new Error("texto no encontrado");
//     }
//     return `el contenido es: ${nombre}`
// }
// let revisar = nombre =>{
//     try{
//         const contenido = leer(nombre)
//         console.log(contenido)
//     }catch(error){
//         console.error(`Error ${error.message}`);
//     }
// }
// revisar('texto 1')
// revisar('mor 2')

//ejercicio 6
// let indice = (v,i) =>{
//     try{
//         if(i < 0 || i >= v.length){
//             throw new Error("no se pudo encontrar");
//         }
//         return v[i]
//     }catch(error){
//         console.error(`ERROR ${error.message}`); 
//     }
// }
// console.log(indice([1,2,3,4,5,6],3))
// console.log(indice([10,2,4,5,6],12));
// console.log(indice([],0))
// console.log(indice([1,2,3,4,5,6],5))

//ejercicio 7
// let parseo = () =>{
//     let json = '{"nombre":"Juan","edad":30,"ciudad":"Bogotá"}'
    
//     try{
//         const objeto = JSON.parse(json)
//         console.log(objeto)
//     }catch(error){
//         console.error(`Error ${error.message}`);  
//     }
// }
// parseo()

//ejercicio 8

