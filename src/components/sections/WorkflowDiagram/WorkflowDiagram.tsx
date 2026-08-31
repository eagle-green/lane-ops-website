import styles from './WorkflowDiagram.module.css'

interface WorkflowDiagramProps {
  steps: string[]
  branches?: string[]
  tone?: 'light' | 'dark'
}

function Arrow({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M2 8h11M9 4l4 4-4 4"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Renders a horizontal (desktop) / vertical (mobile) chain of labeled steps
 * connected by arrows. An optional `branches` list fans out from the end of
 * the chain (e.g. one timecard splitting into payroll/billing/rentals/
 * reporting) rather than continuing the linear chain.
 */
function WorkflowDiagram({ steps, branches, tone = 'light' }: WorkflowDiagramProps) {
  const rootClass = tone === 'dark' ? `${styles.root} ${styles.dark}` : styles.root

  return (
    <div className={rootClass}>
      <ol className={styles.chain}>
        {steps.map((step, index) => (
          <li key={step} className={styles.chainItem}>
            <span className={styles.step}>{step}</span>
            {index < steps.length - 1 && <Arrow className={styles.arrow!} />}
          </li>
        ))}
      </ol>

      {branches && branches.length > 0 && (
        <div className={styles.branchWrapper}>
          <Arrow className={styles.branchArrow!} />
          <ul className={styles.branches}>
            {branches.map((branch) => (
              <li key={branch} className={styles.branch}>
                {branch}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default WorkflowDiagram
