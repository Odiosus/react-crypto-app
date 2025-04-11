import { Divider, Flex, Tag, Typography } from "antd";

// выводим инфо о коине. принимает параметр "coin"
export default function CoinInfoModal ({coin}) {
  return (
    <>
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
          ({coin.symbol}) {coin.name}
        </Typography.Title>
      </Flex>
      <Divider/>
      <Typography.Paragraph>
        <Typography.Text strong>
          1 hour:
        </Typography.Text>
        <Tag
          color={coin.priceChange1h > 0
            ? 'green'
            : 'red'}
          style={{marginLeft: 5}}
        >
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>
          1 day:
        </Typography.Text>
        <Tag
          color={coin.priceChange1d > 0
            ? 'green'
            : 'red'}
          style={{marginLeft: 5}}
        >
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong>
          1 week:
        </Typography.Text>
        <Tag
          color={coin.priceChange1w > 0
            ? 'green'
            : 'red'}
          style={{marginLeft: 5}}
        >
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
    </>
  )
}
