import { useState } from "react";
import { Button, Checkbox, DatePicker, Divider, Flex, Form, Input, InputNumber, Select, Space, Typography } from "antd";
import { useCrypto } from "../context/crypto-context.jsx";


const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  }
};

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

  function onFinish (values) {
    console.log( 'finish', values )
  }

  return (
    <Form
      name="basic"
      labelCol={{span: 4}}
      wrapperCol={{span: 10}}
      style={{maxWidth: 600}}
      initialValues={{
      price: +coin.price.toFixed(2),
      }}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
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

      <Form.Item
        label="Amount"
        name="amount"
        rules={[{
          required: true,
          type: 'number',
          min: 0,
        }]}
      >
        <InputNumber/>
      </Form.Item>

      <Form.Item
        label="Price"
        name="price">
        <InputNumber
          disabled
          style={{width: '100%'}}/>
      </Form.Item>

      <Form.Item
        label="Date & Time"
        name="date">
        <DatePicker showTime/>
      </Form.Item>

      <Form.Item
        label="Total"
        name="total">
        <InputNumber
          disabled
          style={{width: '100%'}}/>
      </Form.Item>

      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit">
          Add Asset
        </Button>
      </Form.Item>
    </Form>
  );
}