import './star.scss'
import create from '../../../helpers/create'

export default function Star(color) {
  return create('img', 'star', null, null,
    ['src', `./assets/icons/${color === 'grey' ? 'star-grey' : 'star-yellow'}.svg`])
}
