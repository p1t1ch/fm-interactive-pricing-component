import React, { useState } from 'react'
import RangeSlider from '@/components/RangeSlider'
import Toggle from '@/components/Toggle'

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// interface PricingProps extends React.HTMLProps<HTMLDivElement> {

// }

const prices = [
  { views: 10, month: 8 },
  { views: 50, month: 12 },
  { views: 100, month: 16 },
  { views: 500, month: 24 },
  { views: 1000, month: 36 },
]

const DISCOUNT_SIZE = 25

function Pricing({ className = '', ...props }: React.HTMLProps<HTMLDivElement>) {
  const [value, setValue] = useState(2)
  const [isEarlyBilling, setIsEarlyBilling] = useState(false)
  const views = prices[value].views
  const monthPrice = prices[value].month

  function handleRangeSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(+e.target.value)
  }

  function handleToggleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsEarlyBilling(e.target.checked)
  }

  return (
    <div className={`${className}`} {...props}>
      <div>{views >= 1000 ? `${views / 1000}M` : `${views}K`} Pageviews</div>
      <div>
        ${isEarlyBilling ? monthPrice * 12 * (DISCOUNT_SIZE / 100) : monthPrice}.00 /{' '}
        {isEarlyBilling ? 'year' : 'month'}
      </div>
      <RangeSlider min={0} max={4} step={1} value={value} onChange={handleRangeSliderChange} />
      <div>
        <label htmlFor="toggle">Monthly Billing</label>
        <Toggle checked={isEarlyBilling} onChange={handleToggleChange} />
        <label htmlFor="toggle">Yearly Billing</label>
        <div>{DISCOUNT_SIZE}% discount</div>
      </div>
    </div>
  )
}

export default Pricing
