const categories = [
  {
    categoryName: 'Action (set A)',
    categoryImage: './assets/img/Categories/actionA.jpg',
  },
  {
    categoryName: 'Action (set B)',
    categoryImage: './assets/img/Categories/actionB.jpg',
  },
  {
    categoryName: 'Action (set C)',
    categoryImage: './assets/img/Categories/actionC.jpg',
  },
  {
    categoryName: 'Adjective',
    categoryImage: './assets/img/Categories/adjective.jpg',
  },
  {
    categoryName: 'Animal (set A)',
    categoryImage: './assets/img/Categories/animalA.jpg',
  },
  {
    categoryName: 'Animal (set B)',
    categoryImage: './assets/img/Categories/animalB.jpg',
  },
  {
    categoryName: 'Clothes',
    categoryImage: './assets/img/Categories/clothes.jpg',
  },
  {
    categoryName: 'Emotion',
    categoryImage: './assets/img/Categories/emotion.jpg',
  },
]

const cards = [
  {
    category: 'Action (set A)',
    word: 'Cry',
    translation: 'Плакать',
    image: './assets/img/Action_A/cry.png',
    sound: './assets/sounds/Action_A/cry.mp3',
  },
  {
    category: 'Action (set A)',
    word: 'Dance',
    translation: 'Танцевать',
    image: './assets/img/Action_A/dance.png',
    sound: './assets/sounds/Action_A/dance.mp3',
  },
  {
    category: 'Action (set A)',
    word: 'Dive',
    translation: 'Нырять',
    image: './assets/img/Action_A/dive.png',
    sound: './assets/sounds/Action_A/dive.mp3',
  },
  {
    category: 'Action (set A)',
    word: 'Draw',
    translation: 'Рисовать',
    image: './assets/img/Action_A/draw.png',
    sound: './assets/sounds/Action_A/draw.mp3',
  },
  {
    category: 'Action (set A)',
    word: 'Fish',
    translation: 'Ловить рыбу',
    image: './assets/img/Action_A/fish.png',
    sound: './assets/sounds/Action_A/fish.mp3',
  },
  {
    category: 'Action (set A)',
    word: 'Fly',
    translation: 'Летать',
    image: './assets/img/Action_A/fly.png',
    sound: './assets/sounds/Action_A/fly.mp3',
  },
  {
    category: 'Action (set A)',
    word: 'Hug',
    translation: 'Объятие',
    image: './assets/img/Action_A/hug.png',
    sound: './assets/sounds/Action_A/hug.mp3',
  },
  {
    category: 'Action (set A)',
    word: 'Jump',
    translation: 'Прыгать',
    image: './assets/img/Action_A/jump.png',
    sound: './assets/sounds/Action_A/jump.mp3',
  },

  {
    category: 'Action (set B)',
    word: 'Open',
    translation: 'Открывать',
    image: './assets/img/Action_B/open.png',
    sound: './assets/sounds/Action_B/open.mp3',
  },
  {
    category: 'Action (set B)',
    word: 'Play',
    translation: 'Играть',
    image: './assets/img/Action_B/play.png',
    sound: './assets/sounds/Action_B/play.mp3',
  },
  {
    category: 'Action (set B)',
    word: 'Point',
    translation: 'Указывать',
    image: './assets/img/Action_B/point.png',
    sound: './assets/sounds/Action_B/point.mp3',
  },
  {
    category: 'Action (set B)',
    word: 'Ride',
    translation: 'Ездить',
    image: './assets/img/Action_B/ride.png',
    sound: './assets/sounds/Action_B/ride.mp3',
  },
  {
    category: 'Action (set B)',
    word: 'Run',
    translation: 'Бегать',
    image: './assets/img/Action_B/run.png',
    sound: './assets/sounds/Action_B/run.mp3',
  },
  {
    category: 'Action (set B)',
    word: 'Sing',
    translation: 'Петь',
    image: './assets/img/Action_B/sing.png',
    sound: './assets/sounds/Action_B/sing.mp3',
  },
  {
    category: 'Action (set B)',
    word: 'Skip',
    translation: 'Пропускать, прыгать',
    image: './assets/img/Action_B/skip.png',
    sound: './assets/sounds/Action_B/skip.mp3',
  },
  {
    category: 'Action (set B)',
    word: 'Swim',
    translation: 'Плавать',
    image: './assets/img/Action_B/swim.png',
    sound: './assets/sounds/Action_B/swim.mp3',
  },

  {
    category: 'Action (set C)',
    word: 'Argue',
    translation: 'Спорить',
    image: './assets/img/Action_C/argue.png',
    sound: './assets/sounds/Action_C/argue.mp3',
  },
  {
    category: 'Action (set C)',
    word: 'Build',
    translation: 'Строить',
    image: './assets/img/Action_C/build.png',
    sound: './assets/sounds/Action_C/build.mp3',
  },
  {
    category: 'Action (set C)',
    word: 'Carry',
    translation: 'Нести',
    image: './assets/img/Action_C/carry.png',
    sound: './assets/sounds/Action_C/carry.mp3',
  },
  {
    category: 'Action (set C)',
    word: 'Catch',
    translation: 'Ловить',
    image: './assets/img/Action_C/catch.png',
    sound: './assets/sounds/Action_C/catch.mp3',
  },
  {
    category: 'Action (set C)',
    word: 'Drive',
    translation: 'Водить',
    image: './assets/img/Action_C/drive.png',
    sound: './assets/sounds/Action_C/drive.mp3',
  },
  {
    category: 'Action (set C)',
    word: 'Drop',
    translation: 'Падать, бросать',
    image: './assets/img/Action_C/drop.png',
    sound: './assets/sounds/Action_C/drop.mp3',
  },
  {
    category: 'Action (set C)',
    word: 'Look',
    translation: 'Смотреть',
    image: './assets/img/Action_C/look.png',
    sound: './assets/sounds/Action_C/look.mp3',
  },
  {
    category: 'Action (set C)',
    word: 'Push',
    translation: 'Толкать',
    image: './assets/img/Action_C/push.png',
    sound: './assets/sounds/Action_C/push.mp3',
  },

  {
    category: 'Adjective',
    word: 'Big',
    translation: 'Большой',
    image: './assets/img/Adjective/big.png',
    sound: './assets/sounds/Adjective/big.mp3',
  },
  {
    category: 'Adjective',
    word: 'Fast',
    translation: 'Быстрый',
    image: './assets/img/Adjective/fast.png',
    sound: './assets/sounds/Adjective/fast.mp3',
  },
  {
    category: 'Adjective',
    word: 'Friendly',
    translation: 'Дружелюбный',
    image: './assets/img/Adjective/friendly.png',
    sound: './assets/sounds/Adjective/friendly.mp3',
  },
  {
    category: 'Adjective',
    word: 'Old',
    translation: 'Старый',
    image: './assets/img/Adjective/old.png',
    sound: './assets/sounds/Adjective/old.mp3',
  },
  {
    category: 'Adjective',
    word: 'Slow',
    translation: 'Медленный',
    image: './assets/img/Adjective/slow.png',
    sound: './assets/sounds/Adjective/slow.mp3',
  },
  {
    category: 'Adjective',
    word: 'Small',
    translation: 'Маленький',
    image: './assets/img/Adjective/small.png',
    sound: './assets/sounds/Adjective/small.mp3',
  },
  {
    category: 'Adjective',
    word: 'Unfriendly',
    translation: 'Недружелюбный',
    image: './assets/img/Adjective/unfriendly.png',
    sound: './assets/sounds/Adjective/unfriendly.mp3',
  },
  {
    category: 'Adjective',
    word: 'Young',
    translation: 'Молодой',
    image: './assets/img/Adjective/young.png',
    sound: './assets/sounds/Adjective/young.mp3',
  },

  {
    category: 'Animal (set A)',
    word: 'Cat',
    translation: 'Кот',
    image: './assets/img/Animal_A/cat.png',
    sound: './assets/sounds/Animal_A/cat.mp3',
  },
  {
    category: 'Animal (set A)',
    word: 'Chick',
    translation: 'Цыпленок',
    image: './assets/img/Animal_A/chick.png',
    sound: './assets/sounds/Animal_A/chick.mp3',
  },
  {
    category: 'Animal (set A)',
    word: 'Chicken',
    translation: 'Курица',
    image: './assets/img/Animal_A/chicken.png',
    sound: './assets/sounds/Animal_A/chicken.mp3',
  },
  {
    category: 'Animal (set A)',
    word: 'Dog',
    translation: 'Собака',
    image: './assets/img/Animal_A/dog.png',
    sound: './assets/sounds/Animal_A/dog.mp3',
  },
  {
    category: 'Animal (set A)',
    word: 'Horse',
    translation: 'Лошадь',
    image: './assets/img/Animal_A/horse.png',
    sound: './assets/sounds/Animal_A/horse.mp3',
  },
  {
    category: 'Animal (set A)',
    word: 'Pig',
    translation: 'Свинья',
    image: './assets/img/Animal_A/pig.png',
    sound: './assets/sounds/Animal_A/pig.mp3',
  },
  {
    category: 'Animal (set A)',
    word: 'Rabbit',
    translation: 'Кролик',
    image: './assets/img/Animal_A/rabbit.png',
    sound: './assets/sounds/Animal_A/rabbit.mp3',
  },
  {
    category: 'Animal (set A)',
    word: 'Sheep',
    translation: 'Овца',
    image: './assets/img/Animal_A/sheep.png',
    sound: './assets/sounds/Animal_A/sheep.mp3',
  },

  {
    category: 'Animal (set B)',
    word: 'Bird',
    translation: 'Птица',
    image: './assets/img/Animal_B/bird.png',
    sound: './assets/sounds/Animal_B/bird.mp3',
  },
  {
    category: 'Animal (set B)',
    word: 'Dolphin',
    translation: 'Дельфин',
    image: './assets/img/Animal_B/dolphin.png',
    sound: './assets/sounds/Animal_B/dolphin.mp3',
  },
  {
    category: 'Animal (set B)',
    word: 'Raccoon',
    translation: 'Енот',
    image: './assets/img/Animal_B/raccoon.png',
    sound: './assets/sounds/Animal_B/raccoon.mp3',
  },
  {
    category: 'Animal (set B)',
    word: 'Frog',
    translation: 'Лягушка',
    image: './assets/img/Animal_B/frog.png',
    sound: './assets/sounds/Animal_B/frog.mp3',
  },
  {
    category: 'Animal (set B)',
    word: 'Giraffe',
    translation: 'Жираф',
    image: './assets/img/Animal_B/giraffe.png',
    sound: './assets/sounds/Animal_B/giraffe.mp3',
  },
  {
    category: 'Animal (set B)',
    word: 'Lion',
    translation: 'Лев',
    image: './assets/img/Animal_B/lion.png',
    sound: './assets/sounds/Animal_B/lion.mp3',
  },
  {
    category: 'Animal (set B)',
    word: 'Mouse',
    translation: 'Мышь',
    image: './assets/img/Animal_B/mouse.png',
    sound: './assets/sounds/Animal_B/mouse.mp3',
  },
  {
    category: 'Animal (set B)',
    word: 'Turtle',
    translation: 'Черепаха',
    image: './assets/img/Animal_B/turtle.png',
    sound: './assets/sounds/Animal_B/turtle.mp3',
  },

  {
    category: 'Clothes',
    word: 'Blouse',
    translation: 'Блузка',
    image: './assets/img/Clothes/blouse.png',
    sound: './assets/sounds/Clothes/blouse.mp3',
  },
  {
    category: 'Clothes',
    word: 'Boot',
    translation: 'Ботинок',
    image: './assets/img/Clothes/boot.png',
    sound: './assets/sounds/Clothes/boot.mp3',
  },
  {
    category: 'Clothes',
    word: 'Coat',
    translation: 'Пальто',
    image: './assets/img/Clothes/coat.png',
    sound: './assets/sounds/Clothes/coat.mp3',
  },
  {
    category: 'Clothes',
    word: 'Dress',
    translation: 'Платье',
    image: './assets/img/Clothes/dress.png',
    sound: './assets/sounds/Clothes/dress.mp3',
  },
  {
    category: 'Clothes',
    word: 'Pants',
    translation: 'Брюки',
    image: './assets/img/Clothes/pants.png',
    sound: './assets/sounds/Clothes/pants.mp3',
  },
  {
    category: 'Clothes',
    word: 'Shirt',
    translation: 'Рубашка',
    image: './assets/img/Clothes/shirt.png',
    sound: './assets/sounds/Clothes/shirt.mp3',
  },
  {
    category: 'Clothes',
    word: 'Shoe',
    translation: 'Туфли',
    image: './assets/img/Clothes/shoe.png',
    sound: './assets/sounds/Clothes/shoe.mp3',
  },
  {
    category: 'Clothes',
    word: 'Skirt',
    translation: 'Юбка',
    image: './assets/img/Clothes/skirt.png',
    sound: './assets/sounds/Clothes/skirt.mp3',
  },

  {
    category: 'Emotion',
    word: 'Angry',
    translation: 'Сердитый',
    image: './assets/img/Emotion/angry.png',
    sound: './assets/sounds/Emotion/angry.mp3',
  },
  {
    category: 'Emotion',
    word: 'Happy',
    translation: 'Счастливый',
    image: './assets/img/Emotion/happy.png',
    sound: './assets/sounds/Emotion/happy.mp3',
  },
  {
    category: 'Emotion',
    word: 'Laugh',
    translation: 'Смех',
    image: './assets/img/Emotion/laugh.png',
    sound: './assets/sounds/Emotion/laugh.mp3',
  },
  {
    category: 'Emotion',
    word: 'Sad',
    translation: 'Печальный',
    image: './assets/img/Emotion/sad.png',
    sound: './assets/sounds/Emotion/sad.mp3',
  },
  {
    category: 'Emotion',
    word: 'Scared',
    translation: 'Испуганный',
    image: './assets/img/Emotion/scared.png',
    sound: './assets/sounds/Emotion/scared.mp3',
  },
  {
    category: 'Emotion',
    word: 'Smile',
    translation: 'Улыбка',
    image: './assets/img/Emotion/smile.png',
    sound: './assets/sounds/Emotion/smile.mp3',
  },
  {
    category: 'Emotion',
    word: 'Surprised',
    translation: 'Удивлен',
    image: './assets/img/Emotion/surprised.png',
    sound: './assets/sounds/Emotion/surprised.mp3',
  },
  {
    category: 'Emotion',
    word: 'Tired',
    translation: 'Устал',
    image: './assets/img/Emotion/tired.png',
    sound: './assets/sounds/Emotion/tired.mp3',
  },
]

export { categories, cards }
