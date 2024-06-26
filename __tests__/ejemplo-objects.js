const persona = {
    nombre: "Camilo",
    balance : 500
};


describe("testing a objetos",() =>{
    test("verificar que el usuario es premiun",()=>{
        expect(persona.balance).toBeGreaterThan(499);
    });

    test("verificar que es camilo",()=>{
        expect(persona.nombre).toBe('Camilo');
    });

    
    test("verificar que es camilo pero con Regex",()=>{
        expect(persona.nombre).toMatch(/camilo$/i);  
        // camilo: This part matches the string "camilo" in a case-insensitive manner due
        //  to the i flag at the end of the regular expression.
        //  $: This asserts that "camilo" appears at the end of the string.
        //  /i: The i flag at the end of the regular expression makes the match case-insensitive.
        //  This means that it will match "Camilo", "camilo", "CAMILO", or any other combination
        //  of uppercase and lowercase letters.
    })

    test("verificar que es diferente de camilo",()=>{
        expect(persona.nombre).not.toBe(/camilo/)
    })

    test("verificar que tiene una banca menor de 600",()=>{
        expect(persona.balance).toBeLessThanOrEqual(600);
    })
    test("tiene diferente de  500",()=>{
        expect(persona).not.toBe(500)
    })
})