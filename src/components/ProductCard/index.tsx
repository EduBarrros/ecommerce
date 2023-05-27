import React from 'react';
import * as S from './styled'

export const ProductCard = () => {
    return(
        <S.MainContainer>
            <S.ImageContainer>
                <S.Image 
                src={'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'} 
                height={150} 
                width={150}/>
            </S.ImageContainer>
            <S.Title>
                Blusa preta
            </S.Title>
            <S.Description>
                Feita 100% algodão
            </S.Description>
            <S.Value>
                R$ 110
            </S.Value>
            <S.AddCartButton>
                Adicionar ao carrinho
            </S.AddCartButton>
        </S.MainContainer>
    )
}