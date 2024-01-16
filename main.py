basic.show_string("R")
basic.show_icon(IconNames.YES)
radio.set_group(123)

def on_forever():
    if gamerbit.is_pressed(GamerBitPin.P0):
        radio.send_string("colorchangeup")
        basic.show_icon(IconNames.HEART)
    if gamerbit.is_pressed(GamerBitPin.P8):
        radio.send_string("colorchangedown")
        basic.show_icon(IconNames.TORTOISE)
    if gamerbit.is_pressed(GamerBitPin.P1):
        radio.send_string("brightnessup")
        basic.show_icon(IconNames.SMALL_HEART)
    if gamerbit.is_pressed(GamerBitPin.P2):
        radio.send_string("brightnessdown")
        basic.show_icon(IconNames.STICK_FIGURE)
    if gamerbit.is_pressed(GamerBitPin.P12):
        radio.send_string("demo")
        basic.show_icon(IconNames.DUCK)
    if gamerbit.is_pressed(GamerBitPin.P16):
        radio.send_string("gamble")
        basic.show_icon(IconNames.LEFT_TRIANGLE)
    basic.pause(100)
basic.forever(on_forever)
