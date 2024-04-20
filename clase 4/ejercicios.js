// ejercicio 1
function Comparar(a, b) {
    if (a > b) {
      console.log("El número "+ a +" es mayor que "+ b);
    } 
    else if (a < b) {
      console.log("El número "+ b +" es mayor que "+ a);
    } 
    else {
      console.log("Los números "+ a +" y "+ b +" son iguales");
    }
  }
// ejercicio 2
function ParImpar(n) {
    if (n % 2 === 0) {
      console.log("El número "+ n +" es par");
    } else {
      console.log("El número "+ n +" es impar");
    }
  }
// ejercicio 3
function MayorEdad(edad) {
    if (edad >= 18) {
      console.log("La persona es mayor de edad");
    } else {
      console.log("La persona es menor de edad");
    }
  }
// ejercicio 4
function evaluarContraseña(contraseña) {
    let contraseñaCorrecta = 'Vante2009';
    if (contraseña === contraseñaCorrecta) {
      console.log("La contraseña es correcta");
    } else {
      console.log("La contraseña es incorrecta");
    }
  }
// ejercicio 5
let dia = new Date().getDay();
switch (dia) {
    case 0:
        console.log("hoy es domingo");
        break;
    case 1:
        console.log("hoy es lunes");
        break;
    case 2:
        console.log("hoy es martes");
        break;
    case 3:
        console.log("hoy es miercoles");
        break;
    case 4:
        console.log("hoy es jueves");
        break;
    case 5:
        console.log("hoy es viernes");
        break;
    case 6:
        console.log("hoy es sabado");
        break;
    default:
        console.log("error");
        break; 
    }