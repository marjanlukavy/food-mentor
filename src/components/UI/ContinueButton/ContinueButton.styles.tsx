import styled from 'styled-components'

export const StyledContinueButton = styled.button`
    background-color: #8bc34a;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;

    &:hover {
        background-color: #7da839;
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`
