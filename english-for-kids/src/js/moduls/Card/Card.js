import create from '../../helpers/create'
import { cards } from '../../data/cards'
import { cardType } from '../../helpers/constans'

export default class Card {
  constructor({
    categoryName = null,
    categoryImage = null,
    category = null,
    word = null,
    translation = null,
    image = null,
  }, type) {
    this.cardType = type
    this.cardCategory = categoryName || category
    this.backSide = null

    const imageElement = create('div', 'card__img')
    imageElement.style.background = `center / cover no-repeat url(${categoryImage || image})`

    if (this.cardType === cardType.categoryCard) {
      this.categoryCardsCount = `${cards.filter((i) => i.category === this.cardCategory).length} cards`
    }

    if (this.cardType === cardType.gameCard) {
      this.rollButton = create('i', 'material-icons', 'autorenew')
      this.word = word
      this.translation = translation

      const backImg = imageElement.cloneNode(true)
      this.backSide = create('div', 'back', [
        backImg,
        create('div', 'card__info',
          create('div', 'card__info-title', this.translation)),
      ])
    }

    this.element = create('div', 'card', [
      create('div', 'front', [
        imageElement,
        create('div', 'card__info', [
          create('div', 'card__info-title', categoryName || this.word),
          create('div', 'card__info-item', this.categoryCardsCount || this.rollButton),
        ]),
      ]),
      this.backSide,
    ])
  }
}
