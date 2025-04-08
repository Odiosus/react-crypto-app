import { cryptoAssets, cryptoData } from "./data.js";

// поменять промисы на обычный фетч на сервак
export default function fakeFetchCrypto() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 2000)
  })
}

export default function fetchAssets() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 2000)
  })
}