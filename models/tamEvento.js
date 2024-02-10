class TamanoEvento {
    constructor(idTamEvento, nombre) {
      this.idTamEvento = idTamEvento;
      this.nombre = nombre;
    }
  
    getIdTamEvento() {
      return this.idTamEvento;
    }
  
    setIdTamEvento(value) {
      this.idTamEvento = newIdTamEvento;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(value) {
      this.nombre = newNombre;
    }
  
    toString() {
      return `TamanoEvento { idTamEvento: ${this.idTamEvento}, nombre: ${this.nombre} }`;
    }
  }
  
  module.exports = TamanoEvento;
  