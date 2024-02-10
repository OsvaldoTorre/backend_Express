class Pedido {
    constructor(idPedido, idCorreo, idServicio, direccion, fecha, hora) {
      this._idPedido = idPedido;
      this._idCorreo = idCorreo;
      this._idServicio = idServicio;
      this._direccion = direccion;
      this._fecha = fecha;
      this._hora = hora;
    }
  
    get idPedido() {
      return this._idPedido;
    }
    set idPedido(value) {
      this._idPedido = value;
    }
  
    get idCorreo() {
      return this._idCorreo;
    }
    set idCorreo(value) {
      this._idCorreo = value;
    }
  
    get idServicio() {
      return this._idServicio;
    }
    set idServicio(value) {
      this._idServicio = value;
    }
  
    get direccion() {
      return this._direccion;
    }
    set direccion(value) {
      this._direccion = value;
    }
  
    get fecha() {
      return this._fecha;
    }
    set fecha(value) {
      this._fecha = value;
    }
  
    get hora() {
      return this._hora;
    }
    set hora(value) {
      this._hora = value;
    }
  
    isDisponible() {
        //logica
      return this._disponibilidad;
    }

    toString() {
        return `Pedido { idPedido: ${this._idPedido}, idCorreo: ${this._idCorreo}, idServicio: ${this._idServicio}, direccion: ${this._direccion}, fecha: ${this._fecha}, hora: ${this._hora} }`;
    }
  }
  
  module.exports = Pedido;
  