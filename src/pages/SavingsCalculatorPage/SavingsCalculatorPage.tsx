import Reveal from '@/components/common/Reveal'
import CallToAction from '@/components/sections/CallToAction'
import PageIntro from '@/components/sections/PageIntro'
import SavingsCalculator from '@/components/sections/SavingsCalculator'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

function SavingsCalculatorPage() {
  useDocumentTitle(
    'Savings Calculator — LaneOps',
    'Estimate what switching to LaneOps could save your traffic control operation in admin time, payroll corrections, fleet administration, and recovered productive time.',
  )

  return (
    <>
      <PageIntro
        eyebrow="Savings Calculator"
        title="See What LaneOps Could Save Your Operation"
        subheadline="Enter a few numbers about your operation and get an estimate — adjustable, transparent, and yours to download."
      />

      <Reveal>
        <SavingsCalculator />
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

export default SavingsCalculatorPage
