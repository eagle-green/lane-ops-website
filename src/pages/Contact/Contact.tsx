import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import Reveal from '@/components/common/Reveal'
import Button from '@/components/common/Button'
import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import PageIntro from '@/components/sections/PageIntro'
import { CONTACT_EMAIL } from '@/data/contact'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import styles from './Contact.module.css'

/**
 * No content spec or backend was supplied for this page (see
 * docs/IMPLEMENTATION_PLAN.md §2 "Contact form behavior"). Since the site
 * has no backend, this opens the visitor's email client with the message
 * pre-filled via a `mailto:` link rather than posting to a server or an
 * unconfigured third-party form endpoint.
 */
function Contact() {
  useDocumentTitle('Contact — LaneOps', 'Get in touch with the LaneOps team.')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Website inquiry from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Get in Touch"
        subheadline="Have a question about LaneOps or want to see it in action? Send us a message."
        actions={[{ label: 'Book a Demo', to: bookDemoPath, variant: 'primary' }]}
      />

      <Reveal>
        <Section background="white">
          <div className={styles.layout}>
            <div className={styles.context}>
              <Heading level={2} size="lg">
                We&apos;d love to hear from you
              </Heading>
              <p className={styles.contextBody}>
                Whether you&apos;re evaluating LaneOps for your team, have a question about a
                feature, or want a closer look before you commit to anything, send us a message. A
                real person on our team reads every message and replies within one business day.
              </p>

              <div className={styles.emailCard}>
                <p className={styles.emailLabel}>Prefer email?</p>
                <a className={styles.emailValue} href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor={nameId}>
                  Name
                </label>
                <input
                  id={nameId}
                  className={styles.input}
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={emailId}>
                  Email
                </label>
                <input
                  id={emailId}
                  className={styles.input}
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={messageId}>
                  Message
                </label>
                <textarea
                  id={messageId}
                  className={styles.textarea}
                  name="message"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <Button type="submit" variant="primary" fullWidth>
                Send Message
              </Button>
              <p className={styles.formNote}>We typically reply within one business day.</p>
            </form>
          </div>
        </Section>
      </Reveal>
    </>
  )
}

export default Contact
