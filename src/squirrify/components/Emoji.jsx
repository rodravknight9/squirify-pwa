import React from 'react';
import EmojiDictionary from "emoji-dictionary";

export const Emoji = ({ emojiName, size }) => {
    
    const emoji = EmojiDictionary.getUnicode(emojiName);

    return (
        <div>
            <p style={{ fontSize: size }}>{ emoji }</p>
        </div>
    )
}
