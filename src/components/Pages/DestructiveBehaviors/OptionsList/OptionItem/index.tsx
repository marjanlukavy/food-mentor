import * as S from './OptionItem.styles'

interface OptionItemProps {
    icon: string
    text: string
    onClick: () => void
    isSelected: boolean
}

const OptionItem = ({ icon, text, onClick, isSelected }: OptionItemProps) => (
    <S.OptionContainer onClick={onClick} isSelected={isSelected}>
        <S.Icon src={icon} alt="" />
        <S.Text>{text}</S.Text>
    </S.OptionContainer>
)

export default OptionItem
