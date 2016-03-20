var GestorPadres = require('../src/js/padres/gestorPadres.js');

describe("El gestor de padres", function () {
    it("crea un padre válido", function () {
        var datosNuevoPadre = {
            Nombre: "Darth Vader",
            Anios: "65",
            Empleo: "Sith"
        };
       
        var gestorPadres = new GestorPadres();
        var nuevoPadre = gestorPadres.crear(datosNuevoPadre);
        expect(nuevoPadre.Nombre).toBe(datosNuevoPadre.Nombre);
        expect(nuevoPadre.Anios).toBe(datosNuevoPadre.Anios);
        expect(nuevoPadre.Empleo).toBe(datosNuevoPadre.Empleo);
    });
});