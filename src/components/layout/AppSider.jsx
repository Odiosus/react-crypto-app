import { Layout, Card, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';


const siderStyle = {
  padding:'1rem',
};

const siderCard = {
  marginBottom:'1rem',
}


// компонент сайдбара
export default function AppSider() {
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