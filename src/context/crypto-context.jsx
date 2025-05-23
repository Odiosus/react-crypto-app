import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetchCrypto, fetchAssets } from "../api.js";
import { percentDifference } from "../utils.js";

const CryptoContext = createContext( {
  assets: [],
  crypto: [],
  loading: false,
} )

export function CryptoContextProvider ({children}) {

  // лоадер пока загружаются данные и ассеты
  const [loading, setLoading] = useState( false )
  // массив с инфой с данными
  const [crypto, setCrypto] = useState()
  // массив с инфой с ассетами
  const [assets, setAssets] = useState()

  useEffect( () => {
    // запрашиваем загрузку данных актуальных (данные) и имеющихся валют (ассеты)
    async function preloadCryptoData () {
      setLoading( true )
      const {result} = await fakeFetchCrypto()
      const fetchedAssets = await fetchAssets()
      setAssets( fetchedAssets.map( asset => {

        // собираем данные о валютах
        const coin = result.find( (c) => c.id === asset.id )

        return {
          grow: asset.price < coin.price,
          growPercent: percentDifference( asset.price, coin.price ),
          totalAmount: asset.amount * coin.price,
          totalProfit: asset.amount * coin.price - asset.amount * asset.price,
          ...asset
        }
      } ) )
      setCrypto( result )
      setLoading( false )
    }

    preloadCryptoData()
  }, [] );

  return <CryptoContext.Provider value = {{loading, crypto, assets}}>
    {children}
  </CryptoContext.Provider>
}

export default CryptoContext

export function useCrypto () {
  return useContext(CryptoContext)
}