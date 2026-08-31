import Reveal from '@/components/common/Reveal'
import CallToAction from '@/components/sections/CallToAction'
import ComparisonColumns from '@/components/sections/ComparisonColumns'
import PageIntro from '@/components/sections/PageIntro'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const disconnectedItems = [
  'Scheduling in one system',
  'Timecards somewhere else',
  'Vehicle records in spreadsheets',
  'Inventory manually tracked',
  'Safety forms on paper',
  'Payroll entered separately',
  'Invoices manually created',
  'Equipment rentals forgotten',
]

const laneOpsItems = [
  'One connected job record',
  'One workforce database',
  'Connected fleet management',
  'Connected inventory',
  'Digital safety documentation',
  'Digital timecards',
  'Connected payroll workflow',
  'Automated billing workflow',
]

function WhyLaneOps() {
  useDocumentTitle(
    'Why LaneOps — LaneOps',
    'See why traffic control operations choose one connected platform over disconnected systems.',
  )

  return (
    <>
      <PageIntro
        eyebrow="Why LaneOps"
        title="Traffic Control Doesn't Operate in Silos. Your Software Shouldn't Either."
        actions={[{ label: 'Book a Demo', to: bookDemoPath, variant: 'primary' }]}
      />

      <Reveal>
        <ComparisonColumns
          title="Disconnected Systems vs. LaneOps"
          leftLabel="Disconnected Systems"
          leftItems={disconnectedItems}
          rightLabel="LaneOps"
          rightItems={laneOpsItems}
          closingStatement="No Double Entry. No Missed Billing. No Lost Visibility."
        />
      </Reveal>

      <Reveal>
        <CallToAction
          title="See LaneOps in Action"
          body="Book a demo and see what your traffic control operation looks like when everything is connected."
          primaryLabel="Book a Demo"
          primaryTo={bookDemoPath}
        />
      </Reveal>
    </>
  )
}

export default WhyLaneOps
