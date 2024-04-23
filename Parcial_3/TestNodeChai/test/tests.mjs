import test from "node:test"
import * as chai from 'chai'
import calcCuadrado from "../src/cuadrado.js";

test('El cuadrado de 2 debe ser 4', () => {
    chai.assert.equal(calcCuadrado(2),4)
})