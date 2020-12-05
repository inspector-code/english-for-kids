import create from '../../helpers/create'
import startButton from './button/start-button'

export default function Footer() {
  const { startGameButton, buttonText } = startButton()
  const footerButtons = create('div', 'footer__buttons', startGameButton)
  const footerIcons = create('div', 'footer__icons')
  const footerElement = create('div', 'footer', [footerButtons, footerIcons])

  return {
    startGameButton,
    buttonText,
    footerButtons,
    footerElement,
    footerIcons,
  }
}
