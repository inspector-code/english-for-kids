import create from './helpers/create'
import { categories, cards } from './data/cards'
import Card from './moduls/Card/Card'
import {
  cardType,
  mainPage,
  gameType,
  statistics,
} from './helpers/constans'
import Header from './moduls/Header/Header'
import Footer from './moduls/Footer/Footer'
import GameMode from './moduls/Game mode/Game-mode'
import animatedAppend from './helpers/animated-append'
import Statistics from './moduls/Statistics/Statistics'
import About from './moduls/About/about'

export default class Game {
  constructor() {
    this.stat = new Statistics(this.appendCards)
    this.appendedGameCards = []
    this.categoriesCards = []
    this.gameCards = []
    this.newGame = null
    this.about = About()
    this.header = new Header(categories)
    this.gameField = create('div', 'game-field')
    this.footer = Footer()
    this.menuItems = this.header.menuElements
    this.container = create('div', 'game-container',
      [this.header.element, this.gameField])

    cards.forEach((i) => {
      const card = new Card(i, cardType.gameCard, this.stat.updateStat)
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
        animatedAppend(this.footer.footerElement, this.container, 'footer-hide', 50)
      } else {
        this.footer.footerElement.remove()
      }

      if (this.newGame) {
        this.newGame.clear()
      }
    }

    const gameButtonHandler = () => {
      this.newGame = new GameMode(this.appendedGameCards, this.footer,
        gameButtonHandler, this.appendCards, this.stat.updateStat, this.header.activeMenuItem)
      this.footer.buttonText.innerHTML = '<i class="material-icons md-36">replay</i>'
      this.footer.startGameButton.classList.add('button__circle')
      this.newGame.sayWord()
      this.footer.startGameButton.onclick = () => {
        this.newGame.sayWord()
      }
    }

    this.footer.startGameButton.onclick = gameButtonHandler
  }

  appendCards = (category) => {
    this.gameField.innerHTML = ''
    this.appendedGameCards = []
    this.footer.footerElement.remove()
    if (this.newGame) {
      this.newGame.clear()
    }

    if (!category || (category === mainPage)) {
      this.categoriesCards.forEach((i) => {
        animatedAppend(i.element, this.gameField, 'card-container-hide', 50)
      })
    } else if (category === statistics) {
      this.gameField.append(this.stat.stat)
    } else if (Array.isArray(category)) {
      if (category.length === 0) {
        const noCards = create('div', 'no-dif-cards', 'No difficult words')
        animatedAppend(noCards, this.gameField, 'card-container-hide', 50)
      }
      category.forEach((el) => {
        const findElement = this.gameCards.find((w) => w.word === el)
        this.appendedGameCards.push(findElement)
        animatedAppend(findElement.element, this.gameField, 'card-container-hide', 50)
        if (this.gameCards.some((i) => i.gameMode === gameType.play)) {
          animatedAppend(this.footer.footerElement, this.container, 'footer-hide', 50)
        }
      })
      console.log(this.appendedGameCards)
    } else {
      this.gameCards.forEach((item) => {
        if (item.cardCategory === category) {
          this.appendedGameCards.push(item)
          animatedAppend(item.element, this.gameField, 'card-container-hide', 50)
          if (this.gameCards.some((i) => i.gameMode === gameType.play)) {
            animatedAppend(this.footer.footerElement, this.container, 'footer-hide', 50)
          }
        }
      })
    }
  }

  init() {
    this.appendCards()
    document.body.append(this.container, this.about)
  }
}
