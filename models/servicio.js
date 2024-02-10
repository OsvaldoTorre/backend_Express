class Servicio {
    constructor(idServicio, idProveedor, idCategoria, idTamEvento, descripcion, imgRuta, nombre, costo, puntuacion, ubicacion, disponibilidad) {
        this._idServicio = idServicio;
        this._idProveedor = idProveedor;
        this._idCategoria = idCategoria;
        this._idTamEvento = idTamEvento;
        this._descripcion = descripcion;
        this._imgRuta = imgRuta;
        this._nombre = nombre;
        this._costo = costo;
        this._puntuacion = puntuacion;
        this._ubicacion = ubicacion;
        this._disponibilidad = disponibilidad;
    }

    // Getters y setters
    get idServicio() {
        return this._idServicio;
    }
    set idServicio(value) {
        this._idServicio = value;
    }

    get idProveedor() {
        return this._idProveedor;
    }
    set idProveedor(value) {
        this._idProveedor = value;
    }

    get idCategoria() {
        return this._idCategoria;
    }
    set idCategoria(value) {
        this._idCategoria = value;
    }

    get idTamEvento() {
        return this._idTamEvento;
    }
    set idTamEvento(value) {
        this._idTamEvento = value;
    }

    get descripcion() {
        return this._descripcion;
    }
    set descripcion(value) {
        this._descripcion = value;
    }

    get imgRuta() {
        return this._imgRuta;
    }
    set imgRuta(value) {
        this._imgRuta = value;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get costo() {
        return this._costo;
    }
    set costo(value) {
        this._costo = value;
    }

    get puntuacion() {
        return this._puntuacion;
    }
    set puntuacion(value) {
        this._puntuacion = value;
    }

    get ubicacion() {
        return this._ubicacion;
    }
    set ubicacion(value) {
        this._ubicacion = value;
    }

    get disponibilidad() {
        return this._disponibilidad;
    }
    set disponibilidad(value) {
        this._disponibilidad = value;
    }

    // Método toString
    toString() {
        return `Servicio { idServicio: ${this._idServicio}, idProveedor: ${this._idProveedor}, idCategoria: ${this._idCategoria}, nombre: ${this._nombre}, costo: ${this._costo}, puntuacion: ${this._puntuacion}, ubicacion: ${this._ubicacion}, disponibilidad: ${this._disponibilidad} }`;
    }
}

module.exports = Servicio;
