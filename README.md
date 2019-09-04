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

## Dependencies

This library makes use of:

* [qt1070](https://www.npmjs.com/package/qt1070) a driver library to interact with the QT1070
* [i2c-bus](https://www.npmjs.com/package/i2c-bus) to communicate with i2c devices
* [onoff](https://www.npmjs.com/package/onoff) to detect the interrupts coming from the QT1070 chip
