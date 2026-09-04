import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import Reveal from '@/components/common/Reveal'
import Section from '@/components/common/Section'
import CallToAction from '@/components/sections/CallToAction'
import Differentiator from '@/components/sections/Differentiator'
import DispatchPreview from '@/components/sections/DispatchPreview'
import FeatureGrid from '@/components/sections/FeatureGrid'
import HomeHero from '@/components/sections/HomeHero'
import HowItWorks from '@/components/sections/HowItWorks'
import Marquee from '@/components/sections/Marquee'
import StatsCounter from '@/components/sections/StatsCounter'
import TrustBand from '@/components/sections/TrustBand'
import ValueStatement from '@/components/sections/ValueStatement'
import VehicleInventorySpotlight from '@/components/sections/VehicleInventorySpotlight'
import WorkflowDiagram from '@/components/sections/WorkflowDiagram'
import homeDashboard from '@/assets/images/home-dashboard.png'
import inventoryResponsiveViews from '@/assets/images/inventory-responsive-views.png'
import liveDispatchNote from '@/assets/images/live-dispatch-note.png'
import { audiences } from '@/data/audiences'
import { differentiatorItems, roiValueCards } from '@/data/benefits'
import { bookDemoPath } from '@/data/navigation'
import { homeFeatures } from '@/data/services'
import { homeStats } from '@/data/stats'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import styles from './Home.module.css'

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
    id: 'manage-timesheets',
    title: 'Manage Timesheets',
    description:
      'Submitted hours move from draft to manager review to approved, all before payroll or billing ever touches them. Missing-timesheet detection catches gaps before they become a problem.',
    chips: ['manager approval', 'missing-timesheet detection', 'payroll-ready'],
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
    'LaneOps — The Operating Platform for Traffic Control Companies',
    'LaneOps connects dispatch, workforce, fleet, equipment, safety, timecards, payroll and billing in one platform built for traffic control operations.',
  )

  return (
    <>
      <HomeHero
        eyebrow="Built for Canadian Traffic Control"
        headline="Traffic Control Operations."
        headlineAccent="One Connected Platform."
        subheadline="LaneOps connects your dispatchers, field crews, supervisors, vehicles, equipment, safety, timecards, payroll and customer billing in one platform built around traffic-control operations."
        tagline="No disconnected systems. No duplicate entry. No forgotten equipment. No missed billing."
        footnote="Built in BC. Built for Traffic Control."
        actions={[
          { label: 'Book a Demo', to: bookDemoPath, variant: 'primary' },
          { label: 'See How It Works', to: '/how-it-works', variant: 'outline' },
        ]}
        screenshotSrc={homeDashboard}
        screenshotAlt="LaneOps Board View showing job cards with crew assignments and worker status, on desktop and mobile"
      />

      <Marquee items={marqueeItems} />

      <Reveal>
        <ValueStatement
          headline="Stop Managing Software. Start Running Your Operation."
          body="Traffic-control operations involve more than scheduling workers. Every job involves employees, certifications, vehicles, signs, equipment, safety documentation, timecards, payroll and customer billing. LaneOps connects all of it."
        />
      </Reveal>

      <Reveal>
        <Section background="white">
          <WorkflowDiagram
            steps={[
              'Job',
              'Dispatch',
              'Crew',
              'Vehicle',
              'Equipment',
              'Timecard',
              'Payroll',
              'Invoice',
            ]}
          />
          <p className={styles.workflowStatement}>
            Enter the information once. LaneOps carries it through the entire operation.
          </p>
        </Section>
      </Reveal>

      <StatsCounter
        stats={homeStats}
        footnote="Example figures for a typical mid-size traffic control operation."
      />

      <Reveal>
        <TrustBand
          highlight="Certification Tracking"
          title="LaneOps Checks More Than Availability"
          body="Scheduling a traffic control worker takes more than finding someone who isn't working. LaneOps blocks the assignment when a requirement isn't met — the right worker, on the right job, with the right qualifications."
          checklist={[
            'TCP Certification Valid',
            "Driver's Licence Valid",
            'Required Orientation Complete',
            'Employee Available',
            'Vehicle Available',
            'Equipment Available',
            'No Time-Off Conflict',
            'Worker Compatibility',
          ]}
          background="white"
        />
      </Reveal>

      <Reveal>
        <FeatureGrid
          eyebrow="The platform"
          title="Everything You Need, Built In"
          features={homeFeatures}
        />
      </Reveal>

      <DispatchPreview
        screenshotSrc={liveDispatchNote}
        screenshotAlt="LaneOps Dispatch Note screen showing active crews, pending acceptance, and job assignments for Riverside Metro"
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
          screenshotSrc={inventoryResponsiveViews}
          screenshotAlt="LaneOps Inventory screen showing traffic control signs and stock counts, on desktop, tablet, and mobile"
        />
      </Reveal>

      <Reveal>
        <Differentiator
          title="Where Other Systems Stop — LaneOps Starts"
          subtitle="Still running things through spreadsheets, whiteboards, paper timesheets, or a general field-service tool that wasn't built for TCPs? Here's what changes."
          items={differentiatorItems}
        />
        <Container className={styles.sectionLinkWrapper}>
          <Link to="/why-laneops" className={styles.sectionLink}>
            See why traffic control operations choose LaneOps →
          </Link>
        </Container>
      </Reveal>

      <Reveal>
        <HowItWorks title="How It Works" steps={howItWorksSteps} />
      </Reveal>

      <Reveal>
        <Differentiator
          title="LaneOps Is Designed to Find the Revenue Your Operation Is Already Earning"
          items={roiValueCards}
        />
      </Reveal>

      <Reveal>
        <CallToAction
          variant="dark"
          eyebrow="Ready to See LaneOps?"
          title="See What Your Traffic Control Operation Looks Like When Everything Is Connected."
          body="Discover how LaneOps can connect your dispatch, workforce, fleet, equipment, safety, timecards, payroll and billing."
          primaryLabel="Book Your LaneOps Demo"
          primaryTo={bookDemoPath}
          secondaryLabel="Talk to us first"
          secondaryTo="/contact"
          footnote="Built in BC. Built for Traffic Control."
        />
      </Reveal>
    </>
  )
}

export default Home
