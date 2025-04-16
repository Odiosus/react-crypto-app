import { useState } from "react";
import { Button, Checkbox, Divider, Flex, Form, Input, Select, Space, Typography } from "antd";
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

  function onFinish (values) {
    console.log( 'finish', values )
  }

  return (
    <Form
      name="basic"
      labelCol={{span: 4}}
      wrapperCol={{span: 10}}
      style={{maxWidth: 600}}
      initialValues={}
      onFinish={onFinish}
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
        label="Username"
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[{
          required: true,
          type: 'number',
          min: 0,
          message: 'Please input your password!'}]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item name="remember"
        valuePropName="checked"
        label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary"
          htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}