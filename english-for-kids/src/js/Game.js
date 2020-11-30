import create from './helpers/create'
import { categories, cards } from './data/cards'
import Card from './moduls/Card/Card'
import { cardType } from './helpers/constans'
import Header from './moduls/Header/Header'

export default class Game {
  constructor() {
    this.container = create('div', 'game-container', [
      Header(this.appendCards),
      create('div', 'game-title', 'Train & Play'),
    ])
    this.gameField = create('div', 'game-field', null, this.container)

    this.categoriesCards = []
    this.gameCards = []
  }

  generateCard() {
    cards.forEach((i) => {
      const card = new Card(i, cardType.gameCard)
      this.gameCards.push(card)
    })

    categories.forEach((i) => {
      const card = new Card(i, cardType.categoryCard)
      this.categoriesCards.push(card)
      card.element.onclick = () => {
        this.appendCards(card.cardCategory)
      }
    })
  }

  appendCards = (category) => {
    this.gameField.innerHTML = ''
    if (!category || (category === 'Main Page')) {
      this.categoriesCards.forEach((i) => this.gameField.append(i.element))
    } else {
      this.gameCards.forEach((item) => {
        if (item.cardCategory === category) {
          this.gameField.append(item.element)
        }
      })
    }
  }

  init() {
    this.generateCard()
    console.log(this.gameCards)
    console.log(this.categoriesCards)
    this.appendCards()
    document.body.append(this.container)
  }
}
