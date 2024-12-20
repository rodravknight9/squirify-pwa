import React from 'react'
import { getCaption } from '../services'
import { captions } from '../../common/captions'

export const Filter = () => {
    return (
        <div className="filter">
            <div className="options">
                <span>{ getCaption(captions.today) }</span>
                <span>{ getCaption(captions.month) }</span>
                <span>{ getCaption(captions.year) }</span>
                <span>{ getCaption(captions.today) }</span>
            </div>
        </div>
    )
}
