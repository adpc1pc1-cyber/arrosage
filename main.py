let h = 0
basic.forever(function () {
    if (h < 60) {
        basic.showString("s")
        pins.digitalWritePin(DigitalPin.P1, 1)
        h = pins.digitalReadPin(DigitalPin.P0)
    } else {
        basic.showString("h")
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("s")
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
