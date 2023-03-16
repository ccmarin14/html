CREATE DATABASE gallinero;

USE gallinero;

CREATE TABLE `gallineros` (
  `id` int PRIMARY KEY
);

CREATE TABLE `puertas` (
  `id` int PRIMARY KEY,
  `gallineroId` int NOT NULL
);

CREATE TABLE `sensors` (
  `id` int PRIMARY KEY,
  `gallineroId` int NOT NULL
);

CREATE TABLE `gallinas` (
  `tag` int PRIMARY KEY,
  `gallineroId` int NOT NULL,
  `estado` varchar(255)
);

CREATE TABLE `registros_puerta` (
  `id` int PRIMARY KEY,
  `puertaId` int NOT NULL,
  `fecha` date NOT NULL,
  `evento` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL
);

CREATE TABLE `registros_movimientos` (
  `id` int PRIMARY KEY,
  `tagId` int NOT NULL,
  `sensorId` int NOT NULL,
  `fecha` date NOT NULL,
  `dentro` boolean NOT NULL
);

ALTER TABLE `puertas` ADD FOREIGN KEY (`gallineroId`) REFERENCES `gallineros` (`id`);

ALTER TABLE `sensors` ADD FOREIGN KEY (`gallineroId`) REFERENCES `gallineros` (`id`);

ALTER TABLE `gallinas` ADD FOREIGN KEY (`gallineroId`) REFERENCES `gallineros` (`id`);

ALTER TABLE `registros_puerta` ADD FOREIGN KEY (`puertaId`) REFERENCES `puertas` (`id`);

ALTER TABLE `registros_movimientos` ADD FOREIGN KEY (`sensorId`) REFERENCES `sensors` (`id`);

ALTER TABLE `registros_movimientos` ADD FOREIGN KEY (`tagId`) REFERENCES `gallinas` (`tag`);
