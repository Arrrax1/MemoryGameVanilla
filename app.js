// array of src //two of each element
let srcArray=['bolt','bomb','coin','heart','jewel','potion','shield','sword','bolt','bomb','coin','heart','jewel','potion','shield','sword']

// init board grid
function initBoard() {
    let tempSrc = srcArray // use splice
    for (let index = 0; index < 16; index++) {
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
        // remove inserted card img
        tempSrc.splice(image_index,1)
        document.querySelector('.board').append(card)
    }
}
initBoard()

// card flip logic
let card1=''
let card2=''
// flip test
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click',()=>{
        if (card1=='' && !card.classList.contains('flip')) { // check card is not already flipped, it causes reflip of already matched cards
            card1=card
            card.classList.add('flip')
        } else if(card1!=card && card2=='' && !card.classList.contains('flip')){ // check card is not already flipped
            card2=card
            card.classList.add('flip')
            if (card1.lastChild.firstChild.src==card2.lastChild.firstChild.src) {
                console.log('match')
                card1=''
                card2=''
            }else{
                setTimeout(() => {
                    card1.classList.remove('flip')
                    card2.classList.remove('flip')
                    card1=''
                    card2=''
                }, 1000);
            }
        }
    })
});