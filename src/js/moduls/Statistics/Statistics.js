import create from '../../helpers/create'
import { cards } from '../../data/cards'
import { statisticTypes, sortField } from '../../helpers/constans'
import { set, get, del } from '../../helpers/storage'

export default class Statistics {
  constructor(appendCards) {
    const theadCategories = create('th', null, 'Categories')
    const theadWords = create('th', null, 'Words')
    const theadTranslation = create('th', null, 'Translation')
    const theadTrained = create('th', null, 'Trained')
    const theadCorrect = create('th', null, 'Correct')
    const theadIncorrect = create('th', null, 'Incorrect')
    const theadProc = create('th', null, '%')
    const thead = create('thead', null,
      create('tr', null,
        [theadCategories, theadWords, theadTranslation,
          theadTrained, theadCorrect, theadIncorrect, theadProc]))
    this.tbody = create('tbody')
    const resetButton = create('div', 'statistics__buttons-button', 'Reset')
    const difficultWordsButton = create('div', 'statistics__buttons-button', 'Repeat difficult words')
    const tableButtons = create('div', 'statistics__buttons', [difficultWordsButton, resetButton])
    const table = create('table', 'statistics__table', [thead, this.tbody])
    this.stat = create('div', 'statistics', [tableButtons, table])
    this.savedStat = get('statistics')
    this.tableRows = []
    this.difficultWords = []

    cards.forEach(({ category, word, translation }) => {
      const tbodyCategory = create('td', null, category)
      const tbodyWord = create('td', null, word)
      const tbodyTranslation = create('td', null, translation)
      const tbodyTrained = create('td', null, '0')
      const tbodyCorrect = create('td', null, '0')
      const tbodyIncorrect = create('td', null, '0')
      const tbodyProc = create('td', null, '0')

      const tr = create('tr', null,
        [tbodyCategory, tbodyWord, tbodyTranslation,
          tbodyTrained, tbodyCorrect, tbodyIncorrect, tbodyProc])

      this.tableRows.push({
        word,
        category,
        translation,
        trained: tbodyTrained,
        correct: tbodyCorrect,
        incorrect: tbodyIncorrect,
        proc: tbodyProc,
        element: tr,
      })

      this.tbody.append(tr)
    })

    if (this.savedStat) {
      this.tableRows.forEach((i) => {
        const {
          word, trained, correct, incorrect, proc,
        } = i
        const el = this.savedStat.find((t) => t.word === word)
        trained.innerHTML = el.trained
        correct.innerHTML = el.correct
        incorrect.innerHTML = el.incorrect
        proc.innerHTML = el.proc
      })
    }

    const sort = (field) => {
      this.sortBy(field, this.sortDirection)
      this.sortDirection = !this.sortDirection
    }

    const theadArray = [theadCategories, theadWords, theadTranslation, theadTrained,
      theadCorrect, theadIncorrect, theadProc]

    const sortArrow = (theadElement) => {
      theadArray.forEach((i) => {
        if (i !== theadElement) {
          i.classList.remove('descend')
          i.classList.remove('ascend')
        }
      })
      if (theadElement.classList.contains('descend')) {
        theadElement.classList.remove('descend')
        theadElement.classList.add('ascend')
      } else {
        theadElement.classList.remove('ascend')
        theadElement.classList.add('descend')
      }
    }

    theadArray.forEach((i) => {
      i.addEventListener('click', () => {
        const fieldName = i.innerHTML
        sort(fieldName)
        sortArrow(i)
      })
    })

    resetButton.onclick = () => {
      this.resetStat()
    }

    difficultWordsButton.onclick = () => {
      this.sortDifficultWords()
      appendCards(this.difficultWords)
    }
  }

  sortDifficultWords() {
    const arr = [...this.tableRows]
    arr.sort((a, b) => {
      const digA = +a.proc.innerHTML
      const digB = +b.proc.innerHTML
      return digA - digB
    })
    const final = arr.filter((i) => +i.proc.innerHTML > 0 && +i.proc.innerHTML !== 100)
    final.splice(8)
    final.forEach((w) => this.difficultWords.push(w.word))
  }

  resetStat() {
    if (this.savedStat) {
      del('statistics')
    }

    this.tableRows.forEach((i) => {
      const {
        trained, correct, incorrect, proc,
      } = i
      trained.innerHTML = '0'
      correct.innerHTML = '0'
      incorrect.innerHTML = '0'
      proc.innerHTML = '0'
    })
  }

  updateStat = (clickedWord, clickType) => {
    this.tableRows.forEach((i) => {
      const {
        word, trained, correct, incorrect, proc,
      } = i
      if (clickedWord === word) {
        if (clickType === statisticTypes.trained) {
          trained.innerHTML = +trained.innerHTML + 1
        } else if (clickType === statisticTypes.correct) {
          correct.innerHTML = +correct.innerHTML + 1
        } else if (clickType === statisticTypes.incorrect) {
          incorrect.innerHTML = +incorrect.innerHTML + 1
        }
        if (clickType === statisticTypes.incorrect || clickType === statisticTypes.correct) {
          const correctCount = +correct.innerHTML
          const incorrectCount = +incorrect.innerHTML
          const res = (correctCount / (correctCount + incorrectCount)) * 100
          proc.innerHTML = Math.ceil((res) * 100) / 100
        }
      }
    })
    this.saveStat()
  }

  saveStat() {
    const statArray = []
    this.tableRows.forEach((i) => {
      const {
        word, trained, correct, incorrect, proc,
      } = i
      statArray.push({
        word,
        trained: trained.innerHTML,
        correct: correct.innerHTML,
        incorrect: incorrect.innerHTML,
        proc: proc.innerHTML,
      })
    })
    set('statistics', statArray)
  }

  sortBy(field, direction) {
    const arr = [...this.tableRows]
    if (field === sortField.words
      || field === sortField.categories
      || field === sortField.translation) {
      arr.sort((a, b) => {
        let nameA = ''
        let nameB = ''
        if (field === sortField.words) {
          nameA = a.word.toLowerCase()
          nameB = b.word.toLowerCase()
        } else if (field === sortField.categories) {
          nameA = a.category.toLowerCase()
          nameB = b.category.toLowerCase()
        } else if (field === sortField.translation) {
          nameA = a.translation.toLowerCase()
          nameB = b.translation.toLowerCase()
        }
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    } else {
      arr.sort((a, b) => {
        let digitA = null
        let digitB = null
        if (field === sortField.trained) {
          digitA = +a.trained.innerHTML
          digitB = +b.trained.innerHTML
        } else if (field === sortField.correct) {
          digitA = +a.correct.innerHTML
          digitB = +b.correct.innerHTML
        } else if (field === sortField.incorrect) {
          digitA = +a.incorrect.innerHTML
          digitB = +b.incorrect.innerHTML
        } else if (field === sortField.proc) {
          digitA = +a.proc.innerHTML
          digitB = +b.proc.innerHTML
        }
        return digitA - digitB
      })
    }
    if (!direction) {
      arr.reverse()
    }
    this.tbody.innerHTML = ''
    arr.forEach((i) => this.tbody.append(i.element))
  }
}
