import React from 'react'
import { Emoji } from './Emoji'
import { Category } from './Category'

export const EmojiPicker = () => {
    
    return (
        <div className='emoji-picker'>
            <div className="emoji-option selected">
               <Category emojiName={'hamburger'} size={40} categoryName='Changes'/>
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
