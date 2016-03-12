var GestorPadres = require('./padres/gestorPadres');
var GestorHijos = require('./hijos/gestorHijos');
var GestorRelaciones = require('./relaciones/gestorRelaciones');

window.MiLibreriaJS = MiLibreriaJS || {};

(function (libreria) {
    "use strict";

    var instanciaGestorPadres = new GestorPadres(),
        instanciaGestorHijos = new GestorHijos(),
        instanciaGestorRelaciones = new GestorRelaciones();

    libreria.crearPadre = function (datosPadre) {
        return instanciaGestorPadres.crear(datosPadre);
    }
    libreria.crearHijo = function (datosHijo) {
        return instanciaGestorHijos.crear(datosHijo);
    };
    libreria.aniadirHijoAPadre = function (padre, hijo) {
        instanciaGestorRelaciones.nuevaRelacion(padre, hijo);
    }
    libreria.obtenerUltimaRelacion = instanciaGestorRelaciones.obtenerUltimaRelacion;

}(MiLibreriaJS));