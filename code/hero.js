const button_next = document.querySelector (".wrapper-next.arrow")
const button_back = document.querySelector (".wrapper-back.arrow")
const dot_1 = document.querySelector (".dot-wrapper:nth-child(1)")
const dot_2 = document.querySelector (".dot-wrapper:nth-child(2)")
const dot_3 = document.querySelector (".dot-wrapper:nth-child(3)")

var current_image = 2

function update_image () {
    // Update image in the page
    console.log (current_image)

}

button_next.addEventListener ("click", function (e) {
    // Go to next image
    current_image += 1
    if (current_image > 3) {
        current_image = 1
    }
    update_image ()
})

button_back.addEventListener ("click", function (e) {
    // Go to last image
    current_image -= 1
    if (current_image < 1) {
        current_image = 3
    }
    update_image ()
})

dot_1.addEventListener ("click", function (e) {
    current_image = 1
    update_image ()
})

dot_2.addEventListener ("click", function (e) {
    current_image = 2
    update_image ()
})

dot_3.addEventListener ("click", function (e) {
    current_image = 3
    update_image ()
})