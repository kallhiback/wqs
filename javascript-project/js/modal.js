// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) closeModal()
}

let modalShown = false

function handleClick() {
    if (!modalShown) {
        window.addEventListener("scroll", async function () {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                modalShown = true
                openModal()
                window.removeEventListener("scroll", arguments.callee)
            }
        })
    }
}

handleClick()

setTimeout(() => openModal(), 10000)

// POST DATA

const form = document.querySelector('form')

const postData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: data
        })
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response
    } catch (error) {
        console.error('Error:', error)
    }
}

const bindPostData = (form) => {
    form.onsubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const obj = {}
        formData.forEach((item, key) => {
            obj[key] = item
        })
        const json = JSON.stringify(obj)
        const url = window.location.pathname === 'javascript-project/index.html' ? 'server.php' : '../server.php'
        await postData(url, json)
    }
}

bindPostData(form)