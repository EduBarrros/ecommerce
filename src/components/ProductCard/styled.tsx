'use client';

import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E6E2DD;
    width: 300px;
    height: 350px;
    border-radius: 12px;
    box-shadow: 0px 12px 19px -5px rgba(0,0,0,0.4);
    padding: 10px;
`

export const ImageContainer = styled.div`
    
`

export const Image = styled.img`
    border-radius: 100px;
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
`

export const Description = styled.h2`
    font-weight: bold;
    font-size: 12px;
`

export const Value = styled.h2`
    font-weight: bold;
    font-size: 20px;
`

export const AddCartButton = styled.button`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;

    background-color: green;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    font-weight: bold;
    color: #fff;
`

