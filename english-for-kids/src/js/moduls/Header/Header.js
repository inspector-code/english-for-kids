import create from '../../helpers/create'
import { categories } from '../../data/cards'

export default function Header(appendCards) {
  const menuButton = create('div', 'header__menu-button')
  const gameModeButton = create('div', 'header__mode-button')
  const menuList = create('ul', 'header__menu-burger__box-list')
  const burgerMenu = create('div', 'header__menu-burger header__menu-burger-hide',
    create('div', 'header__menu-burger__box', menuList))
  const headerMenuContainer = create('div', 'header__menu', [menuButton, burgerMenu])
  const menuItems = ['Main Page']
  const menuElements = []

  categories.forEach((i) => menuItems.push(i.categoryName))

  function closeMenu() {
    burgerMenu.classList.toggle('header__menu-burger-hide')
    document.body.classList.toggle('scroll-lock')
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

  function activeMenuItem(item) {
    menuElements.forEach((i) => {
      i.element.classList.remove('header__menu-burger-active')
    })
    const activeItem = menuElements.find((i) => i.menuItem === item)
    activeItem.element.classList.add('header__menu-burger-active')
  }

  menuItems.forEach((i) => {
    const el = create('li', 'header__menu-burger__box-list-item', i)
    el.onclick = () => {
      appendCards(i)
      activeMenuItem(i)
      closeMenu()
    }
    menuElements.push({ menuItem: i, element: el })
    menuList.append(el)
  })

  menuButton.onclick = closeMenu
  activeMenuItem('Main Page')

  return create('div', 'header', [headerMenuContainer, gameModeButton])
}
