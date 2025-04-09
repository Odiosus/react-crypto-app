// рассчитываем процент роста/падения коинов
export function percentDifference (a, b) {
  return +(100 * Math.abs( (a - b) / ((a + b) / 2) )).toFixed( 2 )
}

// устанавливаем начальную заглавную букву, остальные строчные
export function capitalize (str) {
  return str.charAt( 0 ).toUpperCase() + str.substring( 1 )
}