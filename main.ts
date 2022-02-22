control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendString("RS")
    basic.showIcon(IconNames.House)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("RL")
        basic.showIcon(IconNames.Giraffe)
    } else {
        radio.sendString("R")
        basic.showIcon(IconNames.Sad)
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendString("LS")
    basic.showIcon(IconNames.Asleep)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("LR")
        basic.showIcon(IconNames.Scissors)
    } else {
        radio.sendString("L")
        basic.showIcon(IconNames.Angry)
    }
})
radio.setGroup(158)
basic.forever(function () {
	
})
