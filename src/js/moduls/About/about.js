import create from '../../helpers/create'
import './about-style.scss'

export default function About() {
  const link = create('a', 'about-container__link', '@Inspector-code', null,
    ['href', 'https://github.com/inspector-code'], ['target', '__blank'])
  const logo = create('img', 'about-container__logo', null, null,
    ['src', './assets/img/Others/rs_school_js.svg'])
  const logoLink = create('a', null, logo, null,
    ['href', 'https://rs.school/js/'], ['target', '__blank'])
  return create('div', 'about-container', [link, logoLink, '2020'])
}
