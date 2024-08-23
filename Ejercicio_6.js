// Creación de la función
function numPares(arreglo){
    const pares=[]; //Creo una lista vacia
    for (const num of arreglo){
        if (num % 2===0){
            pares.push(num); //Agrega el arreglo final,en este caso los números pares.
        }
    }
    return pares;
}
const prueba=[1,2,3,4,5,6,10,12];
const resultado=numPares(prueba);

console.log(resultado);

