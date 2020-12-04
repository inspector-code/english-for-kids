import create from './helpers/create'
import { categories, cards } from './data/cards'
import Card from './moduls/Card/Card'
import { cardType, mainPage, gameType } from './helpers/constans'
import Header from './moduls/Header/Header'
import Footer from './moduls/Footer/Footer'

export default class Game {
  constructor() {
    this.appendedGameCards = []
    this.categoriesCards = []
    this.gameCards = []
    this.header = new Header(categories)
    this.gameField = create('div', 'game-field')
    this.footer = Footer()
    this.menuItems = this.header.menuElements
    this.container = create('div', 'game-container',
      [this.header.element, this.gameField])

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

    this.header.gameModeButton.onchange = () => {
      this.gameCards.forEach((card) => {
        card.changeGameMode()
        card.hideControls()
      })

      if (this.appendedGameCards.length
        && this.gameCards.some((i) => i.gameMode === gameType.play)) {
        this.container.append(this.footer)
      } else {
        this.footer.remove()
      }
    }
  }

  appendCards = (category) => {
    this.gameField.innerHTML = ''
    this.appendedGameCards = []
    this.footer.remove()
    if (!category || (category === mainPage)) {
      this.categoriesCards.forEach((i) => this.gameField.append(i.element))
    } else {
      this.gameCards.forEach((item) => {
        if (item.cardCategory === category) {
          this.appendedGameCards.push(item)
          this.gameField.append(item.element)
          if (this.gameCards.some((i) => i.gameMode === gameType.play)) {
            this.container.append(this.footer)
          }
        }
      })
    }
  }

  init() {
    this.appendCards()
    document.body.append(this.container)
  }
}
