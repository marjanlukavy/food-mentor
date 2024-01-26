export interface Goal {
    id: number
    title: string
    image: string
    altText: string
}

export interface GoalCardProps {
    goal: Goal
    onSelect: (title: string) => void
}
