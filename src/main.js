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
}
let app = new App();

console.log(app.sumatoriaSerieUno(5));

console.log(app.sumatoriaSerieDos(5));

console.log(app.esPrimo(3));

console.log(app.esPrimo(4));
