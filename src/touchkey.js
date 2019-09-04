const Qt1070 = require('qt1070');
const i2c = require('i2c-bus');
const Gpio = require('onoff').Gpio;

class TouchKey {

  constructor(i2c, interruptPin=4) {
    this.touch = new Qt1070(i2c);
    this.interrupt = new Gpio(interruptPin, 'in', 'falling');
    this.read_full_status();    // Clears interrupt flags
    this.start_watching_for_keys();
  }

  //////////////////////
  // Internal methods //
  //////////////////////

  read_full_status() {
    return {
      keys: this.touch.keys(),
      status: this.touch.status()
    }
  }

  start_watching_for_keys() {
    this.interrupt.watch((err, value) => {
      if (!err) {
        let keys = this.read_full_status().keys;
        console.log(`Keys: ${keys}`);
      }
    });
  }

}

module.exports = TouchKey;