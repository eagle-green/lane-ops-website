import { Navigate, useParams } from 'react-router-dom'
import Heading from '@/components/common/Heading'
import Reveal from '@/components/common/Reveal'
import Section from '@/components/common/Section'
import CallToAction from '@/components/sections/CallToAction'
import Hero from '@/components/sections/Hero'
import TrustBand from '@/components/sections/TrustBand'
import WorkflowDiagram from '@/components/sections/WorkflowDiagram'
import { bookDemoPath } from '@/data/navigation'
import { getPlatformCategory } from '@/data/platformCategories'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import styles from './PlatformCategory.module.css'

const STATUS_TAGS = [
  { id: 'adequate', label: 'Adequate', className: styles.statusAdequate },
  { id: 'repair', label: 'Repair', className: styles.statusRepair },
  { id: 'inactive', label: 'Inactive', className: styles.statusInactive },
] as const

function PlatformCategory() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = categoryId ? getPlatformCategory(categoryId) : undefined

  useDocumentTitle(
    category ? `${category.navLabel} — LaneOps` : 'Platform — LaneOps',
    category?.intro ?? '',
  )

  if (!category) {
    return <Navigate to="/features" replace />
  }

  return (
    <>
      <Hero
        eyebrow={category.eyebrow}
        headline={category.title}
        subheadline={category.intro}
        actions={[
          { label: 'Book a Demo', to: bookDemoPath, variant: 'primary' },
          { label: 'All Platform Features', to: '/features', variant: 'secondary' },
        ]}
        screenshotSrc={category.screenshot}
        screenshotAlt={category.screenshotAlt}
        screenshotChrome={category.screenshotChrome ?? true}
      />

      {category.sections.map((section, sectionIndex) => (
        <Reveal key={section.heading}>
          <Section background={sectionIndex % 2 === 0 ? 'white' : 'muted'}>
            <div className={styles.sectionInner}>
              <Heading level={2} size="lg">
                {section.heading}
              </Heading>
              {section.body && <p className={styles.sectionBody}>{section.body}</p>}
              <ul className={styles.bullets}>
                {section.bullets.map((bullet) => (
                  <li key={bullet} className={styles.bulletItem}>
                    <svg
                      className={styles.bulletIcon}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {category.showStatusTags && sectionIndex === 0 && (
                <div className={styles.statusTags}>
                  {STATUS_TAGS.map((tag) => (
                    <span key={tag.id} className={`${styles.statusTag} ${tag.className}`}>
                      <span className={styles.statusDot} aria-hidden="true" />
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Section>
        </Reveal>
      ))}

      {category.checklist && (
        <Reveal>
          <TrustBand
            highlight={category.eyebrow}
            title={category.checklist.title}
            body={category.checklist.body}
            checklist={category.checklist.items}
            background="white"
          />
        </Reveal>
      )}

      {category.workflow && (
        <Reveal>
          <Section background={category.workflow.tone === 'dark' ? 'dark' : 'muted'}>
            <p
              className={
                category.workflow.tone === 'dark' ? styles.diagramLabelDark : styles.diagramLabel
              }
            >
              {category.workflow.label}
            </p>
            <WorkflowDiagram
              steps={category.workflow.steps}
              branches={category.workflow.branches}
              tone={category.workflow.tone}
            />
            <p
              className={
                category.workflow.tone === 'dark'
                  ? styles.diagramStatementDark
                  : styles.diagramStatement
              }
            >
              {category.workflow.statement}
            </p>
          </Section>
        </Reveal>
      )}

      <Reveal>
        <CallToAction
          title={category.ctaTitle}
          body={category.ctaBody}
          primaryLabel="Book a Demo"
          primaryTo={bookDemoPath}
        />
      </Reveal>
    </>
  )
}

export default PlatformCategory
