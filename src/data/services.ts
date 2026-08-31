import type { FeatureItem } from '@/types/common'
import schedulingDispatchThumb from '@/assets/images/cards/scheduling-dispatch-thumb.svg'
import timeTrackingThumb from '@/assets/images/cards/time-tracking-thumb.svg'
import payrollAutomationThumb from '@/assets/images/cards/payroll-automation-thumb.svg'
import autoInvoicingThumb from '@/assets/images/cards/auto-invoicing-thumb.svg'
import vehicleInventoryThumb from '@/assets/images/cards/vehicle-inventory-thumb.svg'
import safetyComplianceThumb from '@/assets/images/cards/safety-compliance-thumb.svg'

/** Home page — Core Features Grid (3x2 teaser). Screenshots are dummy
 * placeholders — swap for real product screenshots once supplied. */
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
