export default function create(el, classNames, child, parent, ...dataAttr) {
  let element = null

  try {
    element = document.createElement(el)
  } catch (err) {
    throw new Error('Unable to create element')
  }

  if (classNames) {
    element.classList.add(...classNames.split(' '))
  }

  if (child && Array.isArray(child)) {
    child.forEach((item) => item && element.append(item))
  } else if (child && typeof child === 'object') {
    element.append(child)
  } else if (child && typeof child === 'string') {
    element.innerHTML = child
  }

  if (parent) {
    parent.append(element)
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '')
      }
      if (attrName.match(/value|values|id|placeholder|cols|rows|autocorrect|version|spellcheck|src|selected|disabled|draggable|alt|mode|result|type|checked|for|href|target/)) {
        element.setAttribute(attrName, attrValue)
      } else {
        element.dataset[attrName] = attrValue
      }
    })
  }
  return element
}
