import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { options } from '../../../../constants/options'
import { useUserSelections } from '../../../../context/UserSelectionsContext'
import ContinueButton from '../../../UI/ContinueButton'
import OptionItem from './OptionItem'
import * as S from './OptionsList.styles'

const OptionsList = () => {
    const navigate = useNavigate()
    const { state, updateUserSelections } = useUserSelections()
    const [selectedOption, setSelectedOption] = useState<
        string[] | string | null
    >(state.destructiveBehaviors || null)

    const selectOption = (option: { text: string; icon: string }) => {
        setSelectedOption(option.text)
        updateUserSelections('SET_DESTRUCTIVE_BEHAVIORS', option.text)
    }

    return (
        <>
            <S.OptionsGrid>
                {options.map((option, index) => (
                    <OptionItem
                        key={index}
                        icon={option.icon}
                        text={option.text}
                        isSelected={option.text === selectedOption}
                        onClick={() => selectOption(option)}
                    />
                ))}
            </S.OptionsGrid>
            <ContinueButton
                onClick={() => navigate('/exercise')}
                disabled={selectedOption?.length === 0}
            >
                Continue
            </ContinueButton>
        </>
    )
}

export default OptionsList
