import Layout from '../../Layout'
import GoalsIntro from './GoalsIntro'
import GoalsList from './GoalsList'

const GoalSection = () => {
    return (
        <Layout>
            <GoalsIntro
                title="Your Personalized Goals"
                description="Choose the goals that matter most to you, and we'll help you achieve them."
                prompt="Select one to get started:"
            />
            <GoalsList />
        </Layout>
    )
}

export default GoalSection
