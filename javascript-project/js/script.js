// script.js

const cardContainer = document.querySelector('.card-container')

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error:', error)
        return []
    }
}

const renderCards = async () => {
    const data = await fetchData()

    data.forEach((item) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const title = document.createElement('h2')
        title.classList.add('h2')
        title.textContent = item.title

        const description = document.createElement('p')
        description.textContent = item.body

        const image = document.createElement('img')
        image.style.width = '300px'
        image.src = 'https://sticker-collection.com/stickers/plain/Durak_by_S/512/f3606456-4782-43e6-930a-2a7b607eb22bfile_2753110.webp' // Замените на URL вашей картинки

        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(description)
        cardContainer.appendChild(card)
    })
}

renderCards()
