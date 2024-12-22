import React from 'react'
import { Title } from './Title'
import { squirifyEmojis } from '../../common'
import { defaultCategories } from '../../helpers/defaultCategories'
import { Category } from './Category'

export const UserCategories = () => {
    return (
        <div className='box flex-column'>
            <Title title={'User categories'}/>
            <div className="categories-list">
                {Object.entries(defaultCategories).map(([key, category]) => (
                    <div className="option">
                        <Category emojiName={category.emoji} size={50} categoryName={category.name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
 