import Reveal from '@/components/common/Reveal'
import CallToAction from '@/components/sections/CallToAction'
import PageIntro from '@/components/sections/PageIntro'
import SolutionTiers from '@/components/sections/SolutionTiers'
import TrustBand from '@/components/sections/TrustBand'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import styles from './Pricing.module.css'

const heroCards = [
  {
    id: 'dispatch',
    title: 'Dispatch Management',
    description: 'See every crew and job on one live board.',
  },
  {
    id: 'inventory',
    title: 'Inventory Tracking',
    description: 'Know what equipment you have and where it is.',
  },
  {
    id: 'compliance',
    title: 'Compliance Tools',
    description: 'FLRAs, traffic plans, and incident reports in one place.',
  },
]

function Pricing() {
  useDocumentTitle(
    'Pricing & Demo — LaneOps',
    'LaneOps solution packages built around your operation, plus an estimate of what switching could save you.',
  )

  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="Pricing Built Around Your Operation"
        subheadline="See the LaneOps solution built for how field operations actually run, then find out what it could save you below."
        actions={[{ label: 'Book a Demo', to: bookDemoPath, variant: 'primary' }]}
      >
        <div className={styles.cards}>
          {heroCards.map((card) => (
            <div key={card.id} className={styles.card}>
              <p className={styles.cardTitle}>{card.title}</p>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </PageIntro>

      <Reveal>
        <SolutionTiers />
      </Reveal>

      <Reveal>
        <CallToAction
          title="See What LaneOps Could Save You"
          body="Try the savings calculator — enter a few numbers about your operation and get an adjustable, downloadable estimate."
          primaryLabel="Calculate My Savings"
          primaryTo="/savings-calculator"
        />
      </Reveal>

      <Reveal>
        <TrustBand
          highlight="Most companies recover the cost of LaneOps within the first 30–60 days"
          title="Built for Real Field Operations"
          checklist={[
            'One system for scheduling, dispatch, payroll, and compliance',
            'No missed billing or manual re-entry between tools',
            'Visibility into every job, crew, and asset in real time',
          ]}
        />
      </Reveal>

      <Reveal>
        <CallToAction
          title="See LaneOps in Action"
          body="Book a demo and see exactly how LaneOps applies to your business."
          primaryLabel="Book a Demo"
          primaryTo={bookDemoPath}
        />
      </Reveal>
    </>
  )
}

export default Pricing
