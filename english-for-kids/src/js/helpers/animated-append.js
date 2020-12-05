export default function animatedAppend(element, target, className, time) {
  element.classList.add(className)
  target.append(element)
  setTimeout(() => {
    element.classList.remove(className)
  }, time)
}
