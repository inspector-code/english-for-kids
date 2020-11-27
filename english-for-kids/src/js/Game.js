import create from './helpers/create'
import { categories, cards } from './data/cards'
import Category from './moduls/categories/Category'

export default class Game {
  constructor() {
    this.container = create('div', 'game-container')
    this.gameTitle = create('div', 'game-title', null, this.container)
    this.gameField = create('div', 'game-field', null, this.container)
  }

  init() {
    categories.forEach((i) => this.gameField.append(Category(i)))
    document.body.append(this.container)
  }
}
