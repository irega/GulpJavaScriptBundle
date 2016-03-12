var Padre = require('./padre');

var obtenerTipoGestorPadres = (function () {
    var GestorPadres = function () {
        var self = this;
        self.crear = crear;
    };

    function crear(datosPadre) {
        var nuevoPadre = new Padre();
        nuevoPadre.Nombre = datosPadre.Nombre;
        nuevoPadre.Anios = datosPadre.Anios;
        nuevoPadre.Empleo = datosPadre.Empleo;
        return nuevoPadre;
    }

    return GestorPadres;
})();

module.exports = obtenerTipoGestorPadres;