import { ReactNode } from 'react'

export interface UserSelectionsState {
    goal: string
    unit: 'IMPERIAL' | 'METRIC'
    height: string
    weight: string
    destructiveBehaviors: string[]
    physicalActivity: string
}

export type UserSelectionsAction =
    | { type: 'SET_GOAL'; payload: string }
    | { type: 'SET_UNIT'; payload: 'IMPERIAL' | 'METRIC' }
    | { type: 'SET_HEIGHT'; payload: string }
    | { type: 'SET_WEIGHT'; payload: string }
    | { type: 'SET_DESTRUCTIVE_BEHAVIORS'; payload: string[] }
    | { type: 'SET_PHYSICAL_ACTIVITY'; payload: string }

export type UpdateUserSelectionsFunction = (
    type: UserSelectionsAction['type'],
    payload: string | string[] | 'IMPERIAL' | 'METRIC'
) => void

export interface UserSelectionsProviderProps {
    children: ReactNode
}
