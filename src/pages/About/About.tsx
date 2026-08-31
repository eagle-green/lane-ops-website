import Reveal from '@/components/common/Reveal'
import CallToAction from '@/components/sections/CallToAction'
import PageIntro from '@/components/sections/PageIntro'
import ValueStatement from '@/components/sections/ValueStatement'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

/**
 * Structural placeholder — the feedback brief adds "About" to the nav but
 * supplies no company-story content. Do not fabricate company history here;
 * these two sections are copy placeholders (clearly marked below) for the
 * user to replace with real content.
 */
function About() {
  useDocumentTitle('About — LaneOps', 'About LaneOps — built in BC for traffic control operations.')

  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Built in BC. Built for Traffic Control."
        subheadline="LaneOps is built specifically for the way Canadian traffic-control operations run."
        actions={[{ label: 'Book a Demo', to: bookDemoPath, variant: 'primary' }]}
      />

      <Reveal>
        <ValueStatement
          eyebrow="Our Story"
          headline="Content coming soon"
          body="TODO: replace with the LaneOps founding story — why the company started, who it's for, and what problem it set out to solve."
        />
      </Reveal>

      <Reveal>
        <ValueStatement
          eyebrow="Why We Built LaneOps"
          headline="Content coming soon"
          body="TODO: replace with the reasoning behind LaneOps — the gap in existing traffic-control software this platform was built to close."
        />
      </Reveal>

      <Reveal>
        <CallToAction
          title="See LaneOps in Action"
          body="Book a demo and see how LaneOps fits your operation."
          primaryLabel="Book a Demo"
          primaryTo={bookDemoPath}
        />
      </Reveal>
    </>
  )
}

export default About
