/*
- Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input. 
- Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin 
- Debe imprimir ambos resultados por consola o por el DOM. 
- Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar 
  un mensaje de error y volver a solicitar los datos. 

  - Fahrenheit: (C * 9 / 5 ) + 32
  - Kelvin: C + 273.15
*/

function conversionTemp(){

  //Capturar el valor del input y los contenedores de error/resultado de html
  const inputValor = document.getElementById("celsiusInput").value;
  const divError = document.getElementById("mensajeError");
  const divResultado = document.getElementById("resultado");

  divError.innerHTML="";
  divResultado.innerHTML="";

  //convertir el texto ingresado en valor tipo numero
  const celsius = Number(inputValor);

  //Validar que el numero ingresado, sea un numero valido
  if (inputValor.trim() === "" || isNaN(celsius)) {
    divError.innerText = "Error: el dato ingresado no es un numero valido."
    return;
  }

  //aplicar las formulas 
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  //imprimir los resultados en navegacion
  divResultado.innerHTML = `
    Grados Kelvin: ${kelvin.toFixed(2)} K<br>
    Grados Fahrenheit: ${fahrenheit.toFixed(2)} °F
  `;

}

