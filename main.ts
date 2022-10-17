radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
    basic.showString("" + (input.lightLevel()))
})
input.onGesture(Gesture.Shake, function () {
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
