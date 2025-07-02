import React from 'react'

function V25FragmentDemo() {
  return (

    // with out React Fragment
    // <div>
    //   <h1>
    //     Fragment Demo
    //   </h1>
    //   <p>
    //     This describes the Fragment Demo Component
    //   </p>
    // </div>

    // with React Fragment
    <React.Fragment>
      <h1>
        Fragment Demo
      </h1>
      <p>
        This describes the Fragment Demo Component
      </p>
    </React.Fragment>
  )
}

export default V25FragmentDemo