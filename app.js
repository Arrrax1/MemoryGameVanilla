// array of src
let srcArray=['bolt','bomb','coin','heart','jewel','potion','shield','sword']

// init board grid
function initBoard() {
    let tempSrc = srcArray // use splice
    for (let index = 0; index < 20; index++) {
        let image_index = Math.floor(Math.random()*(tempSrc.length-1))
        // card container
        let card = document.createElement('div')
        card.classList.add('card')
        // card back side
        let card_back = document.createElement('div')
        card_back.classList.add('card_back')
        let card_back_img = document.createElement('img')
        card_back_img.src = 'assets/card.png'
        // card front side
        let card_front = document.createElement('div')
        card_front.classList.add('card_front')
        let card_front_img = document.createElement('img')
        card_front_img.src = `assets/cards/${tempSrc[image_index]}.png`
        // Append
        card_back.append(card_back_img)
        card_front.append(card_front_img)
        card.append(card_back)
        card.append(card_front)
        card.id = 'index' + index
        //
        document.querySelector('.board').append(card)
    }
}
initBoard()

// flip test
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click',()=>{
        card.classList.add('flip')
        setTimeout(() => {
            card.classList.remove('flip')
        }, 1000);
    })
});