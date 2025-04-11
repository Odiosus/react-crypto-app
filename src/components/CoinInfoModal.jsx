// выводим имя коина в заголовке h2. принимает параметр "coin"
export default function CoinInfoModal ({coin}) {
  return (
    <h2>{coin.name}</h2>
  )
}