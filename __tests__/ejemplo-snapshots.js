const persona ={
    nombre: "cami",
    balance: 500,
    tipo :'premiun'
}

describe("testing al cliente",()=>{
    test("haciendole un snapshot al cliente",()=>{
        expect(persona).toMatchSnapshot(); // para crear otro snapshot se puede hacer npm t -- -u
        // jest debería ser el unico que toque los snapshots, mejor eliminar la carpeta/archivo 
        // y hacer otro
        
    })
})