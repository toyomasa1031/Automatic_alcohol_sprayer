basic.forever(function () {
    basic.showIcon(IconNames.Asleep)
    pins.servoWritePin(AnalogPin.P0, 0)
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        basic.showIcon(IconNames.Heart)
        for (let index = 0; index < 1; index++) {
            pins.servoWritePin(AnalogPin.P0, 80)
        }
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
