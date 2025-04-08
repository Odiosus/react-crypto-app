import { Layout } from "antd";

const contentStyle = {
  padding: '1rem',
  textAlign:'center',
  minHeight:'calc(100vh - 60px)',
  color:'#fff',
  backgroundColor:'#062a8c',
};


export default function AppContent() {
  return (
    <Layout.Content style = {contentStyle}>Content</Layout.Content>
  )
}