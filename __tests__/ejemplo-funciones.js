const sumar = (a,b) => a+b;

const restar = (a,b) => a-b;

describe("prueba a funciones",()=>{
    test("Que la suma de 10 + 5 sea 15", ()=>{
        expect(sumar(10,5)).toBe(15);
    });

    test("Que la suma de 10 + 5 no sea 15",()=>{
        expect(sumar(10,5)).not.toBe(10)
    })

    test("que la resta de 10 - 5 sea 5",()=>{
        expect(restar(10,5)).toBe(5);
    })

    test("que la resta de 10 - 5 sea menor que 10",()=>{
        expect(restar(10,5)).toBeLessThan(10);
    })
})