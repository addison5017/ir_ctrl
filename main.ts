let IR = 0
BitIR.IR_callbackUserV2(function (message) {
    if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Power)) {
        IR = 1
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Light)) {
        IR = 2
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.One)) {
        IR = 3
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Two)) {
        IR = 4
    }
})
basic.forever(function () {
    if (IR == 1) {
        IR = 0
        mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.OFF)
    } else if (IR == 2) {
        IR = 0
        mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Red)
    } else if (IR == 3) {
        IR = 0
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (IR == 4) {
        IR = 0
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (IR == 1) {
        IR = 0
        mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.OFF)
    } else if (IR == 2) {
        IR = 0
        mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Red)
    } else if (IR == 3) {
        IR = 0
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (IR == 4) {
        IR = 0
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
})
