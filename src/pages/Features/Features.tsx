import Reveal from '@/components/common/Reveal'
import Benefits from '@/components/sections/Benefits'
import CallToAction from '@/components/sections/CallToAction'
import FeatureDetail from '@/components/sections/FeatureDetail'
import FeatureNav from '@/components/sections/FeatureNav'
import Hero from '@/components/sections/Hero'
import ModuleGrid from '@/components/sections/ModuleGrid'
import featuresHero from '@/assets/images/features-hero.svg'
import dispatchBoard from '@/assets/images/dispatch-board.svg'
import timeTracking from '@/assets/images/time-tracking.svg'
import vehicleInventory from '@/assets/images/vehicle-inventory.svg'
import payrollInvoicing from '@/assets/images/payroll-invoicing.svg'
import safetyCompliance from '@/assets/images/safety-compliance.svg'
import systemOverview from '@/assets/images/system-overview.svg'
import { featuresResults } from '@/data/benefits'
import { systemOverviewModules } from '@/data/modules'
import { bookDemoPath } from '@/data/navigation'
import { featureModules, featureNavTabs } from '@/data/services'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const moduleScreenshots: Record<string, { src: string; alt: string }> = {
  dispatch: { src: dispatchBoard, alt: 'Dispatch board showing crew and job assignments' },
  'time-tracking': {
    src: timeTracking,
    alt: 'Time tracking screen showing clock-in and clock-out records',
  },
  inventory: {
    src: vehicleInventory,
    alt: 'Vehicle and inventory control screen showing asset status tags',
  },
  payroll: {
    src: payrollInvoicing,
    alt: 'Payroll and invoicing screen showing job billing status',
  },
  compliance: {
    src: safetyCompliance,
    alt: 'Safety and compliance screen showing FLRAs and incident reports',
  },
}

function Features() {
  useDocumentTitle(
    'Features — LaneOps',
    'Dispatch, time tracking, vehicle and inventory control, payroll and invoicing, and safety and compliance, in one system.',
  )

  return (
    <>
      <Hero
        eyebrow="Features"
        headline="Everything You Need to Run Field Operations"
        subheadline="One connected system for scheduling, dispatch, time tracking, payroll, vehicle and inventory control, and compliance."
        bullets={[
          'Live dispatch board for every crew and job',
          'Automatic time tracking tied to each job',
          'Vehicle and inventory status at a glance',
          'Payroll and invoicing without manual re-entry',
        ]}
        actions={[
          { label: 'Book a Demo', to: bookDemoPath, variant: 'primary' },
          { label: 'View Platform', to: '#dispatch', variant: 'secondary' },
        ]}
        screenshotSrc={featuresHero}
        screenshotAlt="LaneOps dispatch board overview"
      />

      <FeatureNav tabs={featureNavTabs} />

      {featureModules.map((feature, index) => {
        const shot = moduleScreenshots[feature.id]
        if (!shot) return null
        return (
          <Reveal key={feature.id}>
            <FeatureDetail
              feature={feature}
              screenshotSrc={shot.src}
              screenshotAlt={shot.alt}
              reverse={index % 2 === 1}
              showStatusTags={feature.id === 'inventory'}
              background={index % 2 === 0 ? 'white' : 'muted'}
            />
          </Reveal>
        )
      })}

      <Reveal>
        <ModuleGrid
          layout="grid"
          headline="One System. Total Control."
          body="Every module below shares the same job, crew, and asset records, so nothing has to be re-entered twice."
          modules={systemOverviewModules}
          screenshotSrc={systemOverview}
          screenshotAlt="System overview showing jobs, dispatch, vehicles, inventory, employees, clients, reports, and payroll modules"
        />
      </Reveal>

      <Reveal>
        <Benefits
          title="Results Teams See With LaneOps"
          items={featuresResults}
          background="muted"
        />
      </Reveal>

      <Reveal>
        <CallToAction
          title="See How LaneOps Works in the Field"
          body="Book a demo and walk through the platform with your own operation in mind."
          primaryLabel="Book a Demo"
          primaryTo={bookDemoPath}
        />
      </Reveal>
    </>
  )
}

export default Features
