import { Layout, Card, Statistic, List, Typography } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { cryptoData } from "../../data.js";
import fakeFetchCrypto from "../../api.js";
import fetchAssets from "../../api.js";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const siderStyle = {
  padding:'1rem',
};
const siderCard = {
  marginBottom:'1rem',
}


// компонент сайдбара
export default function AppSider() {

  // лоадер пока загружаются данные и ассеты
  const [loading, setLoading] = useState(false)
  // массив с инфой с данными
  const [crypto, setCrypto] = useState()
  // массив с инфой с ассетами
  const [assets, setAssets] = useState()
  
  useEffect(() => {
    // запрашиваем загрузку данных актуальных (данные) и имеющихся валют (ассеты)
    async function preloadCryptoData() {
      setLoading(true)
      const {result} = await fakeFetchCrypto()
      const assets = await fetchAssets()
      setAssets(assets)
      setCrypto(result)
      setLoading(false)
    }
    preloadCryptoData()
  }, []);

  return (
    <Layout.Sider
      width = "25%"
      style = {siderStyle}
    >
      <Card style = {siderCard}>
        <Statistic
          title = "Active"
          value = {11.28}
          precision = {2}
          valueStyle = {{color:'#3f8600'}}
          prefix = {<ArrowUpOutlined/>}
          suffix = "%"
        />
        <List
          size="small"
          dataSource = {data}
          renderItem = {(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Card>

      <Card style = {siderCard}>
        <Statistic
          title = "Idle"
          value = {9.3}
          precision = {2}
          valueStyle = {{color:'#cf1322'}}
          prefix = {<ArrowDownOutlined/>}
          suffix = "%"
        />
      </Card>
    </Layout.Sider>
  )
}