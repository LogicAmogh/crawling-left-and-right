let X = 0
input.onButtonPressed(Button.A, function () {
    X = 4
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        X += -1
        led.plot(X, 2)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    X = 0
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        X += 1
        led.plot(X, 2)
        basic.pause(100)
    }
})
