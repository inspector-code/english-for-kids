import create from '../../helpers/create'
import { mainPage } from '../../helpers/constans'
import burgerButtonElement from './burger-button/burger-button'
import modeButtonElement from './mode-button/mode-button'

export default class Header {
  constructor(categories) {
    const { burgerButton, burgerButtonContainer } = burgerButtonElement()
    const { modeCheckbox, modeSwitcherElement } = modeButtonElement()
    const menuList = create('ul', 'header__menu-burger__box-list')
    const burgerMenu = create('div', 'header__menu-burger header__menu-burger-hide',
      create('div', 'header__menu-burger__box', menuList))
    const headerMenuContainer = create('div', 'header__menu', [burgerButtonContainer, burgerMenu])
    const menuItems = ['Main Page', 'Statistics']

    this.gameModeButton = modeCheckbox
    this.element = create('div', 'header', [headerMenuContainer, modeSwitcherElement])
    this.menuElements = []

    categories.forEach((i) => menuItems.push(i.categoryName))

    const closeMenu = () => {
      burgerButtonContainer.classList.toggle('header__menu-button-active')
      burgerMenu.classList.toggle('header__menu-burger-hide')
      document.body.classList.toggle('scroll-lock')
      burgerButton.classList.toggle('active')
      if (!document.onclick) {
        document.onclick = (e) => {
          if (e.target.className === 'header__menu-burger') {
            closeMenu()
            document.onclick = null
          }
        }
      } else {
        document.onclick = null
      }
    }

    menuItems.forEach((i) => {
      let currentIcon = null

      if (i === 'Main Page') {
        currentIcon = create('i', 'material-icons', 'home')
      } else if (i === 'Statistics') {
        currentIcon = create('i', 'material-icons', 'timeline')
      } else if (i === 'Action (set A)') {
        currentIcon = create('i', 'material-icons', 'flight')
      } else if (i === 'Action (set B)') {
        currentIcon = create('i', 'material-icons', 'directions_bike')
      } else if (i === 'Action (set C)') {
        currentIcon = create('i', 'material-icons', 'directions_car')
      } else if (i === 'Adjective') {
        currentIcon = create('i', 'material-icons', 'child_care')
      } else if (i === 'Animal (set A)') {
        currentIcon = create('i', 'material-icons', 'pets')
      } else if (i === 'Animal (set B)') {
        currentIcon = create('i', 'material-icons', 'bug_report')
      } else if (i === 'Clothes') {
        currentIcon = create('i', 'material-icons', 'accessibility')
      } else if (i === 'Emotion') {
        currentIcon = create('i', 'material-icons', 'sentiment_very_satisfied')
      }

      const el = create('li', 'header__menu-burger__box-list-item', [currentIcon, i])
      el.onclick = () => {
        this.activeMenuItem(i)
        closeMenu()
      }
      this.menuElements.push({ menuItem: i, element: el })
      menuList.append(el)
    })

    burgerButtonContainer.onclick = closeMenu
    this.activeMenuItem(mainPage)
  }

  activeMenuItem = (item) => {
    this.menuElements.forEach((i) => {
      i.element.classList.remove('header__menu-burger-active')
    })
    const activeItem = this.menuElements.find((i) => i.menuItem === item)
    activeItem.element.classList.add('header__menu-burger-active')
  }
}
