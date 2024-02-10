const db = require('../models/db'); // Importa la conexión a MySQL

// Crea un nuevo cliente
exports.crearCliente = (req, res) => {
    const { idCorreo, nombre, apellidoPaterno, apellidoMaterno } = req.body;
    const query = 'INSERT INTO cliente SET ?';

    db.query(query, { idCorreo, nombre, apellidoPaterno, apellidoMaterno }, (err, results) => {
        if (err) {
            console.error('Error al crear el cliente:', err);
            return res.status(500).json({ error: 'Error al crear el cliente' });
        }
        res.json({ message: 'Cliente creado correctamente', id: results.insertId });
    });
};

// Consulta todos los clientes
exports.obtenerClientes = (req, res) => {
    const query = 'SELECT * FROM cliente';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al consultar los clientes:', err);
            return res.status(500).json({ error: 'Error al consultar los clientes' });
        }
        res.json(results);
    });
};

// Consulta un cliente por su ID de correo
exports.obtenerClientePorId = (req, res) => {
    const idCorreo = req.params.idCorreo; // Obtén el ID de correo de los parámetros de la ruta
    const query = 'SELECT * FROM cliente WHERE idCorreo = ?';

    db.query(query, [idCorreo], (err, results) => {
        if (err) {
            console.error('Error al consultar el cliente:', err);
            return res.status(500).json({ error: 'Error al consultar el cliente' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(results[0]);
    });
};

// Actualiza los datos de un cliente
exports.actualizarCliente = (req, res) => {
    const { nombre, apellidoPaterno, apellidoMaterno } = req.body;
    const idCorreo = req.params.idCorreo;
    const query = 'UPDATE cliente SET nombre = ?, apellidoPaterno = ?, apellidoMaterno = ? WHERE idCorreo = ?';

    db.query(query, [nombre, apellidoPaterno, apellidoMaterno, idCorreo], (err, results) => {
        if (err) {
            console.error('Error al actualizar el cliente:', err);
            return res.status(500).json({ error: 'Error al actualizar el cliente' });
        }
        res.json({ message: 'Cliente actualizado correctamente' });
    });
};

// Elimina un cliente por su ID de correo
exports.eliminarCliente = (req, res) => {
    const idCorreo = req.params.idCorreo;
    const query = 'DELETE FROM cliente WHERE idCorreo = ?';

    db.query(query, [idCorreo], (err, results) => {
        if (err) {
            console.error('Error al eliminar el cliente:', err);
            return res.status(500).json({ error: 'Error al eliminar el cliente' });
        }
        res.json({ message: 'Cliente eliminado correctamente' });
    });
};
