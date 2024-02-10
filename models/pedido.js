class Pedido {
    constructor(idPedido, idCorreo, idServicio, direccion, fecha, hora) {
      this._idPedido = idPedido;
      this._idCorreo = idCorreo;
      this._idServicio = idServicio;
      this._direccion = direccion;
      this._fecha = fecha;
      this._hora = hora;
    }
  
    getidPedido() {
      return this._idPedido;
    }
    setidPedido(value) {
      this._idPedido = value;
    }
  
    getidCorreo() {
      return this._idCorreo;
    }
    setidCorreo(value) {
      this._idCorreo = value;
    }
  
    getidServicio() {
      return this._idServicio;
    }
    setidServicio(value) {
      this._idServicio = value;
    }
  
    getdireccion() {
      return this._direccion;
    }
    setdireccion(value) {
      this._direccion = value;
    }
  
    getfecha() {
      return this._fecha;
    }
    setfecha(value) {
      this._fecha = value;
    }
  
    gethora() {
      return this._hora;
    }
    sethora(value) {
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
  