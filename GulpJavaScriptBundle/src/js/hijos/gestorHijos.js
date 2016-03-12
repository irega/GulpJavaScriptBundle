var Hijo = require('./hijo');

var obtenerTipoGestorHijos = (function () {
    var GestorHijos = function () {
        var self = this;
        self.crear = crear;
    };

    function crear(datosHijo) {
        var nuevoHijo = new Hijo();
        nuevoHijo.Nombre = datosHijo.Nombre;
        nuevoHijo.Anios = datosHijo.Anios;
        nuevoHijo.Altura = datosHijo.Altura;
        return nuevoHijo;
    }

    return GestorHijos;
})();

module.exports = obtenerTipoGestorHijos;