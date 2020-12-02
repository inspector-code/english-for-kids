import create from '../../../helpers/create'
import './button-style.scss'

export default function burgerButtonElement() {
  const burger = create('div', 'burger', [
    create('div', 'rect'),
    create('div', 'rect'),
    create('div', 'rect'),
  ])

  const element = create('div', 'header__menu-button', burger)
  element.insertAdjacentHTML('afterbegin',
    '<svg class="filter" version="1.1">\n'
    + '  <defs>\n'
    + '    <filter id="gooeyness">\n'
    + '      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />\n'
    + '      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />\n'
    + '      <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />\n'
    + '    </filter>\n'
    + '  </defs>\n'
    + '</svg>')

  return { burgerButton: burger, burgerButtonContainer: element }
}
