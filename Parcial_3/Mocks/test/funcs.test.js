const funcs = require("../src/funcs.js");

funcs.random = jest.fn(()=>{return 5})

test('El cuadrado de 2 es 4',()=>{
    expect(funcs.calcCuadrado(2)).toBe(4);
    expect(funcs.random(1,20)).toBe(5)
})
