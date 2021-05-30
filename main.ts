basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # # # . .
        . . . . .
        # . . . .
        `)
    basic.clearScreen()
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Heart)
            pins.servoWritePin(AnalogPin.P0, 110)
            basic.pause(100)
            pins.servoWritePin(AnalogPin.P0, 0)
            basic.pause(100)
        }
        basic.clearScreen()
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
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # # #
            . . . # .
            . . . . #
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
})
