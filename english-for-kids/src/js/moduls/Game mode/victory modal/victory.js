import create from '../../../helpers/create'
import './victory-style.scss'

export default function Victory() {
  const img = create('img', 'victory-modal__container-img', null, null,
    ['src', './assets/img/Others/good-job.png'])
  const imgContainer = create('div', 'victory-modal__container', img)
  return create('div', 'victory-modal', imgContainer)
}
