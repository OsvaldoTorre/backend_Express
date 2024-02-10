CREATE TABLE `cliente` (
  `idCorreo` VARCHAR(254) PRIMARY KEY,
  `nombre` VARCHAR(64),
  `apellidoPaterno` VARCHAR(64),
  `apellidoMaterno` VARCHAR(64)
);

CREATE TABLE `pedido` (
  `idPedido` VARCHAR(64) PRIMARY KEY,
  `idCorreo` VARCHAR(254),
  `idServicio` VARCHAR(64),
  `direccion` VARCHAR(255),
  `fecha` DATE,
  `hora` TIME,
  FOREIGN KEY (`idCorreo`) REFERENCES `cliente`(`idCorreo`),
  FOREIGN KEY (`idServicio`) REFERENCES `servicio`(`idServicio`)
);

CREATE TABLE `categoria` (
  `idCategoria` VARCHAR(64) PRIMARY KEY,
  `nombre` VARCHAR(64)
);

CREATE TABLE `proveedor` (
  `idProveedor` VARCHAR(64) PRIMARY KEY,
  `nombre` VARCHAR(64),
  `apellidoPaterno` VARCHAR(64),
  `apellidoMaterno` VARCHAR(64)
);

CREATE TABLE `servicio` (
  `idServicio` VARCHAR(64) PRIMARY KEY,
  `idProveedor` VARCHAR(64),
  `idCategoria` VARCHAR(64),
  `idTamEvento` VARCHAR(64),
  `descripcion` VARCHAR(255),
  `imgRuta` VARCHAR(255),
  `nombre` VARCHAR(64),
  `costo` INT,
  `puntuacion` DECIMAL(3,2),
  `ubicacion` VARCHAR(255),
  `disponibilidad` BOOLEAN,
  FOREIGN KEY (`idProveedor`) REFERENCES `proveedor`(`idProveedor`),
  FOREIGN KEY (`idCategoria`) REFERENCES `categoria`(`idCategoria`)
);

CREATE TABLE `tamanoEvento` (
  `idTamEvento` VARCHAR(64) PRIMARY KEY,
  `nombre` VARCHAR(64)
);
