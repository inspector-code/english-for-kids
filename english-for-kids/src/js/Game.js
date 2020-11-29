import create from './helpers/create'
import { categories, cards } from './data/cards'
import Card from './moduls/Card/Card'
import { cardType } from './helpers/constans'

export default class Game {
  constructor() {
    this.container = create('div', 'game-container',
      create('div', 'game-title', 'Train & Play'))
    this.gameField = create('div', 'game-field', null, this.container)

    this.categoriesCards = []
    this.gameCards = []
  }

  generateCard() {
    cards.forEach((i) => {
      const card = new Card(i, cardType.gameCard)
      this.gameCards.push(card)
      card.element.onclick = () => {
        const audio = new Audio(i.sound)
        audio.play()
      }
    })

    categories.forEach((i) => {
      const card = new Card(i, cardType.categoryCard)
      this.categoriesCards.push(card)
      card.element.onclick = () => {
        this.gameField.innerHTML = ''
        this.gameCards.forEach((item) => {
          if (item.cardCategory === card.cardCategory) {
            this.gameField.append(item.element)
          }
        })
      }
    })
  }

  init() {
    this.generateCard()
    console.log(this.gameCards)
    console.log(this.categoriesCards)
    this.categoriesCards.forEach((i) => this.gameField.append(i.element))
    document.body.append(this.container)
  }
}
