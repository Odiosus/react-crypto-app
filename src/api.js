// поменять промисы на обычный фетч на сервак
import { cryptoAssets, cryptoData } from "./data.js";

// запрос данных о криптовалютах и их текущей стоимости
export default function fakeFetchCrypto() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 2000)
  })
}

// запрос данных о криптовалютах в портфеле
export default function fetchAssets() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 2000)
  })
}