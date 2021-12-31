const hs = document.getElementById("hasil")
const binatang = document.getElementById("binatang")
function imageBinatang() {
    if (binatang.value == "k") {
        return hs.src = "kucing.png"
    } else if (binatang.value == "g") {
        return hs.src = "gajah.png"
    } else if (binatang.value == "i") {
        return hs.src = "kelinci.png"
    } else if (binatang.value == "b") {
        return hs.src = "buaya.png"
    } else {
        return hs.src = "singa.png"
    }
}
function imageConfirmation() {
    alert(hs.src)
}