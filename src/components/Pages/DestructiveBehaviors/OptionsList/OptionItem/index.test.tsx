import { render, screen, fireEvent } from '@testing-library/react'
import OptionItem from '.'

describe('OptionItem Component', () => {
    it('renders correctly', () => {
        render(
            <OptionItem
                icon="test-icon.svg"
                text="Test Option"
                onClick={() => {}}
                isSelected={false}
            />
        )
        expect(screen.getByText('Test Option')).toBeInTheDocument()
    })

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn()
        render(
            <OptionItem
                icon="test-icon.svg"
                text="Test Option"
                onClick={handleClick}
                isSelected={false}
            />
        )
        fireEvent.click(screen.getByText('Test Option'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('shows selected style when isSelected is true', () => {
        render(
            <OptionItem
                icon="test-icon.svg"
                text="Test Option"
                onClick={() => {}}
                isSelected={true}
            />
        )
        expect(screen.getByText('Test Option').closest('div')).toHaveStyle(
            `background-color: #f0f0f0`
        )
    })
})
