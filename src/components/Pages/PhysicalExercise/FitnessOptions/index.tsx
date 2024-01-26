import { useNavigate } from 'react-router-dom'
import FitnessImage from '../../../../assets/icons/active-girl.svg'
import { fitnessOptions } from '../../../../constants/fitnessOptions'
import { useUserSelections } from '../../../../context/UserSelectionsContext'
import * as S from './FitnessOptions.styles'

const FitnessOptions = () => {
    const navigate = useNavigate()
    const { updateUserSelections } = useUserSelections()

    const selectFitnessOption = (fitnessOption: string) => {
        updateUserSelections('SET_PHYSICAL_ACTIVITY', fitnessOption)
        navigate('/')
    }

    return (
        <S.ComponentContainer>
            <S.ImageContainer>
                <img src={FitnessImage} alt="Fitness" />
            </S.ImageContainer>
            <S.OptionsContainer>
                {fitnessOptions.map((option, index) => (
                    <S.Option
                        key={index}
                        onClick={() => selectFitnessOption(option)}
                    >
                        {option}
                    </S.Option>
                ))}
            </S.OptionsContainer>
        </S.ComponentContainer>
    )
}

export default FitnessOptions
