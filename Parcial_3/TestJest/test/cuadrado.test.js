const cuadrado = require("../src/cuadrado.js")

test('El cuadrado de 2 es 4',()=>{
    expect(cuadrado(2)).toBe(4);
})