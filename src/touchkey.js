const Qt1070 = require('qt1070');
const i2c = require('i2c-bus');
const Gpio = require('onoff').Gpio;

class TouchKey {

  constructor(i2c, interruptPin=4) {
    this.touch = new Qt1070(i2c);
    this.interrupt = new Gpio(interruptPin, 'in', 'falling');
  }

}

module.exports = TouchKey;