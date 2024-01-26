import { StyledContinueButton } from './ContinueButton.styles'
import { ContinueButtonProps } from './types'

const ContinueButton = ({
    onClick,
    children,
    disabled,
}: ContinueButtonProps) => (
    <StyledContinueButton onClick={onClick} disabled={disabled}>
        {children}
    </StyledContinueButton>
)

export default ContinueButton
