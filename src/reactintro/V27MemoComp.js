import React from 'react'

function V27MemoComp({ name }) {
    console.log('Rendering Memo Component')
    return (
        <div>{`name from Memo Component- ${name}`}</div>
    )
}

export default React.memo(V27MemoComp)