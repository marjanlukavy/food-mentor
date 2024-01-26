import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const OptionContainer = styled.div<{ $isSelected: boolean }>`
    display: flex;
    align-items: center;
    background: #ffffff;
    gap: 10px;
    padding: 12px 24px 12px 15px;
    border-radius: 15px;
    border: 1px solid #e1e1e1;
    cursor: pointer;
    transition: background-color 0.3s;

    background-color: ${(props) => (props.$isSelected ? '#f0f0f0' : '#fff')};

    &:hover {
        background-color: #f0f0f0;
    }
`

export const Icon = styled(LazyLoadImage)`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
`

export const Text = styled.span`
    color: #2d3436;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.3px;
`
