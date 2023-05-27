import * as S from './styled'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ProductCard } from '@/components/ProductCard'

const roupas = [
  {
      "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "nome": "Camiseta",
      "descricao": "Uma camiseta casual de algodão",
      "valor": 29.99
  },
  {
      "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=697&q=80",
      "nome": "Calça Jeans",
      "descricao": "Uma calça jeans clássica",
      "valor": 59.99
  },
  {
      "image": "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      "nome": "Vestido",
      "descricao": "Um vestido elegante para ocasiões especiais",
      "valor": 79.99
  },
  {
    "image": "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    "nome": "Vestido",
    "descricao": "Um vestido elegante para ocasiões especiais",
    "valor": 79.99
},
{
  "image": "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  "nome": "Vestido",
  "descricao": "Um vestido elegante para ocasiões especiais",
  "valor": 79.99
},
{
  "image": "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  "nome": "Vestido",
  "descricao": "Um vestido elegante para ocasiões especiais",
  "valor": 79.99
},
{
  "image": "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  "nome": "Vestido",
  "descricao": "Um vestido elegante para ocasiões especiais",
  "valor": 79.99
},
]

export default function Home() {
  return (
    <>
      <S.Header>
        <S.Logo>
          UrbanGoods
        </S.Logo>
        <S.CartContainer>
          <AiOutlineShoppingCart size={40} color='#fff' />
        </S.CartContainer>
      </S.Header>
      <S.Content>
        {
          roupas?.map((item: any) => <ProductCard />)
        }
      </S.Content>
    </>
  )
}
