import create from '../../helpers/create'
import { mainPage } from '../../helpers/constans'
import burgerButtonElement from './burger-button/burger-button'

export default class Header {
  constructor(categories) {
    const { burgerButton, burgerButtonContainer } = burgerButtonElement()
    const menuList = create('ul', 'header__menu-burger__box-list')
    const burgerMenu = create('div', 'header__menu-burger header__menu-burger-hide',
      create('div', 'header__menu-burger__box', menuList))
    const headerMenuContainer = create('div', 'header__menu', [burgerButtonContainer, burgerMenu])
    const menuItems = ['Main Page']

    this.gameModeButton = create('div', 'header__mode-button')
    this.element = create('div', 'header', [headerMenuContainer, this.gameModeButton])
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
      const el = create('li', 'header__menu-burger__box-list-item', i)
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

  activeMenuItem(item) {
    this.menuElements.forEach((i) => {
      i.element.classList.remove('header__menu-burger-active')
    })
    const activeItem = this.menuElements.find((i) => i.menuItem === item)
    activeItem.element.classList.add('header__menu-burger-active')
  }
}
