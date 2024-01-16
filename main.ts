basic.showString("R")
basic.showIcon(IconNames.Yes)
radio.setGroup(123)
basic.forever(function () {
    if (gamerbit.isPressed(GamerBitPin.P0)) {
        radio.sendString("colorchangeup")
        basic.showIcon(IconNames.Heart)
    }
    if (gamerbit.isPressed(GamerBitPin.P8)) {
        radio.sendString("colorchangedown")
        basic.showIcon(IconNames.Tortoise)
    }
    if (gamerbit.isPressed(GamerBitPin.P1)) {
        radio.sendString("brightnessup")
        basic.showIcon(IconNames.SmallHeart)
    }
    if (gamerbit.isPressed(GamerBitPin.P2)) {
        radio.sendString("brightnessdown")
        basic.showIcon(IconNames.StickFigure)
    }
    if (gamerbit.isPressed(GamerBitPin.P12)) {
        radio.sendString("demo")
        basic.showIcon(IconNames.Duck)
    }
    if (gamerbit.isPressed(GamerBitPin.P16)) {
        radio.sendString("gamble")
        basic.showIcon(IconNames.LeftTriangle)
    }
    basic.pause(100)
})
