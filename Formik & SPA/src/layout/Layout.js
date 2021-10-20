import React from 'react'
import Navigation from '../components/Navigation'
import "../App.css"

function Layout({ children }) {
    return (
        <div className="Container">
            <div className="Content">
                <Navigation  />
                {children}
            </div>



        </div>
    )
}

export default Layout
