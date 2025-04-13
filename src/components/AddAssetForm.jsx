import { useState } from "react";
import { Divider, Flex, Select, Space, Typography } from "antd";
import { useCrypto } from "../context/crypto-context.jsx";

export default function AddAssetForm () {

  const {crypto} = useCrypto()
  const [coin, setCoin] = useState( null )

  if (!coin) {
    return (
      <Select
        style={{width: '100%'}}
        onSelect={(v) => setCoin( crypto.find( (c) => c.id === v ) )}
        placeholder={"Select coin"}
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
    )
  }

  return (
    <form action="">
      <Flex
        align='center'
      >
        <img
          src={coin.icon}
          alt={coin.name}
          width={40}/>
        <Typography.Title
          level={2}
          style={{
            margin: 0,
            paddingLeft: 10
          }}
        >
          {coin.name}
        </Typography.Title>
      </Flex>
      <Divider/>
    </form>
  )
}