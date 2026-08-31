import { Link } from 'react-router-dom'
import Card from '@/components/common/Card'
import Heading from '@/components/common/Heading'
import Reveal from '@/components/common/Reveal'
import Section from '@/components/common/Section'
import Benefits from '@/components/sections/Benefits'
import CallToAction from '@/components/sections/CallToAction'
import Hero from '@/components/sections/Hero'
import ModuleGrid from '@/components/sections/ModuleGrid'
import featuresHero from '@/assets/images/features-hero.svg'
import systemOverview from '@/assets/images/system-overview.svg'
import { featuresResults } from '@/data/benefits'
import { systemOverviewModules } from '@/data/modules'
import { bookDemoPath } from '@/data/navigation'
import { platformCategories } from '@/data/platformCategories'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import styles from './Features.module.css'

function Features() {
  useDocumentTitle(
    'Platform — LaneOps',
    'Dispatch, workforce, fleet, equipment, safety, timecards, payroll, billing, and reporting, in one traffic-control platform.',
  )

  return (
    <>
      <Hero
        eyebrow="Platform"
        headline="The Operating Platform for Traffic Control Companies"
        subheadline="Dispatch, workforce, fleet, equipment, safety, timecards, payroll, billing, and reporting — connected in one system built around traffic-control operations."
        bullets={[
          'Live dispatch board for every crew, vehicle, and job',
          'Certifications and scheduling intelligence tied to every worker',
          'Fleet, equipment, and warehouse inventory in one connected view',
          'Timecards that drive payroll and billing automatically',
        ]}
        actions={[
          { label: 'Book a Demo', to: bookDemoPath, variant: 'primary' },
          { label: 'See All Features', to: '/features/all', variant: 'secondary' },
        ]}
        screenshotSrc={featuresHero}
        screenshotAlt="LaneOps dispatch and scheduling dashboard overview"
      />

      <Reveal>
        <Section background="white">
          <div className={styles.gridHeader}>
            <Heading level={2} align="center">
              Explore the Platform, Category by Category
            </Heading>
            <p className={styles.gridSubtitle}>
              Every category below is connected to the same job, crew, and asset records.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {platformCategories.map((category) => (
              <Link key={category.id} to={`/features/${category.id}`} className={styles.cardLink}>
                <Card className={styles.card}>
                  <p className={styles.cardEyebrow}>{category.eyebrow}</p>
                  <Heading level={3} size="sm">
                    {category.navLabel}
                  </Heading>
                  <p className={styles.cardIntro}>{category.intro}</p>
                  <span className={styles.cardCta}>Explore {category.navLabel} →</span>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      </Reveal>

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
