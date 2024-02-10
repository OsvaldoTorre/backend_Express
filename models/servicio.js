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
    getidServicio() {
        return this._idServicio;
    }
    setidServicio(value) {
        this._idServicio = value;
    }

    getidProveedor() {
        return this._idProveedor;
    }
    setidProveedor(value) {
        this._idProveedor = value;
    }

    getidCategoria() {
        return this._idCategoria;
    }
    setidCategoria(value) {
        this._idCategoria = value;
    }

    getidTamEvento() {
        return this._idTamEvento;
    }
    setidTamEvento(value) {
        this._idTamEvento = value;
    }

    getdescripcion() {
        return this._descripcion;
    }
    setdescripcion(value) {
        this._descripcion = value;
    }

    getimgRuta() {
        return this._imgRuta;
    }
    setimgRuta(value) {
        this._imgRuta = value;
    }

    getnombre() {
        return this._nombre;
    }
    setnombre(value) {
        this._nombre = value;
    }

    getcosto() {
        return this._costo;
    }
    setcosto(value) {
        this._costo = value;
    }

    getpuntuacion() {
        return this._puntuacion;
    }
    setpuntuacion(value) {
        this._puntuacion = value;
    }

    getubicacion() {
        return this._ubicacion;
    }
    setubicacion(value) {
        this._ubicacion = value;
    }

    getdisponibilidad() {
        return this._disponibilidad;
    }
    setdisponibilidad(value) {
        this._disponibilidad = value;
    }

    // Método toString
    toString() {
        return `Servicio { idServicio: ${this._idServicio}, idProveedor: ${this._idProveedor}, idCategoria: ${this._idCategoria}, nombre: ${this._nombre}, costo: ${this._costo}, puntuacion: ${this._puntuacion}, ubicacion: ${this._ubicacion}, disponibilidad: ${this._disponibilidad} }`;
    }
}

module.exports = Servicio;
