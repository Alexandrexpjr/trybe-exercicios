function identificaNumero(number) {
  if (typeof number !== 'number') return 'o valor deve ser um número'
  if (number > 0) return 'Positivo'
  if (number < 0) return 'Negativo'
  return 'Neutro'
}

module.exports = identificaNumero;