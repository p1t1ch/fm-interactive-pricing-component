import React from 'react'
import Seo from '@/components/Seo'
import Pricing from '@/components/Pricing'

function IndexPage() {
  return (
    <main>
      <Seo title="Frontend Mentor: Interactive pricing component" />
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
      <article>
        <Pricing />
        <div>
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
          <button>Start my trial</button>
        </div>
      </article>
    </main>
  )
}

export default IndexPage
