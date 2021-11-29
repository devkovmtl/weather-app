function convertTime(timestamp) {
  const d = new Date(timestamp * 1000)
  const date = d.toGMTString().slice(0, 11)
  const time = d.toLocaleString().split(', ')[1]
  return { date, time }
}

function convertCToF(deg) {
  return deg * 1.8 + 32.0
}

function convertFToC(deg) {
  return (deg - 32) / 1.8
}

export { convertTime, convertCToF, convertFToC }
