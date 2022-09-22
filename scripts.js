const cardBoxs = document.querySelectorAll('.card__box')

cardBoxs.forEach(cardBox => {
    cardBox.addEventListener('click', toggleCard)
})

function toggleCard(e) {
    const cardElement = e.target
    let boxContainer
    if (cardElement.classList[0] === 'card__box') {
        boxContainer = cardElement
    } else {
        boxContainer = cardElement.parentElement
    }
    const boxIcon = boxContainer.querySelector('img')
    const mainContainer = boxContainer.parentElement
    const otherBoxContainers = mainContainer.querySelectorAll("[aria-selected=true]")
    const otherBoxIcons = mainContainer.querySelector('img')
    console.log(boxIcon)
    otherBoxContainers.forEach(box => {
        box.setAttribute('aria-selected', false)
    })
    boxIcon.setAttribute('aria-selected', true)
    boxContainer.setAttribute('aria-selected', true)
}