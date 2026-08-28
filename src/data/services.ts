import type { FeatureItem } from '@/types/common'
import schedulingDispatchThumb from '@/assets/images/cards/scheduling-dispatch-thumb.svg'
import timeTrackingThumb from '@/assets/images/cards/time-tracking-thumb.svg'
import payrollAutomationThumb from '@/assets/images/cards/payroll-automation-thumb.svg'
import autoInvoicingThumb from '@/assets/images/cards/auto-invoicing-thumb.svg'
import vehicleInventoryThumb from '@/assets/images/cards/vehicle-inventory-thumb.svg'
import safetyComplianceThumb from '@/assets/images/cards/safety-compliance-thumb.svg'

/** Home page — Core Features Grid (3x2 teaser). Screenshots are dummy
 * placeholders (see docs/IMPLEMENTATION_PLAN.md §2 "real product-UI
 * screenshots" open item) — swap for real product screenshots once supplied. */
export const homeFeatures: FeatureItem[] = [
  {
    id: 'scheduling-dispatch',
    title: 'Scheduling & Dispatch',
    description:
      'Plan crews and jobs on one board, assign work in seconds, keep every team in sync.',
    icon: 'calendar',
    screenshot: schedulingDispatchThumb,
  },
  {
    id: 'time-tracking',
    title: 'Time Tracking',
    description: 'Clock-in and out per job. No timesheets to chase on Friday afternoon.',
    icon: 'clock',
    screenshot: timeTrackingThumb,
  },
  {
    id: 'payroll-automation',
    title: 'Payroll Automation',
    description: 'Approved hours become payroll-ready numbers with no manual re-entry.',
    icon: 'coins',
    screenshot: payrollAutomationThumb,
  },
  {
    id: 'auto-invoicing',
    title: 'Auto Invoicing',
    description: 'Invoices generate straight from completed jobs, so nothing slips.',
    icon: 'receipt',
    screenshot: autoInvoicingThumb,
  },
  {
    id: 'vehicle-inventory-control',
    title: 'Vehicle & Inventory Control',
    description: 'What equipment is where, what condition it is in, what needs attention.',
    icon: 'truck',
    screenshot: vehicleInventoryThumb,
  },
  {
    id: 'safety-reporting',
    title: 'Safety & Compliance',
    description: 'FLRAs, traffic management plans and incident reports, tied to the job record.',
    icon: 'shield',
    screenshot: safetyComplianceThumb,
  },
]

/** Features page — sticky sub-nav tabs, in display order. */
export const featureNavTabs = [
  { id: 'dispatch', label: 'Dispatch' },
  { id: 'time-tracking', label: 'Time Tracking' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'payroll', label: 'Payroll' },
  { id: 'compliance', label: 'Compliance' },
] as const

/** Features page — one deep-dive FeatureDetail block per module, keyed to featureNavTabs ids. */
export const featureModules: FeatureItem[] = [
  {
    id: 'dispatch',
    title: 'Dispatch',
    description:
      'See every crew and job on one live board, and assign work without a single phone call.',
    bullets: [
      'Drag-and-drop job assignment by crew or vehicle',
      'Real-time status updates from the field',
      'Conflict detection for double-booked crews or vehicles',
      'Job notes and attachments visible to dispatch and crew',
      'Daily and weekly schedule views',
    ],
  },
  {
    id: 'time-tracking',
    title: 'Time Tracking',
    description:
      'Every hour tied to a job automatically, so payroll and billing start from accurate data.',
    bullets: [
      'Mobile clock-in/clock-out per job',
      'Automatic overtime and break tracking',
      'Timesheet approvals before payroll runs',
      'Exportable, audit-ready time records',
    ],
  },
  {
    id: 'inventory',
    title: 'Vehicle & Inventory Control',
    description:
      'Know what equipment exists, where it is, and whether it is ready for the next job.',
    bullets: [
      'Vehicle and equipment status tags (adequate / repair / inactive)',
      'Maintenance scheduling and history per asset',
      'Inventory counts tied to jobs and locations',
      'Low-stock and service-due alerts',
      'Assignment history — who had what, and when',
      'Photo documentation of condition at checkout/return',
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll & Invoicing',
    description:
      'Tracked hours and completed jobs flow straight into payroll and billing, automatically.',
    bullets: [
      'Payroll-ready exports from approved timesheets',
      'Auto-generated invoices from completed jobs',
      'Rate rules by crew, role, or job type',
      'Missed-billing detection',
      'Payment and invoice status tracking',
    ],
  },
  {
    id: 'compliance',
    title: 'Safety & Compliance',
    description:
      'FLRAs, traffic management plans, and incident reports, all attached to the job record.',
    bullets: [
      'Field-Level Risk Assessments (FLRAs) per job',
      'Traffic Management Plans stored with the job',
      'Incident reporting from the field',
      'Photo and document attachments per record',
      'Per-job compliance history for audits',
    ],
  },
]
