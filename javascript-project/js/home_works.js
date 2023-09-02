const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }
    else  {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}



// function moveBlock(block, steps) {
//     if (steps === 0) {
//         return;
//     } else {
//         const smallBlock = block.querySelector('.child_block');
//         const leftPosition = parseInt(getComputedStyle(smallBlock).left);
//         const maxWidth = block.clientWidth - smallBlock.clientWidth;
//
//         if (leftPosition < maxWidth) {
//             smallBlock.style.left = (leftPosition + 10) + 'px'
//
//             if (leftPosition + 10 < maxWidth) {
//                 setTimeout(function() {
//                     moveBlock(block, steps - 1)
//                 }, 100);
//             }
//         }
//     }
// }
//
// const largeBlock = document.querySelector('.parent_block');
// moveBlock(largeBlock, 50)
//

const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 448 && positionY < 448) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX > 0 && positionY === 448) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 0 && positionY > 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}

move()

const seconds = document.querySelector('#seconds')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const resume = document.querySelector('#resume')
let secondI = 0
let intervalId

function updateSeconds() {
    secondI++
    seconds.textContent = secondI
}

start.addEventListener("click", () => {
    if (!intervalId) {
        intervalId = setInterval(updateSeconds, 1000)
    }
})

stop.addEventListener("click", () => {
    clearInterval(intervalId)
})

reset.addEventListener("click", () => {
    clearInterval(intervalId)
    intervalId = null
    secondI = 0
    seconds.textContent = secondI
})

resume.addEventListener("click", () => {
    if (intervalId) {
        intervalId = setInterval(updateSeconds, 1000)
    }
})


