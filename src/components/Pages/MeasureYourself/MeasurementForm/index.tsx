import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContinueButton from '../../../UI/ContinueButton'
import { useUserSelections } from '../../../../context/UserSelectionsContext'
import * as S from './MeasurementForm.styles'

const MeasurementForm = () => {
    const navigate = useNavigate()
    const { state, updateUserSelections } = useUserSelections()
    const [height, setHeight] = useState(state.height)
    const [weight, setWeight] = useState(state.weight)
    const [unit, setUnit] = useState(state.unit)
    const isFormValid = height.trim() !== '' && weight.trim() !== ''

    const handleUnitChange = (newUnit: 'IMPERIAL' | 'METRIC') => {
        setUnit(newUnit)
        updateUserSelections('SET_UNIT', newUnit)
    }

    const handleContinue = () => {
        updateUserSelections('SET_HEIGHT', height)
        updateUserSelections('SET_WEIGHT', weight)

        navigate('/behaviors')
    }

    return (
        <S.Container>
            <S.ToggleButtonGroup>
                <S.ToggleButton
                    $active={unit === 'IMPERIAL'}
                    onClick={() => handleUnitChange('IMPERIAL')}
                >
                    IMPERIAL
                </S.ToggleButton>
                <S.ToggleButton
                    $active={unit === 'METRIC'}
                    onClick={() => handleUnitChange('METRIC')}
                >
                    METRIC
                </S.ToggleButton>
            </S.ToggleButtonGroup>
            <S.InputField
                value={height}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setHeight(e.target.value)
                }
                placeholder="Height"
            />
            <S.InputField
                value={weight}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setWeight(e.target.value)
                }
                placeholder={
                    unit === 'IMPERIAL' ? 'Weight (lbs)' : 'Weight (kg)'
                }
            />
            <ContinueButton onClick={handleContinue} disabled={!isFormValid}>
                Continue
            </ContinueButton>
        </S.Container>
    )
}

export default MeasurementForm
