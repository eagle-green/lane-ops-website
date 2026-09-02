import Image from '../Image'
import styles from './ProductScreenshot.module.css'

interface ProductScreenshotProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  /** Set false when the image already has its own realistic browser/app
   * chrome baked in — avoids stacking a second, fake chrome bar on top. */
  chrome?: boolean
}

function ProductScreenshot({
  src,
  alt,
  className,
  priority = false,
  chrome = true,
}: ProductScreenshotProps) {
  const classes = [styles.frame, className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {chrome && (
        <div className={styles.chrome} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      )}
      <div className={styles.screen}>
        <Image src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} />
      </div>
    </div>
  )
}

export default ProductScreenshot
