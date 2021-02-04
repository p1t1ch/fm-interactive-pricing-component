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
    <div className={`pt-14 sm:pt-17 pb-22 px-12 ${className}`} {...props}>
      <div className="grid sm:grid-cols-2 gap-y-12 items-center text-center sm:text-left mb-12 sm:mb-14">
        <div className="uppercase tracking-widest text-xs sm:text-sm font-extrabold">
          {views >= 1000 ? `${views / 1000}M` : `${views}K`} Pageviews
        </div>
        <div className="grid grid-flow-col gap-2 items-center justify-center sm:justify-end text-sm sm:text-base order-2 sm:order-none">
          <span className="text-neutral-blue-dark font-extrabold text-price-mobile sm:text-price tracking-tight">
            ${isEarlyBilling ? monthPrice * 12 * ((100 - DISCOUNT_SIZE) / 100) : monthPrice}.00
          </span>
          <span>/ {isEarlyBilling ? 'year' : 'month'}</span>
        </div>
        <label htmlFor="range-slider" className="sr-only">
          Change pageviews count
        </label>
        <RangeSlider
          min={0}
          max={4}
          step={1}
          value={value}
          id="range-slider"
          onChange={handleRangeSliderChange}
          className="col-span-full order-1 sm:order-none"
        />
      </div>
      <div className="grid place-items-center">
        <div className="relative flex items-center justify-center">
          <label htmlFor="toggle" className="text-xs">
            Monthly Billing
          </label>
          <Toggle id="toggle" checked={isEarlyBilling} onChange={handleToggleChange} className="mx-3 sm:mx-4" />
          <label htmlFor="toggle" className="text-xs">
            Yearly Billing
          </label>
          <div className="absolute top-1/2 -right-1 sm:-right-2 transform -translate-y-1/2 translate-x-full h-5 px-2 grid place-items-center bg-primary-red-light text-primary-red text-sale font-extrabold rounded-full">
            <div>
              <span className="sm:hidden">-</span>
              {DISCOUNT_SIZE}% <span className="hidden sm:inline">discount</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
