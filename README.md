# Touch Key

NodeJS Touch Keypad lib for QT1070.

Turns the QT1070 into a small keypad with key events.

Just subscribe to any of the events:

* `keydown`: to get notified when a key is pressed
* `keyup`: to get notified when a key is released
* `keychange`: to get notified when a key is pressed or released

The event object contains both the `key` (0 to 6) and `state` (`'pressed'` or `'released'`). For example:

```js
{
  key: 1,
  state: 'pressed'
}
```

You can also read the current state of the keys using the method `key_states()` which returns an array of all keys in the format shown above.

## Dependencies

This library makes use of:

* [qt1070](https://www.npmjs.com/package/qt1070) a driver library to interact with the QT1070
* [i2c-bus](https://www.npmjs.com/package/i2c-bus) to communicate with i2c devices
* [onoff](https://www.npmjs.com/package/onoff) to detect the interrupts coming from the QT1070 chip

## Example

The i2c object needs to be injected via the constructor.

A basic example:

```js
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
```
