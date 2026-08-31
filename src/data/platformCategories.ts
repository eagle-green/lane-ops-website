import dispatchBoard from '@/assets/images/dispatch-board.svg'
import workforceManagement from '@/assets/images/workforce-management.svg'
import vehicleInventory from '@/assets/images/vehicle-inventory.svg'
import inventoryEquipment from '@/assets/images/inventory-equipment.svg'
import safetyCompliance from '@/assets/images/safety-compliance.svg'
import timeTracking from '@/assets/images/time-tracking.svg'
import payrollInvoicing from '@/assets/images/payroll-invoicing.svg'
import reportingDashboard from '@/assets/images/reporting-dashboard.svg'

export interface PlatformCategorySection {
  heading: string
  body?: string
  bullets: string[]
}

export interface PlatformCategoryWorkflow {
  label: string
  steps: string[]
  branches?: string[]
  statement: string
  tone?: 'light' | 'dark'
}

export interface PlatformCategoryChecklist {
  title: string
  body: string
  items: string[]
}

export interface PlatformCategoryDetail {
  id: string
  navLabel: string
  eyebrow: string
  title: string
  intro: string
  screenshot: string
  screenshotAlt: string
  showStatusTags?: boolean
  sections: PlatformCategorySection[]
  workflow?: PlatformCategoryWorkflow
  checklist?: PlatformCategoryChecklist
  ctaTitle: string
  ctaBody: string
}

/**
 * One page per Platform category (moved out of the single scrolling Features
 * page per the user's request for dedicated pages with more depth). Content
 * expands on the same traffic-control feedback brief (Sections 3–18) used to
 * build the original condensed version in services.ts.
 */
