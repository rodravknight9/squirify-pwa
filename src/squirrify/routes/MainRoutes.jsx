import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <MainPage />}/>
            <Route path="/*" element={ <MainPage />}/>
        </Routes>
    )
}
