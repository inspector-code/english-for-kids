import create from '../../../helpers/create'
import './button-style.scss'

export default function burgerButtonElement() {
  const burger = create('div', 'burger', [
    create('div', 'rect'),
    create('div', 'rect'),
    create('div', 'rect'),
  ])

  const element = create('div', 'header__menu-button', burger)
  element.insertAdjacentHTML('afterbegin', `<svg class="filter" version="1.1">
        <defs>
            <filter id="gooeyness">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                    result="gooeyness" />
                <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
            </filter>
        </defs>
    </svg>`)

  return { burgerButton: burger, burgerButtonContainer: element }
}
