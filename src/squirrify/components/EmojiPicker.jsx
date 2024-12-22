import React from 'react'
import { Emoji } from './Emoji'

export const EmojiPicker = () => {
    
    return (
        <div className='emoji-picker'>
            <div className="emoji-option selected">
                <Emoji emojiName={'hamburger'} size={40}/>
                <span>Meals</span>
            </div>
            <div className="emoji-option">
                <Emoji emojiName={'hamburger'} size={40}/>
                <span>Meals</span>
            </div>
            <div className="emoji-option">
                <Emoji emojiName={'hamburger'} size={40}/>
                <span>Meals</span>
            </div>
            <div className="emoji-option">
                <Emoji emojiName={'hamburger'} size={40}/>
                <span>Meals</span>
            </div>
        </div>
    )
}
