import React, { useEffect } from 'react'

import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'

import { Outlet } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'

const Layout = (props) => {
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])
    return (

            <div>
                <Sidebar {...props}/>
                <div className="layout__content">
                    <TopNav/>
                    <div className="layout__content-main">
                    </div>
                </div>
                <Outlet />
            </div>
            
        
    )
}

export default Layout
