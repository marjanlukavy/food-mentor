import styled from 'styled-components'

export const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 15px;
    margin: auto;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 16px;
    }
`
