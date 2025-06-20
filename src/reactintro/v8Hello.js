import React from 'react'

const Hello = () => {

    ////with JSX
    //  return (
    //     <div>
    //         <h1>Hello Skrish</h1>
    //     </div>
    //  )
    ////with out JSX
    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Skrish')
    )
}

export default Hello