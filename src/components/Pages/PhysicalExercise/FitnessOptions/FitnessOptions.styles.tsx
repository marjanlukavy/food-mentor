import styled from 'styled-components'

export const ComponentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const OptionsContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Option = styled.div`
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid #e1e1e1;
    background: #fff;
    padding: 20px 15px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e9e9e9;
    }
`
