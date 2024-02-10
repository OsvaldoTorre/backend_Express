class Proveedor {
    constructor(idProveedor, nombre, apellidoPaterno, apellidoMaterno) {
        this._idProveedor = idProveedor;
        this._nombre = nombre;
        this._apellidoPaterno = apellidoPaterno;
        this._apellidoMaterno = apellidoMaterno;
    }

    // Getters y setters
    get idProveedor() {
        return this._idProveedor;
    }
    set idProveedor(value) {
        this._idProveedor = value;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get apellidoPaterno() {
        return this._apellidoPaterno;
    }
    set apellidoPaterno(value) {
        this._apellidoPaterno = value;
    }

    get apellidoMaterno() {
        return this._apellidoMaterno;
    }
    set apellidoMaterno(value) {
        this._apellidoMaterno = value;
    }

    // Método toString
    toString() {
        return `Proveedor { idProveedor: ${this._idProveedor}, nombre: ${this._nombre}, apellidoPaterno: ${this._apellidoPaterno}, apellidoMaterno: ${this._apellidoMaterno} }`;
    }
}

module.exports = Proveedor;
