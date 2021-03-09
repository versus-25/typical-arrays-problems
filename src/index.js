
exports.min = function min (array) {
  if (!!array) return 0;
  array.sort((a, b) => {return a - b})
  return array[0]
}

exports.max = function max (array) {
  if (!!array) return 0;
  array.sort((a, b) => {return b - a})
  return array[0]
}

exports.avg = function avg (array) {
  if (!!array) return 0;
  return  array.reduce((sum, item) => {sum + item})/array.length
}
