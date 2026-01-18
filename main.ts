let h = 0
basic.forever(function () {
    h = pins.digitalReadPin(DigitalPin.P0)
    if (h < 60) {
        basic.showString("s")
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        basic.showString("h")
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
