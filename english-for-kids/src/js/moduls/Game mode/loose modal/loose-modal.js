import create from '../../../helpers/create'
import './loose-style.scss'

export default function Loose(mistakes) {
  const img = create('img', 'loose-modal__container-img', null, null,
    ['src', './assets/img/Others/bad-job.png'])
  const text = create('div', 'loose-modal__text', `${mistakes} mistakes, try again!`)
  const imgContainer = create('div', 'loose-modal__container', img)
  return create('div', 'loose-modal', [imgContainer, text])
}
