export default function shuffle(arr) {
  let j
  let temp
  const array = arr
  for (let i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[j]
    array[j] = array[i]
    array[i] = temp
  }
  return array
}
