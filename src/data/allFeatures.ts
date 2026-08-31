import type { FeatureCategory } from '@/types/common'

/**
 * All Features page — full LaneOps feature catalog, organized under the 22
 * categories specified in the traffic-control feedback brief. Items are
 * drawn from the same brief's section-by-section detail where it was given;
 * for categories the brief named but didn't detail (Notifications, Document
 * Management, Security & Administration), items are kept conservative and
 * traceable to what the brief did say elsewhere, rather than invented.
 */
export const allFeatureCategories: FeatureCategory[] = [
  {
    id: 'job-management',
    title: 'Job Management',
    items: [
      'Create jobs, assign crews, and move schedules from one dispatch centre',
      'Multi-day & multi-location jobs',
      'Recurring jobs without rebuilding schedules',
    ],
  },
  {
    id: 'dispatch',
    title: 'Dispatch',
    items: [
      'Real-time view of active jobs, available workers, and available vehicles',
      'TCPs & LCTs, supervisors, and equipment availability at a glance',
      'Open shifts and unassigned jobs',
      'Drag-and-drop scheduling',
      'Regional dispatch and emergency dispatch',
    ],
  },
  {
    id: 'workforce-management',
    title: 'Workforce Management',
    items: [
      'Complete employee profiles — contact, position, region, wage, hire date, status',
      'Digital availability, vacation, and time-off submissions',
      'Employee documents — hiring packages, licences, contracts, orientations',
      'Job history — completed jobs, timesheets, incidents, employment history',
    ],
  },
  {
    id: 'employee-performance',
    title: 'Employee Performance',
    items: [
      'Employee KPIs and performance trends',
      'Positive recognition and incident tracking',
      'Monthly and annual performance reports',
    ],
  },
  {
    id: 'attendance-conduct',
    title: 'Attendance & Conduct',
    items: [
      'Attendance and conduct tracking tied to each employee record',
      'Identify top performers and employees who may need support',
    ],
  },
  {
    id: 'employee-certifications',
    title: 'Employee Certifications',
    items: [
      'Track TCP certification, driver’s licence, First Aid, and safety certificates',
      'Company, customer, and site orientations',
      'Expiry notifications before a certification becomes an operational problem',
    ],
  },
  {
    id: 'safety-management',
    title: 'Safety Management',
    items: [
      'Digital Field-Level Risk Assessments (FLRAs), searchable by customer, site, employee, and date',
      'Incident reporting — injuries, property damage, near misses, investigations',
      'Safety documentation — manuals, policies, procedures, toolbox talks',
    ],
  },
  {
    id: 'digital-timesheets',
    title: 'Digital Timesheets',
    items: [
      'Draft → Submitted → Manager Review → Approved → Payroll Ready → Billing Ready',
      'Missing timesheet detection',
    ],
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management',
    items: [
      'Vehicle profiles — VIN, plate, unit number, make, model, driver, region',
      'Active, inactive, and repair status per vehicle',
      'Vehicle history — repairs, maintenance, driver changes, transfers',
    ],
  },
  {
    id: 'vehicle-inventory',
    title: 'Vehicle Inventory',
    items: [
      'Track signs, cones, delineators, radios, batteries, tools, and PPE per vehicle',
      'See what should be on a vehicle, what is there, and what is missing',
    ],
  },
  {
    id: 'vehicle-inspections',
    title: 'Vehicle Inspections',
    items: ['Digital pre-trip and post-trip inspections', 'Defect reporting and vehicle audits'],
  },
  {
    id: 'warehouse-inventory',
    title: 'Warehouse Inventory',
    items: [
      'Current stock across warehouse, vehicle, and employee locations',
      'Assigned, available, and missing inventory',
      'Low-stock visibility',
    ],
  },
  {
    id: 'inventory-transfers',
    title: 'Inventory Transfers',
    items: [
      'Transfer inventory between warehouse, vehicle, and job site',
      'Inventory discrepancy tracking',
    ],
  },
  {
    id: 'customer-management',
    title: 'Customer Management',
    items: [
      'Customer, billing contact, foreman, and project manager records',
      'Multiple locations and regional information per customer',
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting',
    items: [
      'Dashboards across jobs, workforce, vehicles, inventory, payroll, billing, and attendance',
    ],
  },
  {
    id: 'invoicing',
    title: 'Invoicing',
    items: [
      'Auto-generated invoices from completed jobs',
      'Rate rules by crew, role, or job type',
      'Missed-billing detection',
    ],
  },
  {
    id: 'equipment-rentals',
    title: 'Equipment Rentals',
    items: [
      'Truck → job site → timecard → rental → invoice, tracked automatically',
      'Rental billing continues until equipment is returned',
    ],
  },
  {
    id: 'accounts-receivable',
    title: 'Accounts Receivable',
    items: ['Payment and invoice status tracking'],
  },
  {
    id: 'payroll',
    title: 'Payroll',
    items: [
      'Employee wage rates, overtime, and shift premiums',
      'Statutory holidays, deductions, bonuses, and multi-rate work',
    ],
  },
  {
    id: 'scheduling-intelligence',
    title: 'Scheduling Intelligence',
    items: [
      'Checks certification validity, licence validity, and orientation completion before scheduling',
      'Flags vehicle/equipment availability and time-off conflicts',
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    items: ['Certification expiry alerts', 'Missing timesheet alerts'],
  },
  {
    id: 'document-management',
    title: 'Document Management',
    items: [
      'Store licences, certifications, contracts, and orientation records',
      'Safety documentation storage',
    ],
  },
  {
    id: 'security-administration',
    title: 'Security & Administration',
    items: ['Advanced administration controls', 'Audit history'],
  },
]
