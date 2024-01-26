import Layout from '../../Layout'
import GoalsIntro from '../TheGoal/GoalsIntro'
import FitnessOptions from './FitnessOptions'

const PhysicalExercise = () => {
    return (
        <Layout>
            <GoalsIntro
                title="Physical exercise"
                description="Physical exercise means a lot for a woman who wants to lose kilos and works at the office"
                prompt="How active are you during the day?"
            />
            <FitnessOptions />
        </Layout>
    )
}

export default PhysicalExercise
