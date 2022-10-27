input.onButtonPressed(Button.A, function () {
    radio.sendString("Alexander Pro")
    basic.pause(100)
    basic.clearScreen()
    basic.showString("Alexander Pro")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("" + (input.temperature()))
    basic.showString("" + (input.temperature()))
    radio.sendString("" + (input.lightLevel()))
    basic.showString("" + (input.lightLevel()))
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("")
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showIcon(IconNames.Confused)
        basic.pause(200)
        basic.showIcon(IconNames.Angry)
        basic.pause(200)
        basic.showIcon(IconNames.Asleep)
        basic.pause(200)
        basic.showIcon(IconNames.Surprised)
        basic.pause(200)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
