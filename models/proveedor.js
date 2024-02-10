class Proveedor {
    constructor(idProveedor, nombre, apellidoPaterno, apellidoMaterno) {
        this._idProveedor = idProveedor;
        this._nombre = nombre;
        this._apellidoPaterno = apellidoPaterno;
        this._apellidoMaterno = apellidoMaterno;
    }

    // Getters y setters
    getidProveedor() {
        return this._idProveedor;
    }
    setidProveedor(value) {
        this._idProveedor = value;
    }

    getnombre() {
        return this._nombre;
    }
    setnombre(value) {
        this._nombre = value;
    }

    getapellidoPaterno() {
        return this._apellidoPaterno;
    }
    setapellidoPaterno(value) {
        this._apellidoPaterno = value;
    }

    getapellidoMaterno() {
        return this._apellidoMaterno;
    }
    setapellidoMaterno(value) {
        this._apellidoMaterno = value;
    }

    // Método toString
    toString() {
        return `Proveedor { idProveedor: ${this._idProveedor}, nombre: ${this._nombre}, apellidoPaterno: ${this._apellidoPaterno}, apellidoMaterno: ${this._apellidoMaterno} }`;
    }
}

module.exports = Proveedor;