export const platformCategories: PlatformCategoryDetail[] = [
  {
    id: 'dispatch-scheduling',
    navLabel: 'Dispatch & Scheduling',
    eyebrow: 'Operations',
    title: 'See Your Entire Operation From One Dispatch Screen',
    intro:
      'Give dispatchers a real-time view of the people, vehicles, equipment and jobs required to run the day — then create jobs, assign crews, move schedules and respond to changes from one connected dispatch centre.',
    screenshot: dispatchBoard,
    screenshotAlt: 'Dispatch board showing crew, vehicle, and job assignments',
    sections: [
      {
        heading: 'Everything Dispatch Needs to See',
        body: 'One screen replaces the whiteboard, the group chat, and the phone tag.',
        bullets: [
          'Active Jobs — every job in progress, at a glance',
          'Available Workers — who is free right now, region by region',
          'TCPs & LCTs — certified traffic control and lane closure personnel, ready to assign',
          'Supervisors — who is covering which sites today',
          'Available Vehicles — which trucks and units are free to dispatch',
          'Equipment Availability — signs, cones, and devices ready to go out',
          'Open Shifts — gaps in tomorrow’s schedule before they become a problem',
          'Unassigned Jobs — nothing falls through the cracks',
          'Regional Operations — multiple regions, one dispatch view',
          'Emergency Dispatch — reroute crews and equipment the moment a call comes in',
        ],
      },
      {
        heading: 'Move Fast Without Losing Control',
        bullets: [
          'Drag-and-Drop Scheduling — move workers and resources between jobs in seconds',
          'Multi-Day & Multi-Location Jobs — manage complex projects across dates and sites',
          'Recurring Jobs — create repeat work without rebuilding the schedule from scratch',
          'Regional Dispatch — manage separate operating regions from the same platform',
        ],
      },
    ],
    checklist: {
      title: 'LaneOps Checks More Than Availability',
      body: 'Scheduling a traffic-control worker requires more than finding someone who isn’t working. LaneOps can help prevent assignments when requirements aren’t met — putting the right worker on the right job with the right qualifications.',
      items: [
        'TCP Certification Valid',
        "Driver's Licence Valid",
        'Required Orientation Complete',
        'Employee Available',
        'Vehicle Available',
        'Equipment Available',
        'No Time-Off Conflict',
        'Worker Compatibility',
      ],
    },
    ctaTitle: 'See the Dispatch Board in Action',
    ctaBody: 'Book a demo and walk through a real day of dispatch with your own operation in mind.',
  },
  {
    id: 'workforce-management',
    navLabel: 'Workforce Management',
    eyebrow: 'Your People',
    title: 'Know Your Workforce — Not Just Their Schedule',
    intro:
      'Every employee has a complete digital profile containing the information management needs to schedule, manage and support the workforce.',
    screenshot: workforceManagement,
    screenshotAlt: 'Workforce management screen showing employee profiles and certifications',
    sections: [
      {
        heading: 'A Complete Employee Profile',
        bullets: [
          'Employee Profiles — contact information, emergency contacts, position, region, wage information, hire date, status and employment information',
          'Certifications — Traffic Control Certification, driver’s licences, First Aid, safety certificates and required orientations',
          'Availability — employees submit availability, vacation requests and time-off requests digitally',
          'Employee Documents — hiring packages, licences, certifications, signed documents, contracts and orientations',
          'Job History — completed jobs, accepted work, timesheets, incidents and employment history',
        ],
      },
      {
        heading: "Know Who's Performing—Within Seconds",
        body: 'Turn attendance, conduct and job history into useful management information.',
        bullets: [
          'Attendance and conduct tracked against every job',
          'Completed jobs and employee KPIs',
          'Positive recognition, alongside incidents that need follow-up',
          'Performance trends, with monthly and annual reports',
        ],
      },
      {
        heading: "Don't Find Out a Certification Expired at Dispatch",
        body: 'LaneOps monitors employee certifications and important documents before they become an operational problem.',
        bullets: [
          'Traffic Control Certification, Driver’s Licence, First Aid, Safety Certificates',
          'Company Orientations, Customer Orientations, Site Orientations',
          'Expiry notifications, with workers missing a required credential prevented from being scheduled where it’s needed',
        ],
      },
    ],
    ctaTitle: 'Keep Your Crews Ready to Work',
    ctaBody: 'Book a demo and see how LaneOps keeps every certification and document current.',
  },
  {
    id: 'fleet-management',
    navLabel: 'Fleet Management',
    eyebrow: 'Fleet',
    title: 'Your Entire Fleet. One Dashboard.',
    intro:
      'Know the status, driver, location, equipment and history of every vehicle in your operation.',
    screenshot: vehicleInventory,
    screenshotAlt: 'Fleet management screen showing vehicle status and history',
    showStatusTags: true,
    sections: [
      {
        heading: 'Every Vehicle, Fully Documented',
        bullets: [
          'Vehicle Profiles — VIN, licence plate, unit number, make, model, year, driver, region, notes and photos',
          'Vehicle Status — see active, inactive and repair vehicles at a glance',
          'Vehicle History — repairs, maintenance, driver changes, inventory movements, transfers, photos and notes',
          'Vehicle Inspections — digital pre-trip, post-trip and defect reporting',
          'Vehicle Audits — verify equipment, identify missing inventory and document vehicle condition',
        ],
      },
      {
        heading: "Know What's On Every Truck—Before It Leaves the Yard",
        body: 'LaneOps tracks traffic-control equipment assigned to individual vehicles — signs, cones, delineators, radios, batteries, tools, PPE, and traffic-control equipment.',
        bullets: [
          'See what should be on a vehicle, what is actually there, and what is missing',
          'Catch a gap before the truck leaves the yard, not after it arrives on site',
        ],
      },
    ],
    ctaTitle: 'Put Your Whole Fleet on One Dashboard',
    ctaBody: 'Book a demo and see your vehicles, drivers, and equipment in one connected view.',
  },
  {
    id: 'inventory-equipment',
    navLabel: 'Inventory & Equipment',
    eyebrow: 'Automated Rentals',
    title: 'If Equipment Stays On Site, LaneOps Keeps Track of It',
    intro:
      'Equipment left on a customer site should not disappear from your inventory — or your invoice.',
    screenshot: inventoryEquipment,
    screenshotAlt: 'Equipment and inventory screen showing rental and warehouse tracking',
    sections: [
      {
        heading: 'How Automated Rentals Work',
        bullets: [
          '1. Worker records equipment left onsite',
          '2. Equipment is removed from vehicle inventory',
          '3. Equipment is assigned to the job',
          '4. Rental billing begins',
          '5. Billing continues until equipment is returned',
          '6. Returned equipment updates inventory',
        ],
      },
      {
        heading: 'Know What You Own. Know Where It Is.',
        body: 'Manage traffic-control inventory across warehouses, vehicles, employees and job sites — moving between all four as work happens.',
        bullets: [
          'Current Stock, Warehouse Quantity, and Vehicle Quantity',
          'Assigned Inventory and Available Inventory',
          'Missing Inventory and Low Stock alerts',
          'Inventory Transfers and Inventory Discrepancies',
        ],
      },
    ],
    workflow: {
      label: 'Automated Rentals',
      steps: ['Truck', 'Job Site', 'Timecard', 'Rental', 'Customer Invoice'],
      statement: 'Track It Once. Bill It Automatically.',
      tone: 'light',
    },
    ctaTitle: 'Stop Losing Track of Equipment',
    ctaBody: 'Book a demo and see how LaneOps tracks equipment from the yard to the invoice.',
  },
  {
    id: 'safety-compliance',
    navLabel: 'Safety & Compliance',
    eyebrow: 'Safety',
    title: 'Safety Documentation Without the Paper Chase',
    intro: 'Move critical field and safety documentation into one searchable digital system.',
    screenshot: safetyCompliance,
    screenshotAlt: 'Safety and compliance screen showing FLRAs and incident reports',
    sections: [
      {
        heading: 'Field Safety, Fully Digital',
        bullets: [
          'Digital FLRAs — create and maintain searchable Field Level Risk Assessments by customer, site, employee and date',
          'Incident Reporting — document injuries, property damage, near misses, vehicle incidents, investigations and corrective actions',
          'Vehicle Inspections — digitize pre-trip, post-trip and vehicle defect reporting',
          'Safety Documentation — store manuals, policies, procedures, toolbox talks and digital safety forms',
        ],
      },
    ],
    ctaTitle: 'Bring Safety Documentation Into One System',
    ctaBody:
      'Book a demo and see how LaneOps keeps FLRAs, inspections, and incident reports searchable.',
  },
  {
    id: 'timecards',
    navLabel: 'Timecards',
    eyebrow: 'Time Management',
    title: 'The Timecard That Runs the Rest of the Operation',
    intro:
      'Field employees submit their time digitally from the job. Managers review and approve it. LaneOps can then use the approved operational information throughout payroll and customer billing workflows.',
    screenshot: timeTracking,
    screenshotAlt: 'Digital timecard screen showing approval status',
    sections: [
      {
        heading: 'From the Field to Approved, in One Flow',
        bullets: [
          'Draft → Submitted → Manager Review → Approved → Payroll Ready → Billing Ready',
          'Missing Timesheet Detection automatically identifies missing submissions and outstanding approvals',
        ],
      },
    ],
    workflow: {
      label: 'The Money Section',
      steps: ['Field Worker', 'Digital Timecard'],
      branches: ['Payroll', 'Customer Billing', 'Equipment Rentals', 'Job Reporting'],
      statement: 'One Timecard. Multiple Automated Workflows.',
      tone: 'dark',
    },
    ctaTitle: 'Let One Timecard Do More',
    ctaBody:
      'Book a demo and see how a single approved timecard flows into payroll, billing, and reporting.',
  },
  {
    id: 'payroll-billing',
    navLabel: 'Payroll & Billing',
    eyebrow: 'Billing',
    title: 'Turn Completed Work Into Billable Revenue',
    intro: 'LaneOps is designed to capture billable activity generated by your operation.',
    screenshot: payrollInvoicing,
    screenshotAlt: 'Payroll and billing screen showing job invoicing status',
    sections: [
      {
        heading: 'Less Manual Billing. Less Missed Revenue.',
        body: 'Billing can include:',
        bullets: [
          'Labour',
          'Overtime',
          'Equipment',
          'Vehicle Rentals',
          'Traffic Devices',
          'Standby Time',
          'Materials',
        ],
      },
      {
        heading: 'From Approved Timecards to Payroll',
        body: 'Use approved employee time to streamline payroll preparation. Only payroll functionality that is currently production-ready is advertised here — anything still under development is labelled accordingly.',
        bullets: [
          'Employee Wage Rates',
          'Overtime and Shift Premiums',
          'Statutory Holidays',
          'Deductions and Bonuses',
          'Multi-Rate Work',
        ],
      },
      {
        heading: 'Every Customer. Every Contact. Every Job.',
        body: 'Maintain customer and site information alongside the work being performed.',
        bullets: [
          'Customers, Billing Contacts, Foremen, Project Managers, Superintendents',
          'Site Contacts and Consultants',
          'Multiple Locations and Regional Information',
        ],
      },
    ],
    ctaTitle: 'Capture Every Billable Hour',
    ctaBody: 'Book a demo and see how completed jobs turn into invoices automatically.',
  },
  {
    id: 'reporting',
    navLabel: 'Reporting',
    eyebrow: 'Business Intelligence',
    title: "See What's Happening Across Your Operation",
    intro:
      'Bring operational information together so management can understand the business without chasing information across multiple systems.',
    screenshot: reportingDashboard,
    screenshotAlt: 'Reporting dashboard showing jobs, workforce, vehicles, and billing',
    sections: [
      {
        heading: 'One Dashboard, Every System',
        bullets: [
          'Jobs — every job’s status, from scheduled to completed, in one view',
          'Workforce — headcount, certifications, and performance across the team',
          'Vehicles — fleet status, location, and maintenance at a glance',
          'Inventory — stock levels and equipment location across warehouses, vehicles, and job sites',
          'Payroll — hours, rates, and payroll-ready totals by pay period',
          'Billing — invoiced, outstanding, and missed-billing activity',
          'Attendance — clock-ins, absences, and conduct trends',
          'KPIs — the numbers that show whether the operation is improving',
        ],
      },
    ],
    ctaTitle: 'See Your Operation, All in One Place',
    ctaBody:
      'Book a demo and see the reporting dashboards built around traffic-control operations.',
  },
]

export function getPlatformCategory(id: string): PlatformCategoryDetail | undefined {
  return platformCategories.find((category) => category.id === id)
}
