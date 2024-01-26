import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { UserSelectionsProvider } from '../../../../context/UserSelectionsContext'
import FitnessOptions from './'

describe('FitnessOptions Component', () => {
    it('renders fitness options', () => {
        render(
            <BrowserRouter>
                <UserSelectionsProvider>
                    <FitnessOptions />
                </UserSelectionsProvider>
            </BrowserRouter>
        )
        expect(screen.getByText('Hardly at all')).toBeInTheDocument()
        expect(screen.getByText('Fitness 1-2 times a week')).toBeInTheDocument()
    })
})
