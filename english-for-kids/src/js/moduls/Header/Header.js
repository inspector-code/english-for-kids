import create from '../../helpers/create'

export default function Header(appendCards) {
  const menuButton = create('div', 'header__menu-button')
  const gameModeButton = create('div', 'header__mode-button')
  const menuList = create('ul', 'header__menu-burger__box-list')
  const menuItems = [
    'Main Page',
    'Action (set A)',
    'Action (set B)',
    'Action (set C)',
    'Adjective',
    'Animal (set A)',
    'Animal (set B)',
    'Clothes',
    'Emotion',
  ]

  menuItems.forEach((i) => {
    const el = create('li', 'header__menu-burger__box-list-item', i)
    el.onclick = () => appendCards(i)
    menuList.append(el)
  })

  const burgerMenu = create('div', 'header__menu-burger header__menu-burger-hide',
    create('div', 'header__menu-burger__box', menuList))
  const headerMenuContainer = create('div', 'header__menu', menuButton)

  menuButton.onclick = () => {
    headerMenuContainer.append(burgerMenu)
  }

  return create('div', 'header', [headerMenuContainer, gameModeButton])
}
