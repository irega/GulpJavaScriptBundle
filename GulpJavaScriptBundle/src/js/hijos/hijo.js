var obtenerTipoHijo = (function () {
    var Hijo = function () {
        var self = this;
        self.Nombre = "";
        self.Anios = "";
        self.Altura = "";
    };
    return Hijo;
})();

module.exports = obtenerTipoHijo;