import { useState } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Flex,
  Form,
  Input,
  InputNumber,
  Result,
  Select,
  Space,
  Typography
} from "antd";
import { useCrypto } from "../context/crypto-context.jsx";
import CoinInfo from "./layout/CoinInfo.jsx";


const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  }
};

export default function AddAssetForm ({onClose}) {

  const [form] = Form.useForm();
  const {crypto} = useCrypto()
  const [coin, setCoin] = useState( null )
  const [submitted, setSubmitted] = useState( false )

  if (submitted) {
    return (
      <Result
        status="success"
        title="New Asset Added Successfully"
        subTitle={`Added ${coin.name} to your assets.`}
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={onClose}
          >
            Close
          </Button>,
        ]}
      />
    )
  }

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
    setSubmitted( true )
  }

  /**
   * Устанавливает поле «total» формы на основе текущего
   *  значение поля 'amount' и 'price' выбранной
   *  монеты.
   *  @param {number} value - Текущее значение поля 'amount'.
   */
  function handleAmountChange (value) {
    const price = form.getFieldValue( 'price' )

    form.setFieldsValue( {
      total: +(value * price).toFixed( 2 ),
    } )
  }

  function handlePriceChange (value) {
    const amount = form.getFieldValue( 'amount' )

    form.setFieldsValue( {
      total: +(amount * value).toFixed( 2 ),
    } )
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{span: 4}}
      wrapperCol={{span: 10}}
      style={{maxWidth: 600}}
      initialValues={{
        // #TODO
        price: +coin.price.toFixed( 2 ),
      }}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <CoinInfo coin={coin}/>
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
        <InputNumber
          placeholder={"Enter coin amount"}
          onChange={handleAmountChange}
          style={{width: '100%'}}/>
      </Form.Item>

      <Form.Item
        label="Price"
        name="price">
        <InputNumber
          onChange={handlePriceChange}
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