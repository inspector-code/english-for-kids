import create from '../../helpers/create'

export default function Footer() {
  const startButton = create('div', 'footer__buttons-start')
  const repeatButton = create('div', 'footer__buttons-repeat')
  const footerButtons = create('div', 'footer__buttons', [startButton, repeatButton])
  const footerIcons = create('div', 'footer__icons')
  const footer = create('div', 'footer', [footerButtons, footerIcons])

  return footer
}
