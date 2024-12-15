import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainRoutes } from '../squirrify/routes/MainRoutes'

export const AppRouter = () => {
    
    
    return (
        <Routes>
            <Route path='/*' element={ <MainRoutes />}/>
        </Routes>
    )
}
