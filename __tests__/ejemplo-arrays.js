

const carrito = ["monitor","nevera","mondongo"]

describe("Testeo a un carrito de compras que es un arreglo",() => {
    test("Verificando que tenga 3 elementos",()=>{
        expect(carrito).toHaveLength(3);
    })

})