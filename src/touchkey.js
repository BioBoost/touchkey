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
    this.previousKeyState = 0;
    this.interrupt.watch((err, value) => {
      if (!err) {
        let keys = this.read_full_status().keys;
        let keyEvents = this.determine_key_events(keys);
        this.previousKeyState = keys;
        console.log(keyEvents);
      }
    });
  }

  determine_key_events(currentKeyState) {
    let events = [];
    let pressed = currentKeyState & (~this.previousKeyState);
    let released = this.previousKeyState & (~currentKeyState);

    for (let i = 0; i < 7; i++) {
      if (pressed & (0x01 << i)) {
        events.push({ key: i, state: 'pressed' })
      } else if (released & (0x01 << i)) {
        events.push({ key: i, state: 'released' })
      }
    }
    return events;
  }


}

module.exports = TouchKey;