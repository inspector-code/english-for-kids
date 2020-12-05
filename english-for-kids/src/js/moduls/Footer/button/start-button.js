import create from '../../../helpers/create'
import './button-style.scss'

export default function startButton() {
  const tick = create('div', 'tick')
  const buttonText = create('div', 'footer__buttons-start-container', tick)
  const button = create('div', 'footer__buttons-start', buttonText)

  buttonText.innerHTML = 'Start game'

  return { startGameButton: button, buttonText }
}
