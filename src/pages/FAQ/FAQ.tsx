import Reveal from '@/components/common/Reveal'
import CallToAction from '@/components/sections/CallToAction'
import FAQAccordion from '@/components/sections/FAQAccordion'
import PageIntro from '@/components/sections/PageIntro'
import { faqItems } from '@/data/faq'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

function FAQ() {
  useDocumentTitle(
    'FAQ — LaneOps',
    'Answers to common questions about LaneOps, including regions supported, data hosting, and onboarding.',
  )

  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subheadline="Answers to the questions we hear most from traffic control operations evaluating LaneOps."
        actions={[{ label: 'Book a Demo', to: bookDemoPath, variant: 'primary' }]}
      />

      <Reveal>
        <FAQAccordion title="Common Questions" items={faqItems} />
      </Reveal>

      <Reveal>
        <CallToAction
          title="Still Have Questions?"
          body="Send us a message and a real person on our team will get back to you."
          primaryLabel="Contact Us"
          primaryTo="/contact"
        />
      </Reveal>
    </>
  )
}

export default FAQ
