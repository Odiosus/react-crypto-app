import { Layout, Card, Statistic, List, Typography, Spin, Tag } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { fakeFetchCrypto, fetchAssets } from "../../api.js";
import { percentDifference, capitalize } from "../../utils.js";


const siderStyle = {
  padding: '1rem',
};
const siderCard = {
  marginBottom: '1rem',
}


// компонент сайдбара
export default function AppSider () {

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
      const assets = await fetchAssets()
      setAssets( assets.map( asset => {

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

  // показываем загрузку пока не загружены данные
  if (loading) {
    return <Spin fullscreen/>
  }

  return (
    <Layout.Sider
      width = "25%"
      style = {siderStyle}
    >
      {assets?.map( (asset) => (
        <Card
          key = {asset.id}
          style = {siderCard}
        >
          <Statistic
            title = {capitalize( asset.id )}
            value = {asset.totalAmount}
            precision = {2}
            valueStyle = {{
              color: asset.grow
                ? '#3f8600'
                : '#cf1322'
            }}
            prefix = {asset.grow
              ? <ArrowUpOutlined/>
              : <ArrowDownOutlined/>}
            suffix = "$"
          />
          <List
            size = "small"
            dataSource = {[
              {title: 'Total Profit', value: asset.totalProfit, withTag: true},
              {title: 'Asset Amount', value: asset.amount, isPlain: true},
            ]}
            renderItem = {(item) => (
              <List.Item>
                <span>
                  {item.title}
                </span>
                <span>
                  {item.withTag && (
                    <Tag
                      color = {asset.grow
                        ? 'green'
                        : 'red'}
                    >
                      {asset.growPercent}%
                    </Tag>)}

                  {item.isPlain && item.value}
                  {!item.isPlain && (
                    <Typography.Text
                      type = {asset.grow
                        ? 'success'
                        : 'danger'}>
                      {item.value.toFixed( 2 )} $
                    </Typography.Text>
                  )}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ) )}
    </Layout.Sider>
  )
}