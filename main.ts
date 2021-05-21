input.onButtonPressed(Button.A, function () {
    koi.koi_addtag("no_mask")
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    koi.koi_cls_save("FACE.bin")
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    koi.koi_addtag("mask")
    music.playTone(262, music.beat(BeatFraction.Whole))
})
koi.koi_init_pw(koi.SerialPorts.PORT2)
koi.koi_reset_cls()
basic.showIcon(IconNames.Yes)
