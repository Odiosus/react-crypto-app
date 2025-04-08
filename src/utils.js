// рассчитываем процент роста/падения
export default function percentDifference (a, b) {
  return 100 * Math.abs( a - b ) / ((a + b) / 2)
}
