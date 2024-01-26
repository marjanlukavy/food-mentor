import { createContext, useContext, useReducer } from 'react'
import {
    UserSelectionsState,
    UpdateUserSelectionsFunction,
    UserSelectionsAction,
    UserSelectionsProviderProps,
} from './types'

const UserSelectionsContext = createContext<{
    state: UserSelectionsState
    updateUserSelections: UpdateUserSelectionsFunction
} | null>(null)

const initialState: UserSelectionsState = {
    goal: '',
    unit: 'IMPERIAL',
    height: '',
    weight: '',
    destructiveBehaviors: [],
    physicalActivity: '',
}

function selectionsReducer(
    state: UserSelectionsState,
    action: UserSelectionsAction
) {
    switch (action.type) {
        case 'SET_GOAL':
            return { ...state, goal: action.payload }
        case 'SET_UNIT':
            return { ...state, unit: action.payload as 'IMPERIAL' | 'METRIC' }
        case 'SET_HEIGHT':
            return { ...state, height: action.payload }
        case 'SET_WEIGHT':
            return { ...state, weight: action.payload }
        case 'SET_DESTRUCTIVE_BEHAVIORS':
            return {
                ...state,
                destructiveBehaviors: action.payload as string[],
            }
        case 'SET_PHYSICAL_ACTIVITY':
            return { ...state, physicalActivity: action.payload as string }
        default:
            return state
    }
}

export function UserSelectionsProvider({
    children,
}: UserSelectionsProviderProps) {
    const [state, dispatch] = useReducer(selectionsReducer, initialState)
    const updateUserSelections = (
        type: UserSelectionsAction['type'],
        payload: any
    ) => {
        dispatch({ type, payload })
    }

    return (
        <UserSelectionsContext.Provider value={{ state, updateUserSelections }}>
            {children}
        </UserSelectionsContext.Provider>
    )
}

export function useUserSelections() {
    const context = useContext(UserSelectionsContext)
    if (!context) {
        throw new Error(
            'useUserSelections must be used within a UserSelectionsProvider'
        )
    }
    return context
}
