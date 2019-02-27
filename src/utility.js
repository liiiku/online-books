export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'

export const padLeft = (n) => {
  return n < 10 ? '0' + n : n
}

/**
 * 
 * @param {*} size  数组有多大
 * @param {*} startAt 从哪里开始
 */
export const range = (size, startAt = 0) => {
  const arr = []
  for(let i = 0; i < size; i++) {
    arr[i] = startAt + i
  }
  return arr
}