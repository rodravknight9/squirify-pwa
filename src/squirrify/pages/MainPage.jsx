import React from 'react'

export const MainPage = () => {
    return (
        <div className="container">

            <div className="header">
                <div className="total">
                    <span className='number'>12738</span>
                    <span className='currency'>Bs</span>
                </div>

                <div className="filter">
                    <div className='options'>
                        <span className='selected'>Today</span>
                        <span>Month</span>
                        <span>Year</span>
                        <span>Custom</span>
                    </div>
                </div>
            </div>        
            
            <div className='list-of-expenses'>

            </div>
        
        </div>
    )
}


// https://www.freecodecamp.org/news/how-to-create-an-animated-hamburger-menu-in-react/