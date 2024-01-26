import { useNavigate } from 'react-router-dom'
import { goals } from '../../../../constants/goals'
import { useUserSelections } from '../../../../context/UserSelectionsContext'
import GoalItem from './GoalItem'
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
            {goals.map((goal) => (
                <GoalItem key={goal.id} goal={goal} onSelect={selectGoal} />
            ))}
        </S.GoalsGrid>
    )
}

export default GoalsList
