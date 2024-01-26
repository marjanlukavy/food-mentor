import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const GoalsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 172px);
    gap: 20px;
    padding: 20px;
    justify-content: center;
`

export const GoalCard = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    width: 172px;
    height: 172px;
    border-radius: 20.848px;
    border: 1.402px solid #e1e1e1;
    background: linear-gradient(180deg, #f9f9f9 0%, #ececec 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 0 0 0 10px;
    text-align: left;
    box-sizing: border-box;
    transition:
        transform 0.3s,
        background-color 0.3s;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        background: linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%);
    }
`
export const GoalImage = styled(LazyLoadImage)`
    width: auto;
    height: auto;
`

export const GoalTitle = styled.h3`
    font-size: 1em;
    color: #333;
    margin: 0;
    max-width: 83.394px;
    color: #2d3436;
    font-family: Inter;
    font-size: 16.679px;
    font-weight: 500;
    line-height: 22.933px;
    letter-spacing: 0.208px;
`
