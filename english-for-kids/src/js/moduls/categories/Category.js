import create from '../../helpers/create'

export default function Category({ name, image }, gameField) {
  const categoryCard = create('div', 'category-card', [
    create('div', 'category-card__img',
      create('img', 'category-card__img-item', null, null, ['src', image])),
    create('div', 'category-card__info', [
      create('div', 'category-card__info-title', name),
      create('div', 'category-card__info-control'),
    ]),
  ])

  categoryCard.onclick = () => alert(name)
  return categoryCard
}
