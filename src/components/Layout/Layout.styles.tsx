import styled from 'styled-components'
import { IoMdArrowRoundBack } from 'react-icons/io'

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
`

export const BackIcon = styled(IoMdArrowRoundBack)`
    font-size: 1.5rem;
    cursor: pointer;
`

export const Logo = styled.img`
    height: 40px;
    margin-left: 1rem;
`

export const Title = styled.h1`
    margin-left: 1rem;
    font-size: 1.5rem;
    color: #333;
`

export const MainContent = styled.main`
    max-width: 360px;
    margin: 0 auto;
    width: 100%;
`
