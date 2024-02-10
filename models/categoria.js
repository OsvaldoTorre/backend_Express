class Categoria {
    constructor(idCategoria, nombre) {
        this._idCategoria = idCategoria;
        this._nombre = nombre;
    }

    // Getters y setters
    get idCategoria() {
        return this._idCategoria;
    }
    set idCategoria(value) {
        this._idCategoria = value;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    // Método toString
    toString() {
        return `Categoria { idCategoria: ${this._idCategoria}, nombre: ${this._nombre} }`;
    }
}

module.exports = Categoria;
