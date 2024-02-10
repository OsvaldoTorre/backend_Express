class Categoria {
    constructor(idCategoria, nombre) {
        this._idCategoria = idCategoria;
        this._nombre = nombre;
    }

    // Getters y setters
    getidCategoria() {
        return this._idCategoria;
    }
    setidCategoria(value) {
        this._idCategoria = value;
    }

    getnombre() {
        return this._nombre;
    }
    setnombre(value) {
        this._nombre = value;
    }

    // Método toString
    toString() {
        return `Categoria { idCategoria: ${this._idCategoria}, nombre: ${this._nombre} }`;
    }
}

module.exports = Categoria;
