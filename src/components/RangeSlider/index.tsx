import React from 'react'
import './range-slider.css'

const convertValue = (value: number, min: number, max: number) => ((value - min) / (max - min)) * 100

interface RangeSliderProps extends React.HTMLProps<HTMLInputElement> {
  value: number
  min: number
  max: number
}

function RangeSlider({ className = '', value, min, max, ...props }: RangeSliderProps) {
  const convertedValue = convertValue(value, min, max)

  return (
    <input
      value={value}
      min={min}
      max={max}
      className={`${className}`}
      {...props}
      type="range"
      style={{
        background: `linear-gradient(to right, #10d8c4 0%, #10d8c4 ${convertedValue}%, #ecf0fb ${convertedValue}%, #ecf0fb 100%)`,
      }}
    />
  )
}

export default RangeSlider
