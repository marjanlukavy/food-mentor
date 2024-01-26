import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const ToggleButtonGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #5fcb39;
    overflow: hidden;
`

export const ToggleButton = styled.button<{ active: boolean }>`
    flex-grow: 1;

    border: none;
    background-color: ${(props) =>
        props.active ? 'rgba(95, 203, 57, 0.20)' : '#FFFFFF'};
    color: #5fcb39;
    padding: 10px 20px;
    font-weight: bold;
    font-family: Inter;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    transition:
        background-color 0.3s,
        color 0.3s;

    &:hover {
        opacity: 0.8;
    }
`

export const InputField = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;

    &::placeholder {
        color: #aaa;
    }
`
