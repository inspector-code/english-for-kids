import './button-style.scss'
import create from '../../../helpers/create'

export default function modeButtonElement() {
  const input = create('input', 'Switcher__checkbox sr-only', null, null,
    ['id', 'io'], ['type', 'checkbox'], ['checked', 'checked'])
  const swFirst = create('div', 'Switcher__trigger', null, null, ['val', 'PLAY'])
  const swSecond = create('div', 'Switcher__trigger', null, null, ['val', 'TRAIN'])
  const label = create('label', 'Switcher', [swFirst, swSecond], null, ['for', 'io'])
  const box = create('div', 'box', [input, label])
  const element = create('div', 'header__mode-button', box)

  return { modeCheckbox: input, modeSwitcherElement: element }
}
