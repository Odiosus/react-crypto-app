import { Button, Layout, Select, Space } from "antd";
import { useCrypto } from "../../context/crypto-context.jsx";
import { useEffect, useState } from "react";

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  width: '100%',
  textAlign: 'center',
  height: 60,
};


export default function AppHeader () {

  const [select, setSelect] = useState( false )
  const {crypto} = useCrypto()

  useEffect( () => {
    const handleKeyDown = event => {
      if (event.code === 'Slash' && !event.target.matches( 'input, textarea' )) {
        setSelect( (prev) => !prev )
      }
    }
    document.addEventListener( 'keydown', handleKeyDown )
    return () => document.removeEventListener( 'keydown', handleKeyDown )
  }, [] );

  function handleSelect (value) {

  }

  return (
    <Layout.Header
      style={headerStyle}
    >
      <Select
        title={'Раскрыть список (раскрыть клавишей "/")'}
        open={select}
        onClick={() => setSelect( (prev) => !prev )}
        onSelect={handleSelect}
        style={{width: 250}}
        value={"press / to open"}
        options={crypto?.map( coin => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }) )}
        optionRender={(option) => (
          <Space>
            <img
              src={option.data.icon}
              alt={option.data.label}
              width={'20'}
              loading={"lazy"}
            />
            {option.data.label}
          </Space>
        )}
      />
      <Button type="primary">Add Asset</Button>

    </Layout.Header>
  )
}