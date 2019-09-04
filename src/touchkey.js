const Qt1070 = require('qt1070');
const i2c = require('i2c-bus');

class TouchKey {

  constructor(i2c) {
    this.touch = new Qt1070(i2c);
  }

}

module.exports = TouchKey;