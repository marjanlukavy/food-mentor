import React from 'react'
import Layout from '../../Layout'
import GoalsIntro from '../TheGoal/GoalsIntro'
import MeasurementForm from './MeasurementForm'

const MeasureYourself = () => {
    return (
        <Layout>
            <GoalsIntro
                title="Measure Yourself"
                description="What are your height and body weight? "
            />
            <MeasurementForm />
        </Layout>
    )
}

export default MeasureYourself
