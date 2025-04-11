import { Flex, Tag, Typography } from "antd";

// выводим инфо о коине. принимает параметр "coin"
export default function CoinInfoModal ({coin}) {
  return (
    <Flex
      // children={}
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
  )
}
