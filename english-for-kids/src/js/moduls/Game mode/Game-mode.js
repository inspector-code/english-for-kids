import Star from './star element/star'
import shuffle from '../../helpers/array-shuffle'
import { starColor, soundType } from '../../helpers/constans'
import Victory from './victory modal/victory'
import Loose from './loose modal/loose-modal'
import animatedAppend from '../../helpers/animated-append'

export default class GameMode {
  constructor(gameCards, { footerIcons, startGameButton, buttonText },
    gameButtonHandler, appendCards) {
    this.gameCards = shuffle(gameCards)
    this.wordNumber = 0
    this.starField = footerIcons
    this.startButton = startGameButton
    this.startButtonText = buttonText
    this.startButtonHandler = gameButtonHandler
    this.mistakesCounter = 0
    this.victoryModal = Victory()
    this.looseModal = null

    const playSound = (type) => {
      const soundName = (type === soundType.fail) ? soundType.fail : soundType.bingo
      const audio = new Audio(`./assets/sounds/Game/${soundName}.mp3`)
      audio.play()
    }

    this.clickHandler = (e) => {
      if (this.wordNumber + 2 > this.gameCards.length) {
        this.starField.append(Star(starColor.yellow))
        e.target.classList.add('card__img-inactive')
        document.body.classList.add('scroll-lock')

        if (this.mistakesCounter) {
          this.looseModal = Loose(this.mistakesCounter)
          const looseSound = new Audio('./assets/sounds/Game/loose.mp3')
          looseSound.play()
          animatedAppend(this.looseModal, document.body, 'loose-modal-hide', 50)
        } else {
          const victorySound = new Audio('./assets/sounds/Game/victory.mp3')
          victorySound.play()
          animatedAppend(this.victoryModal, document.body, 'victory-modal-hide', 50)
        }

        setTimeout(() => {
          this.clear()
          appendCards()
        }, 10000)
        return
      }

      if (e.target.dataset.word === this.gameCards[this.wordNumber].word) {
        this.starField.append(Star(starColor.yellow))
        e.target.classList.add('card__img-inactive')
        e.target.removeEventListener('click', this.clickHandler)
        playSound(soundType.bingo)
        this.wordNumber += 1
        setTimeout(() => {
          this.sayWord()
        }, 2000)
      } else {
        this.mistakesCounter += 1
        this.starField.append(Star(starColor.grey))
        playSound(soundType.fail)
      }
    }

    this.gameCards.forEach(({ imageElement }) => imageElement.addEventListener('click', this.clickHandler))
  }

  sayWord() {
    const audio = new Audio(this.gameCards[this.wordNumber].soundUrl)
    audio.play()
  }

  clear() {
    this.starField.innerHTML = ''
    this.gameCards.forEach(({ imageElement }) => {
      imageElement.removeEventListener('click', this.clickHandler)
      imageElement.classList.remove('card__img-inactive')
    })
    this.startButton.onclick = this.startButtonHandler
    this.startButtonText.innerHTML = 'Start game'
    this.startButton.classList.remove('button__circle')
    document.body.classList.remove('scroll-lock')
    if (this.mistakesCounter) {
      this.looseModal.remove()
    } else {
      this.victoryModal.remove()
    }
    this.mistakesCounter = 0
  }
}
