import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import reportWebVitals from './reportWebVitals'
import DestructiveBehaviors from './components/Pages/DestructiveBehaviors'
import MeasureYourself from './components/Pages/MeasureYourself'
import PhysicalExercise from './components/Pages/PhysicalExercise'
import GoalSection from './components/Pages/TheGoal'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserSelectionsProvider } from './context/UserSelectionsContext'

const router = createBrowserRouter([
    {
        path: '/',
        element: <GoalSection />,
    },
    {
        path: '/measure',
        element: <MeasureYourself />,
    },
    {
        path: '/behaviors',
        element: <DestructiveBehaviors />,
    },
    {
        path: '/exercise',
        element: <PhysicalExercise />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <UserSelectionsProvider>
            <RouterProvider router={router} />
        </UserSelectionsProvider>
    </React.StrictMode>
)

reportWebVitals()
