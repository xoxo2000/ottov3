radio.onReceivedNumber(function (receivedNumber) {
    動作 = receivedNumber
})
function 左橫移 () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳 + 60, 64)
    basic.pause(150)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳 - 60, 64)
    basic.pause(150)
}
function 左轉 () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳 - 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳 + 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, 右腿 + 70, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, 左腿 + 70, 64)
    basic.pause(150)
    歸位()
    basic.pause(50)
}
// XXX
function 右轉 () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳 + 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳 - 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, 右腿 - 70, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, 左腿 - 70, 64)
    basic.pause(150)
    歸位()
    basic.pause(50)
}
function 左腳往前 () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳 - 10, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳 + 30, 64)
    basic.pause(100)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, 右腿 - 40, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, 左腿 - 40, 64)
    basic.pause(150)
}
function 舉左手 () {
    if (左手狀態 == 0) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo16, 左手 - 150, 64)
        左手狀態 = 1
        動作 = 0
        basic.pause(309)
    } else {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo16, 左手 - 0, 64)
        左手狀態 = 0
        動作 = 0
        basic.pause(300)
    }
}
function 後退 () {
    右腳往後()
    左腳往後()
}
function 前進 () {
    右腳往前()
    左腳往前()
}
function 左腳往後 () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳 - 10, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳 + 30, 64)
    basic.pause(100)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, 右腿 + 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, 左腿 + 30, 64)
    basic.pause(150)
}
function 歸位 () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, 右腿, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, 左腿, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳, 64)
    basic.pause(100)
}
function 右腳往後 () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳 + 10, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳 - 30, 64)
    basic.pause(100)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, 右腿 - 30, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, 左腿 - 30, 64)
    basic.pause(150)
}
function 舉右手 () {
    if (右手狀態 == 0) {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 右手 + 150, 64)
        右手狀態 = 1
        動作 = 0
        basic.pause(300)
    } else {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 右手 - 0, 64)
        右手狀態 = 0
        動作 = 0
        basic.pause(300)
    }
}
function 右腳往前 () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳 + 10, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳 - 30, 64)
    basic.pause(100)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, 右腿 + 40, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, 左腿 + 40, 64)
    basic.pause(150)
}
function 右橫移 () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳 - 60, 64)
    basic.pause(150)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳 + 60, 64)
    basic.pause(150)
}
let 動作 = 0
let 左腳 = 0
let 左腿 = 0
let 右腳 = 0
let 右腿 = 0
let 右手 = 0
let 左手 = 0
let 右手狀態 = 0
let 左手狀態 = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
左手狀態 = 0
右手狀態 = 0
左手 = 170
右手 = 10
右腿 = 90
右腳 = 90
左腿 = 90
左腳 = 90
動作 = 0
PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 右手, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, 右腿, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, 右腳, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo16, 左手, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, 左腿, 64)
PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, 左腳, 64)
basic.pause(2000)
basic.forever(function () {
    if (動作 == 1) {
        前進()
    } else if (動作 == 2) {
        後退()
    } else if (動作 == 3) {
        左轉()
    } else if (動作 == 4) {
        右轉()
    } else if (動作 == 0) {
        歸位()
    } else if (動作 == 5) {
        左橫移()
    } else if (動作 == 6) {
        右橫移()
    } else if (動作 == 7) {
        舉左手()
    } else if (動作 == 8) {
        舉右手()
    }
})
