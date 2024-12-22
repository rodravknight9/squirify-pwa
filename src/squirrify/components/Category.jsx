import React from 'react'
import { Emoji } from './Emoji'

export const Category = ({ emojiName, size, categoryName }) => {
    return (
        <div className='category'>
            <Emoji emojiName={emojiName} size={size}/>
            <span>{categoryName}</span>
        </div>
    )
}
