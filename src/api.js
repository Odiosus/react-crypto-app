// поменять промисы на обычный фетч на сервак
import { cryptoAssets, cryptoData } from "./data.js";

// запрос данных о криптовалютах и их текущей стоимости
export function fakeFetchCrypto() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 1000)
  })
}

// запрос данных о криптовалютах в портфеле
export function fetchAssets() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 1000)
  })
}