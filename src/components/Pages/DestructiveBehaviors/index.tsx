import React from 'react'
import Layout from '../../Layout'
import GoalsIntro from '../TheGoal/GoalsIntro'
import OptionsList from './OptionsList'

const DestructiveBehaviors = () => {
    return (
        <Layout>
            <GoalsIntro
                title="Destructive behaviors"
                description="We all have them! Which are yours?"
            />
            <OptionsList />
        </Layout>
    )
}

export default DestructiveBehaviors
