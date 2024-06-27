import Citas from "../js/classes/Citas";
// import jsdom from "jsdom";

// global.document = jsdom.JSDOM("<!doctype html><html><body></body></html>");
// global.window = global.document.defaultView;


describe('prueba a la clase de citas',()=>{

    const citas = new Citas()
    test('creación y validación de citas',()=>{
        const citaObj = {
            mascota: 'gatito',
            propietario: 'camilo',
            telefono: '30214',
            fecha: '24-06-2024',
            hora:'05:00',
            sintomas: 'dormido'
        }

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot()
    })
})