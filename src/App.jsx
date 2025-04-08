import { Layout } from 'antd';


const headerStyle = {
  textAlign:'center',
  color:'#fff',
  height:60,
  paddingInline:48,
  lineHeight:'64px',
  backgroundColor:'#4096ff',
};
const contentStyle = {
  textAlign:'center',
  minHeight:'calc(100vh - 60px)',
  color:'#fff',
  backgroundColor:'#062a8c',
};
const siderStyle = {
  textAlign:'center',
  lineHeight:'120px',
  color:'#fff',
  backgroundColor:'#1677ff',
};
/*const footerStyle = {
  textAlign:'center',
  color:'#fff',
  backgroundColor:'#4096ff',
};*/


export default function App() {
  return (
    <Layout>
      <Layout.Header style = {headerStyle}>Header</Layout.Header>
      <Layout>
        <Layout.Sider width = "25%"
          style = {siderStyle}>
          Sider
        </Layout.Sider>
        <Layout.Content style = {contentStyle}>Content</Layout.Content>
      </Layout>
      {/*<Layout.Footer style = {footerStyle}>Footer</Layout.Footer>*/}
    </Layout>
  )
}
