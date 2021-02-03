import React from 'react'

// interface RangeSliderProps extends React.HTMLProps<HTMLInputElement> {

// }

function RangeSlider({ className = '', ...props }: React.HTMLProps<HTMLInputElement>) {
  return <input className={`${className}`} {...props} type="range" />
}

export default RangeSlider
