import React from 'react'

// interface ToggleProps extends React.HTMLProps<HTMLInputElement> {

// }

function Toggle({ className = '', ...props }: React.HTMLProps<HTMLInputElement>) {
  return (
    <div className={`${className}`}>
      <input type="checkbox" {...props} />
    </div>
  )
}

export default Toggle
