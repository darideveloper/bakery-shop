const button_next = document.querySelector (".wrapper-next.arrow")
const button_back = document.querySelector (".wrapper-back.arrow")
const dot_1 = document.querySelector (".dot-wrapper:nth-child(1)")
const dot_2 = document.querySelector (".dot-wrapper:nth-child(2)")
const dot_3 = document.querySelector (".dot-wrapper:nth-child(3)")
const cover_bg = document.querySelector (".cover > .background")
const slider = document.querySelector (".cover")

var cover_imgs = document.querySelectorAll (".cover > .background img")
var cover_texts = document.querySelectorAll (".cover > .text p")
var dots = document.querySelectorAll (".dot-wrapper > .dot")
var selector_current_text = ".cover > .text > p.active"

var last_image = 2
var current_image = 2
var transition_next = null

function start_transitions () {
    // Set class to cover background for start transition
    cover_bg.classList.add ("transition")
    
    // Set class to current cover text for start transition
    text_elem = document.querySelector (selector_current_text)
    if (transition_next) {
        text_elem.classList.add ("transition-next")
    } else {
        text_elem.classList.add ("transition-back")
    }

    // Set in correct position the current text
    active_text = cover_texts[current_image - 1]
    if (transition_next) {
        active_text.classList.add ("transition-back")
    } else {
        active_text.classList.add ("transition-next")
    }
} 

function change_elems () {
    // Show only current elements (images,dots and texts)

    // Hide all images
    for (index in Array.from (cover_imgs)) {
        current_img = cover_imgs[index]
        current_img.classList.remove ("active")
    }

    // Show current image
    active_image = cover_imgs[current_image - 1]
    active_image.classList.add ("active")

    // Hide all dots
    for (index in Array.from (dots)) {
        current_dot = dots[index]
        current_dot.classList.remove ("active")
    }

    // Show current dots
    active_dot = dots[current_image - 1]
    active_dot.classList.add ("active")

    // Update area label
    slider.setAttribute ("aria-valuenow", current_image)
}

function change_text () {
    // Hide all texts
    for (index in Array.from (cover_texts)) {
        current_text = cover_texts[index]
        current_text.classList.remove ("active")
    }

    // Show current text
    active_text = cover_texts[current_image - 1]
    active_text.classList.add ("active")
}

function end_img_transition () {
    // Set class to cover background for start transition
    cover_bg.classList.remove ("transition")  
}

function end_text_transition () {
    // Reemove all transition classes
    for (index in Array.from (cover_texts)) {
        current_text = cover_texts[index]
        current_text.classList.remove ("transition-back")
        current_text.classList.remove ("transition-next")
    }  
}

function update_image () {
    // Update image in the page

    if (current_image != last_image) {
        console.log (current_image)
        start_transitions ()   
        setTimeout (change_text, 300)
        setTimeout (change_elems, 500)
        setTimeout (end_text_transition, 350) 
        setTimeout (end_img_transition, 550)
    }
}

button_next.addEventListener ("click", function (e) {
    // Go to next image
    transition_next = true
    last_image = current_image
    current_image += 1
    if (current_image > 3) {
        current_image = 1
    }
    update_image ()
})

button_back.addEventListener ("click", function (e) {
    // Go to last image
    transition_next = false
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