const padZeros = (number, domain = 2) => {
  const string = new String(number)
  return string.padStart(domain, '0')
}

export default padZeros
