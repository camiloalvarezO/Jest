import { sumar } from "../js/funciones.js";
import jsdom from "jsdom";

global.document = jsdom.JSDOM("<!doctype html><html><body></body></html>");
global.window = global.document.defaultView;

describe("prueba a los modulos",()=>{
    test("15 + 5 es 20",()=>{
        expect(sumar(15,5)).toBe(20);
    })
})