//var Emitter = require('./emitter');
var Emitter = require('events');
var Config = require('./config');
var config = Config;
/*El código sigue funcionando de igual forma y nos muestra las funciones anónimas que se encuentran 
greet y jump gracias al modulo de config
*/
var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

//Se muestra el mensaje de Hello y los dos mensajes de cada función que contiene greet

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr);// imprime los eventos de las funciones que contiene greet como funciones anónimas
emtr.emit('jump');//imprime el mensaje de la funciónde jump