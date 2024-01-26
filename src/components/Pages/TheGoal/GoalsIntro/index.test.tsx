import { render, screen } from '@testing-library/react'
import GoalsIntro from '.'

describe('GoalsIntro Component', () => {
    it('renders with provided props', () => {
        render(
            <GoalsIntro
                title="Test Title"
                description="Test Description"
                prompt="Test Prompt"
            />
        )
        expect(screen.getByText('Test Title')).toBeInTheDocument()
        expect(screen.getByText('Test Description')).toBeInTheDocument()
        expect(screen.getByText('Test Prompt')).toBeInTheDocument()
    })
})
