import * as S from '../GoalsList.styles'
import { GoalCardProps } from './types'

const GoalItem = ({ goal, onSelect }: GoalCardProps) => (
    <S.GoalCard key={goal.id} onClick={() => onSelect(goal.title)}>
        <S.GoalTitle>{goal.title}</S.GoalTitle>
        <S.GoalImage src={goal.image} alt={goal.altText} />
    </S.GoalCard>
)

export default GoalItem
