import create from '../../helpers/create'
import { cards } from '../../data/cards'
import { cardType, gameType } from '../../helpers/constans'

export default class Card {
  constructor({
    categoryName = null,
    categoryImage = null,
    category = null,
    word = null,
    translation = null,
    image = null,
    sound = null,
  }, type) {
    this.gameMode = gameType.train
    this.cardType = type
    this.cardCategory = categoryName || category
    let backSide = null
    let rollButton = null
    this.imageElement = create('div', 'card__img')
    this.imageElement.style.background = `center / cover no-repeat url(${categoryImage || image})`

    if (this.cardType === cardType.categoryCard) {
      this.categoryCardsCount = `${cards.filter((i) => i.category === this.cardCategory).length} cards`
    }

    if (this.cardType === cardType.gameCard) {
      rollButton = create('i', 'material-icons', 'autorenew')
      this.word = word
      this.translation = translation
      this.soundUrl = sound

      const backImg = this.imageElement.cloneNode(true)
      backSide = create('div', 'back', [
        backImg,
        create('div', 'card__info',
          create('div', 'card__info-title', this.translation)),
      ])
    }

    const frontSide = create('div', 'front', [
      this.imageElement,
      create('div', 'card__info', [
        create('div', 'card__info-title', categoryName || this.word),
        create('div', 'card__info-item', this.categoryCardsCount || rollButton),
      ]),
    ])
    const card = create('div', 'card', [frontSide, backSide])
    this.element = create('div', 'card-container', card)

    if (this.cardType === cardType.gameCard) {
      frontSide.addEventListener('click', () => {
        const audio = new Audio(this.soundUrl)
        if (this.gameMode === gameType.train) {
          audio.play()
        }
      })

      if (rollButton) {
        rollButton.onclick = (e) => {
          e.stopPropagation()
          card.classList.add('card-flip')
        }
      }

      this.element.onmouseleave = () => {
        card.classList.remove('card-flip')
      }
    }
  }

  changeGameMode() {
    if (this.gameMode === gameType.train) {
      this.gameMode = gameType.play
    } else {
      this.gameMode = gameType.train
    }
  }

  hideControls() {
    this.imageElement.classList.toggle('card__img-hide')
  }
}
