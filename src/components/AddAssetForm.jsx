import { useState } from "react";
import { Select, Space } from "antd";
import { useCrypto } from "../context/crypto-context.jsx";

export default function AddAssetForm () {

  const {crypto} = useCrypto()
  const [coin, setCoin] = useState( null )

  if (!coin) {
    return (
      <Select
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
    <form action="">FORM ASSET</form>
  )
}