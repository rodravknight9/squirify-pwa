import React from 'react'
import { getCaption } from '../services'
import { captions } from '../../common/captions'

export const TotalBanner = ({ total }) => {
    return (
        <div className='total-banner'>
            <h4>{getCaption(captions.total)}</h4>
            <div className="total-currency">
                <span>{ 'Bs.' }</span>
                <span>{ total }</span>
            </div>
        </div>
    )
}
