import * as S from './styled'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Home() {
  return (
    <S.Header>
      <S.Logo>
        UrbanGoods
      </S.Logo>
      <S.CartContainer>
        <AiOutlineShoppingCart size={40} color='#fff' />
      </S.CartContainer>
    </S.Header>
  )
}
