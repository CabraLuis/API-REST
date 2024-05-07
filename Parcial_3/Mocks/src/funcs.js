function calcCuadrado(x) {
  return x ** 2;
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports.random = random;
module.exports.calcCuadrado = calcCuadrado;
