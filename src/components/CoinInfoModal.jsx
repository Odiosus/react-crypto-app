import { Divider, Flex, Tag, Typography } from "antd";
import CoinInfo from "./layout/CoinInfo.jsx";

// выводим инфо о коине. принимает параметр "coin"
export default function CoinInfoModal ({coin}) {
  return (
    <>
      <CoinInfo
        withSymbol
        coin={coin}
      />
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
      <Typography.Paragraph>
        <Typography.Text strong>
          Price:
        </Typography.Text>
        {coin.price.toFixed( 2 )}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>
          Price BTC:
        </Typography.Text>
        {coin.priceBtc}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>
          Market Capitalization:
        </Typography.Text>
        {coin.marketCap}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>
          Contract Address:
        </Typography.Text>
        {coin.contractAddress}
      </Typography.Paragraph>
    </>
  )
}
