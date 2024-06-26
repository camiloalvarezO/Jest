import { sumar } from "../js/funciones";


describe("prueba a los modulos",()=>{
    test("15 + 5 es 20",()=>{
        expect(sumar(15,5)).toBe(20);
    })
})