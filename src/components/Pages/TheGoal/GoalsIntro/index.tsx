import { GoalsIntroProps } from './types'
import * as S from './GoalsIntro.styles'

const GoalsIntro = ({ title, description, prompt }: GoalsIntroProps) => (
    <S.IntroContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        {prompt && prompt.length >= 1 ? (
            <S.GoalPrompt>{prompt}</S.GoalPrompt>
        ) : null}
    </S.IntroContainer>
)

export default GoalsIntro
