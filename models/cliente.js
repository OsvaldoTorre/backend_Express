class Cliente {

    constructor(idCorreo, nombre, apellidoPaterno, apellidoMaterno) {
        this.idCorreo = idCorreo;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }

    getIdCorreo() {
        return this.idCorreo;
    }

    setIdCorreo(idCorreo) {
        this.idCorreo = idCorreo;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellidoPaterno() {
        return this.apellidoPaterno;
    }

    setApellidoPaterno(apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }

    getApellidoMaterno() {
        return this.apellidoMaterno;
    }

    setApellidoMaterno(apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    }

    toString() {
        return `Cliente { idCorreo: ${this.idCorreo}, nombre: ${this.nombre}, apellidoPaterno: ${this.apellidoPaterno}, apellidoMaterno: ${this.apellidoMaterno} }`;
    }
}