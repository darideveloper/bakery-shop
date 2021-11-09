const button_next = document.querySelector (".wrapper-next.arrow")
const button_back = document.querySelector (".wrapper-back.arrow")
const dot_1 = document.querySelector (".dot-wrapper:nth-child(1)")
const dot_2 = document.querySelector (".dot-wrapper:nth-child(2)")
const dot_3 = document.querySelector (".dot-wrapper:nth-child(3)")
const cover_bg = document.querySelector (".cover > .background")
var cover_imgs = document.querySelectorAll (".cover > .background img")

var last_image = 2
var current_image = 2
var running_transition = false

function start_transition () {
    // Set class to cover background for start transition
    if (current_image != last_image) {
        cover_bg.classList.add ("transition")
    }
} 

function change_image () {
    // Show only current image

    for (index in Array.from (cover_imgs)) {
        current_img = cover_imgs[index]
        current_img.classList.remove ("active")
    }

    active_image = cover_imgs[current_image - 1]
    active_image.classList.add ("active")
    
}

function end_transition () {
    // Set class to cover background for start transition
    if (current_image != last_image) {
        cover_bg.classList.remove ("transition")
    }
}

function update_image () {
    // Update image in the page
    console.log (current_image)
    start_transition ()   
    setTimeout (change_image, 500) 
    setTimeout (end_transition, 550)
}

button_next.addEventListener ("click", function (e) {
    // Go to next image
    last_image = current_image
    current_image += 1
    if (current_image > 3) {
        current_image = 1
    }
    update_image ()
})

button_back.addEventListener ("click", function (e) {
    // Go to last image
    last_image = current_image
    current_image -= 1
    if (current_image < 1) {
        current_image = 3
    }
    update_image ()
})

dot_1.addEventListener ("click", function (e) {
    last_image = current_image
    current_image = 1
    update_image ()
})

dot_2.addEventListener ("click", function (e) {
    last_image = current_image
    current_image = 2
    update_image ()
})

dot_3.addEventListener ("click", function (e) {
    last_image = current_image
    current_image = 3
    update_image ()
})