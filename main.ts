input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
    }
    basic.showString("OK!")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    basic.showIcon(IconNames.Asleep)
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        basic.showIcon(IconNames.Heart)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 0)
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
