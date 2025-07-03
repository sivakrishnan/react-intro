import React from 'react'

function V32Hero({ heroName }) {
    if(heroName==='joker'){
        throw new Error('Not a Hero!');
        
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default V32Hero