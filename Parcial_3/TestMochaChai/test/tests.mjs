import {assert} from 'chai'
import {describe, it} from 'mocha'
import {calcCuadrado, calcRaiz} from "../src/cuadrado.js";

describe('Calcular cuadrado de positivos',()=>{
    it('2^2 = 4',()=>{
        assert.equal(calcCuadrado(2),4)
    });
    it.skip('3^2 = 9',()=>{
        assert.equal(calcCuadrado(3),9)
    })
})

describe('Calcular cuadrado de negativos',()=>{
    it('-2^2 = 4',()=>{
        assert.equal(calcCuadrado(-2),4)
    });
    it('-3^2 = 9',()=>{
        assert.equal(calcCuadrado(-3),9)
    })
})

describe('Calcular raiz',()=>{
    it('Raiz 4 = 2',()=>{
        assert.equal(calcRaiz(4),2)
    });
    it('Raiz 9 = 3',()=>{
        assert.equal(calcRaiz(9),3)
    })
})