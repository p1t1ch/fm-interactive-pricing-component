import React from 'react'
import Seo from '@/components/Seo'
import Pricing from '@/components/Pricing'
import { ReactComponent as PatternCircles } from '@/icons/pattern-circles.svg'

function IndexPage() {
  return (
    <div className="min-h-screen px-6 py-22 grid justify-items-center bg-pattern bg-no-repeat">
      <Seo title="Frontend Mentor: Interactive pricing component" />
      <main className="max-w-container w-full">
        <section className="relative grid place-items-center mb-8 sm:mb-14 py-10 text-center sm:text-left z-0">
          <PatternCircles className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10" />
          <h1 className="font-extrabold text-xl sm:text-heading text-neutral-blue-dark mb-2 sm:mb-3">
            Simple, traffic-based pricing
          </h1>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </section>
        <section className="bg-neutral-white rounded-2xl shadow">
          <Pricing />
          <div className="py-8 px-12 flex items-center flex-col sm:flex-row sm:justify-between border-t border-neutral-blue-grayish-lightest">
            <ul className="list mb-8 sm:mb-0">
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <button className="font-extrabold text-xs bg-neutral-blue-dark text-primary-blue hover:text-neutral-white focus-visible:text-neutral-white w-44 h-10 grid place-items-center rounded-full transition-colors">
              Start my trial
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default IndexPage
