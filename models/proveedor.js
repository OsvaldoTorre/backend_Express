class Proveedor {
    constructor(idProveedor, nombre, apellidoPaterno, apellidoMaterno, activo) {
        this._idProveedor = idProveedor;
        this._nombre = nombre;
        this._apellidoPaterno = apellidoPaterno;
        this._apellidoMaterno = apellidoMaterno;
        this._activo = activo;
        
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

    getactivo(){
        return this._activo;
    }

    setactivo(value){
        this._activo = value;
    }

    // Método toString
    toString() {
        return `Proveedor { idProveedor: ${this._idProveedor}, nombre: ${this._nombre}, apellidoPaterno: ${this._apellidoPaterno}, apellidoMaterno: ${this._apellidoMaterno}, activo: ${this._activo }`;
    }
}

module.exports = Proveedor;
