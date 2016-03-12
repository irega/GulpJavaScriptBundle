var obtenerTipoGestorRelaciones = (function () {

    var GestorRelaciones = function () {
        var self = this;
        self.relaciones = [];
        self.nuevaRelacion = nuevaRelacion;
        self.obtenerUltimaRelacion = obtenerUltimaRelacion;
    };

    function nuevaRelacion(padre, hijo) {
        var self = this;
        self.relaciones.push({ padre: padre, hijo: hijo });
    }

    function obtenerUltimaRelacion() {
        var self = this;
        return self.relaciones[self.relaciones.length - 1];
    }

    return GestorRelaciones;
})();

module.exports = obtenerTipoGestorRelaciones;