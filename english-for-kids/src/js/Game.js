import create from './helpers/create'
import { categories, cards } from './data/cards'
import Card from './moduls/Card/Card'
import { cardType, mainPage } from './helpers/constans'
import Header from './moduls/Header/Header'

export default class Game {
  constructor() {
    this.categoriesCards = []
    this.gameCards = []
    this.header = new Header(categories)
    console.log(this.header)
    this.menuItems = this.header.menuElements
    this.container = create('div', 'game-container', [
      this.header.element,
      create('div', 'game-title', 'Train & Play'),
    ])
    this.gameField = create('div', 'game-field', null, this.container)

    cards.forEach((i) => {
      const card = new Card(i, cardType.gameCard)
      this.gameCards.push(card)
    })

    categories.forEach((i) => {
      const card = new Card(i, cardType.categoryCard)
      this.categoriesCards.push(card)
      card.element.onclick = () => {
        this.header.activeMenuItem(card.cardCategory)
        this.appendCards(card.cardCategory)
      }
    })

    this.menuItems.forEach((i) => {
      const { menuItem, element } = i
      element.addEventListener('click', () => {
        this.appendCards(menuItem)
      })
    })

    this.header.gameModeButton.onclick = () => {
      this.gameCards.forEach((i) => {
        i.changeGameMode()
        i.hideControls()
      })
    }
  }

  appendCards = (category) => {
    this.gameField.innerHTML = ''
    if (!category || (category === mainPage)) {
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
    console.log(this.gameCards)
    console.log(this.categoriesCards)
    this.appendCards()
    document.body.append(this.container)
  }
}
