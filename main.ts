input.onButtonPressed(Button.A, function () {
    if (temp < 32) {
        temp += 1
    }
    basic.showNumber(temp)
})
input.onButtonPressed(Button.B, function () {
    if (temp > 16) {
        temp += -1
    }
    basic.showNumber(temp)
})
let temp = 0
temp = 20
basic.forever(function () {
	
})
