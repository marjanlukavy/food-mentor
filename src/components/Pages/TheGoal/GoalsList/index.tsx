import { useNavigate } from 'react-router-dom'
import { goals } from '../../../../constants/goals'
import { useUserSelections } from '../../../../context/UserSelectionsContext'
import * as S from './GoalsList.styles'

const GoalsList = () => {
    const navigate = useNavigate()
    const { updateUserSelections } = useUserSelections()

    const selectGoal = (goal: string) => {
        updateUserSelections('SET_GOAL', goal)
        navigate('/measure')
    }

    return (
        <S.GoalsGrid>
            {goals.map((goal, index) => (
                <S.GoalCard key={index} onClick={() => selectGoal(goal.title)}>
                    <S.GoalTitle>{goal.title}</S.GoalTitle>
                    <S.GoalImage src={goal.image} alt={goal.altText} />
                </S.GoalCard>
            ))}
        </S.GoalsGrid>
    )
}

export default GoalsList
