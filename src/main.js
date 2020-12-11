export default class App {
  sumatoriaSerieUno(numero) {
    let suma = 1;
    for (let i = 2; i <= numero; i++) {
      suma = suma + 1 / i;
    }
    return suma;
  }
  sumatoriaSerieDos(numero) {
    let i = 2;
    let suma = 1;
    while (i <= numero) {
      suma = suma + 1 / i;

      i = i + 1;
    }
    return suma;
  }
  esPrimo(numero) {
    let i = 2;
    let primo = true;
    do {
      if (numero % i == 0) {
        primo = false;
      }
      i++;
    } while (i < numero);
    return primo;
  }
  obtenerMultiplos(inicio, fin) {
    let i = inicio;
    let multiplos = "";

    do {
      if (i % 3 == 0) {
        multiplos = multiplos + i;
      }
      i++;
    } while (i <= fin);
    return multiplos;
  }
  obtenerImpares(numero1, numero2) {
    let impares = 0;
    let t;

    if (numero1 > numero2) {
      t = numero1;
      numero1 = numero2;
      numero2 = t;
    }
    for (let i = numero2; i >= numero1; i--) {
      if (i % 2 != 0) {
        if (impares == 0) {
          impares = impares + i;
          impares = impares.toString();
        } else {
          impares = impares + "," + i;
          impares = impares.toString();
        }
      }
    }
    return impares;
  }
}

let app = new App();

console.log(app.sumatoriaSerieUno(5));

console.log(app.sumatoriaSerieDos(5));

console.log(app.esPrimo(3));

console.log(app.esPrimo(4));

console.log(app.obtenerMultiplos(1, 9));

console.log(app.obtenerImpares(1, 9));
