//Crear un js que realice las siguientes tareas: 

// 1. Funcion para pide un número por prompt - NaN si el usuario cancel, queda vacio o escibe algo que no es numero.
function pedirNumero(mensaje){
    const number = prompt(mensaje);
    if (number === null || number === "" ){
        return NaN;
    }
    return Number(number);
}

//2. Funcion para mostrar el mensaje en la consola. 
function mostrar(mensaje){
    console.log(mensaje);
    document.getElementById("resultado").innerHTML += "<p>" + mensaje + "</p>";
}

//3. Pedir los tres numeros
const a = pedirNumero("Ingresa el primer número: ");
const b = pedirNumero("Ingresa el segundo número: ");
const c = pedirNumero("Ingresa el tercer número: ");

//4. Comparar y ordenar 
if (isNaN(a) || isNaN(b) || isNaN(c)){
    mostrar(" === Error, debes ingresar 3 números ===");
}else if ( a === b && b === c){
    mostrar("Los números son iguales");
} else {
    let mayor;
    let centro;
    let menor;

    if (a >= b && a >= c){
        mayor = a; 
        if(b > c){
            centro = b;
            menor = c;
        } else {
            centro = c;
            menor = b;
        }
    } else if (b >= a && b >= c){
        mayor = b;
        if(a > c){
            centro = a;
            menor = c;
        } else{
            centro = c;
            menor = a;
        }
    } else {
        mayor = c;
        if(a > b){
            centro = a;
            menor = b;
        }else {
            centro = b;
            menor = a;
        }
    }

    mostrar("Mayor a menor: " + mayor + ", " + centro + ", " + menor);
    mostrar("Menor a mayor: " + menor + ", " + centro + ", " + mayor);
}