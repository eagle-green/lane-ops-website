import Reveal from '@/components/common/Reveal'
import CallToAction from '@/components/sections/CallToAction'
import Differentiator from '@/components/sections/Differentiator'
import DispatchPreview from '@/components/sections/DispatchPreview'
import FeatureGrid from '@/components/sections/FeatureGrid'
import HomeHero from '@/components/sections/HomeHero'
import HowItWorks from '@/components/sections/HowItWorks'
import Marquee from '@/components/sections/Marquee'
import StatsCounter from '@/components/sections/StatsCounter'
import ValueStatement from '@/components/sections/ValueStatement'
import VehicleInventorySpotlight from '@/components/sections/VehicleInventorySpotlight'
import dispatchPreview from '@/assets/images/dispatch-preview.svg'
import heroDashboard from '@/assets/images/hero-dashboard.svg'
import vehicleSpotlight from '@/assets/images/vehicle-spotlight.svg'
import { audiences } from '@/data/audiences'
import { differentiatorItems } from '@/data/benefits'
import { bookDemoPath } from '@/data/navigation'
import { homeFeatures } from '@/data/services'
import { homeStats } from '@/data/stats'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const howItWorksSteps = [
  {
    id: 'schedule-the-day',
    title: 'Schedule Crews',
    description:
      'Plan jobs and assign crews and vehicles from one live board. Conflicts surface before the truck leaves the yard, and every assignment carries its notes, site details and attachments with it.',
    chips: ['drag to assign', 'conflict detection', 'daily + weekly views'],
  },
  {
    id: 'track-the-work',
    title: 'Track Work',
    description:
      'Crews clock in and out per job from their phone, capture notes, photos and FLRAs, and move the job status forward. Dispatch sees it the moment it happens, no end-of-day phone round.',
    chips: ['mobile clock-in', 'photos + notes', 'live status'],
  },
  {
    id: 'run-payroll-and-billing',
    title: 'Run Payroll and Billing',
    description:
      'Approved timesheets export payroll-ready, and completed jobs turn into invoices on the same records. Missed-billing detection catches the work that used to disappear.',
    chips: ['payroll export', 'auto invoices', 'missed-billing alerts'],
  },
]

const marqueeItems = audiences.map((audience) => audience.label)

function Home() {
  useDocumentTitle(
    'LaneOps — Run Your Entire Operation in One System',
    'Scheduling, dispatch, time tracking, payroll, vehicle and inventory control, and compliance, all in one system.',
  )

  return (
    <>
      <HomeHero
        eyebrow="Field operations, one system"
        headline="Run Your Entire Operation in"
        headlineAccent="One System"
        subheadline="Scheduling, dispatch, time tracking, payroll, vehicles and compliance — connected to the same job record, updating live as your crews work."
        tagline="No missed billing. No manual admin. No disconnected systems."
        actions={[
          { label: 'Book a Demo', to: bookDemoPath, variant: 'primary' },
          { label: 'See How It Works', to: '/how-it-works', variant: 'outline' },
        ]}
        screenshotSrc={heroDashboard}
        screenshotAlt="LaneOps dashboard overview showing jobs, dispatch, and crew status"
      />

      <Marquee items={marqueeItems} />

      <Reveal>
        <ValueStatement
          headline="Stop Managing — Start Running Your Business"
          body="LaneOps replaces scattered spreadsheets, paper timesheets, and disconnected tools with one system that keeps every job, crew, and asset visible and accounted for."
        />
      </Reveal>

      <StatsCounter
        stats={homeStats}
        footnote="Example figures for a typical mid-size field service operation."
      />

      <Reveal>
        <FeatureGrid
          eyebrow="The platform"
          title="Everything You Need, Built In"
          features={homeFeatures}
        />
      </Reveal>

      <DispatchPreview
        screenshotSrc={dispatchPreview}
        screenshotAlt="LaneOps dispatch board showing crews and jobs organized by column"
      />

      <Reveal>
        <VehicleInventorySpotlight
          eyebrow="Vehicles & inventory"
          headline="Vehicle and Inventory Control Built for the Field"
          description="Know exactly what equipment you have, where it is, and whether it's ready for the next job, without a spreadsheet in sight."
          bullets={[
            'Real-time vehicle and equipment status',
            'Maintenance scheduling tied to each asset',
            'Inventory counts by job and location',
            'Full assignment history',
          ]}
          screenshotSrc={vehicleSpotlight}
          screenshotAlt="Vehicle and inventory control screen showing asset status tags"
        />
      </Reveal>

      <Reveal>
        <Differentiator
          title="Where Other Systems Stop — LaneOps Starts"
          subtitle="Most tools handle one piece of the job. LaneOps connects all of them."
          items={differentiatorItems}
        />
      </Reveal>

      <Reveal>
        <HowItWorks title="How It Works" steps={howItWorksSteps} />
      </Reveal>

      <Reveal>
        <CallToAction
          variant="dark"
          title="See LaneOps in Action"
          body="A 30-minute walkthrough with your jobs, your crews, your assets. No slides."
          primaryLabel="Book a Demo"
          primaryTo={bookDemoPath}
          secondaryLabel="Talk to us first"
          secondaryTo="/contact"
        />
      </Reveal>
    </>
  )
}

export default Home
