const TouchKey = require('touchkey');
const i2c = require('i2c-bus');

const i2c1 = i2c.open(1, (err) => {
  if (err) throw err;
  console.log("Opened i2c bus successfully");

  let keypad = new TouchKey(i2c1);

  keypad.on('keychange', (event) => {
    console.log("Getting keychange event " + JSON.stringify(event));
  });

  keypad.on('keydown', (event) => {
    console.log("Getting keydown event " + JSON.stringify(event));
  });

  keypad.on('keyup', (event) => {
    console.log("Getting keyup event " + JSON.stringify(event));
  });

});