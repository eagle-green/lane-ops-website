import Card from '@/components/common/Card'
import Heading from '@/components/common/Heading'
import Reveal from '@/components/common/Reveal'
import Section from '@/components/common/Section'
import CallToAction from '@/components/sections/CallToAction'
import PageIntro from '@/components/sections/PageIntro'
import { allFeatureCategories } from '@/data/allFeatures'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import styles from './AllFeatures.module.css'

function AllFeatures() {
  useDocumentTitle(
    'All Features — LaneOps',
    'The complete LaneOps feature catalog, organized by category — dispatch, workforce, fleet, safety, timecards, payroll, billing, and reporting.',
  )

  return (
    <>
      <PageIntro
        eyebrow="All Features"
        title="Every LaneOps Feature, In One Place"
        subheadline="The complete platform, organized by category."
        actions={[{ label: 'Book a Demo', to: bookDemoPath, variant: 'primary' }]}
      />

      <Reveal>
        <Section background="white">
          <div className={styles.grid}>
            {allFeatureCategories.map((category) => (
              <Card key={category.id} hoverLift={false} className={styles.card}>
                <Heading level={2} size="sm">
                  {category.title}
                </Heading>
                <ul className={styles.list}>
                  {category.items.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <span className={styles.dot} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <CallToAction
          title="See LaneOps in Action"
          body="Book a demo and see how the full platform fits your operation."
          primaryLabel="Book a Demo"
          primaryTo={bookDemoPath}
        />
      </Reveal>
    </>
  )
}

export default AllFeatures
