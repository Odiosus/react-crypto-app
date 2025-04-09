import { Button, Layout, Select, Space } from "antd";

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  width: '100%',
  textAlign: 'center',
  height: 60,
};

const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];


export default function AppHeader () {
  return (
    <Layout.Header style = {headerStyle}>
      <Select
        style = {{width: 250}}
        placeholder = "select one country"
        defaultValue = {['china']}
        // onChange = {handleChange}
        options = {options}
        optionRender = {(option) => (
          <Space>
            <span
              role = "img"
              aria-label = {option.data.label}
            >
              {option.data.emoji}
            </span>
            {option.data.desc}
          </Space>
        )}
      />
      <Button type = "primary">Add asset</Button>

    </Layout.Header>
  )
}