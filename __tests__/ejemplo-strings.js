

const pass = '123456';

describe("verificar que una contraseña tenga cierta longitud",()=>{

    test("verificar que la longitud de la contraseña es 6", ()=>{
        expect(pass).toHaveLength(6)
    })
    test("que sea su longitud diferente de 0", () =>{
        expect(pass).not.toHaveLength(0)
    })
    
})