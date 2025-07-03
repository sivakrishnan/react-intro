import React from 'react'

// function V30FRDInput() {
//   return (
//     <div>V30FRDInput</div>
//   )
// }

const V30FRDInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref}></input>
        </div>
    )
})

export default V30FRDInput