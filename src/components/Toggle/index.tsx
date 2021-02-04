import React from 'react'

function Toggle({ className = '', checked, ...props }: React.HTMLProps<HTMLInputElement>) {
  return (
    <label
      className={`w-toggle h-toggle rounded-full bg-neutral-blue-grayish-light hover:bg-primary-cyan focus-within:bg-primary-cyan transition-colors relative cursor-pointer ${className}`}
    >
      <div
        className={`w-thumb h-thumb rounded-full absolute top-1 left-1 transform ${
          checked ? 'translate-x-thumb' : ''
        } bg-neutral-white transition-transform`}
      />
      <input type="checkbox" checked={checked} className="sr-only" {...props} />
    </label>
  )
}

export default Toggle
