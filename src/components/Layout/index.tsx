import { useNavigate } from 'react-router-dom'
import * as S from './Layout.styles'
import { LayoutProps } from './types'
import logo from '../../assets/icons/logo.svg'

const Layout = ({ children }: LayoutProps) => {
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    }
    return (
        <>
            <S.NavBar>
                <S.BackIcon onClick={handleBackClick} />
                <S.Logo src={logo} alt="Food Mentor Logo" />
                <S.Title>Food Mentor</S.Title>
            </S.NavBar>
            <S.MainContent>{children}</S.MainContent>
        </>
    )
}

export default Layout
