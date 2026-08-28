export type IconName =
  | 'calendar'
  | 'clock'
  | 'coins'
  | 'receipt'
  | 'truck'
  | 'shield'
  | 'trending-up'
  | 'zap'
  | 'eye'
  | 'fuel'
  | 'user'
  | 'wrench'
  | 'users'

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

const STROKE_PROPS = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function IconPath({ name }: { name: IconName }) {
  switch (name) {
    case 'calendar':
      return (
        <g {...STROKE_PROPS}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="8" y1="3" x2="8" y2="7" />
          <line x1="16" y1="3" x2="16" y2="7" />
        </g>
      )
    case 'clock':
      return (
        <g {...STROKE_PROPS}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 16 14" />
        </g>
      )
    case 'coins':
      return (
        <g {...STROKE_PROPS}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </g>
      )
    case 'receipt':
      return (
        <g {...STROKE_PROPS}>
          <path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2z" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <line x1="9" y1="11" x2="15" y2="11" />
          <line x1="9" y1="15" x2="13" y2="15" />
        </g>
      )
    case 'truck':
      return (
        <g {...STROKE_PROPS}>
          <rect x="1" y="7" width="14" height="10" rx="1" />
          <path d="M15 10h4l3 3v4h-7z" />
          <circle cx="6" cy="19" r="1.6" />
          <circle cx="17.5" cy="19" r="1.6" />
        </g>
      )
    case 'shield':
      return (
        <g {...STROKE_PROPS}>
          <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" />
          <polyline points="8.5 12 11 14.5 15.5 9.5" />
        </g>
      )
    case 'trending-up':
      return (
        <g {...STROKE_PROPS}>
          <polyline points="3 17 9 11 13 15 21 6" />
          <polyline points="15 6 21 6 21 12" />
        </g>
      )
    case 'zap':
      return <polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2" fill="currentColor" />
    case 'eye':
      return (
        <g {...STROKE_PROPS}>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
          <circle cx="12" cy="12" r="3" />
        </g>
      )
    case 'fuel':
      return (
        <g {...STROKE_PROPS}>
          <path d="M4 21V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14" />
          <line x1="2" y1="21" x2="16" y2="21" />
          <path d="M14 8h2l3 3v6a1.5 1.5 0 0 1-3 0v-3h-2" />
          <line x1="6" y1="6" x2="10" y2="6" />
        </g>
      )
    case 'user':
      return (
        <g {...STROKE_PROPS}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </g>
      )
    case 'wrench':
      return (
        <g {...STROKE_PROPS}>
          <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3 3-2-2 3-3z" />
        </g>
      )
    case 'users':
      return (
        <g {...STROKE_PROPS}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
          <circle cx="17" cy="8.5" r="2.6" />
          <path d="M15 13.2c2.7.4 4.8 2.7 5 5.6" />
        </g>
      )
  }
}

function Icon({ name, size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <IconPath name={name} />
    </svg>
  )
}

export default Icon
