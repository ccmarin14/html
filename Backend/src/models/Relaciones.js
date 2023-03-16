import { Gallinero } from './Gallinero.js';
import { Gallina } from './Gallina.js';
import { Sensor } from './Sensor.js';
import { Puerta } from './Puerta.js';
import { RegistroPuerta } from './RegistroPuerta.js';
import { RegistroMovimiento } from './RegistroMovimiento.js';

Gallinero.hasMany(Gallina, {
    foreignKey: 'gallineroId',
    sourceKey: 'id'
});

Gallinero.hasMany(Puerta, {
    foreignKey: 'gallineroId',
    sourceKey: 'id'
});

Gallinero.hasMany(Sensor, {
    foreignKey: 'gallineroId',
    sourceKey: 'id'
});

Puerta.hasMany(RegistroPuerta, {
    foreignKey: 'puertaId',
    sourceKey: 'id'
});

Puerta.belongsTo(Gallinero, {
    foreignKey: 'gallineroId',
    targetId: 'id'
});

Gallina.hasMany(RegistroMovimiento, {
    foreignKey: 'tagId',
    sourceKey: 'tag'
});

Gallina.belongsTo(Gallinero, {
    foreignKey: 'gallineroId',
    targetId: 'id'
})

Sensor.hasMany(RegistroMovimiento, {
    foreignKey: 'sensorId',
    sourceKey: 'id'
});

Sensor.belongsTo(Gallinero, {
    foreignKey: 'gallineroId',
    targetId: 'id'
})

RegistroMovimiento.belongsTo(Gallina, {
    foreignKey: 'tagId',
    targetId: 'tag'
})

RegistroMovimiento.belongsTo(Sensor, {
    foreignKey: 'sensorId',
    targetId: 'id'
});

RegistroPuerta.belongsTo(Puerta, {
    foreignKey: 'puertaId',
    targetId: 'id'
});
