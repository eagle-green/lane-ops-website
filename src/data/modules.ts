import type { ModuleItem } from '@/types/common'

/** Home — "Built for Real Field Operations" module list. */
export const fieldOperationsModules: ModuleItem[] = [
  { id: 'job-management', label: 'Job Management' },
  { id: 'dispatch-notes', label: 'Dispatch Notes' },
  { id: 'timesheets', label: 'Timesheets' },
  { id: 'flras', label: 'FLRAs' },
  { id: 'traffic-management-plans', label: 'Traffic Management Plans' },
  { id: 'incident-reports', label: 'Incident Reports' },
  { id: 'employee-management', label: 'Employee Management' },
  { id: 'client-management', label: 'Client Management' },
  { id: 'vehicle-management', label: 'Vehicle Management' },
  { id: 'inventory-tracking', label: 'Inventory Tracking' },
]

/** Features page — "System Overview" 8-module grid. */
export const systemOverviewModules: ModuleItem[] = [
  { id: 'jobs', label: 'Jobs' },
  { id: 'dispatch', label: 'Dispatch' },
  { id: 'vehicles', label: 'Vehicles' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'employees', label: 'Employees' },
  { id: 'clients', label: 'Clients' },
  { id: 'reports', label: 'Reports' },
  { id: 'payroll', label: 'Payroll' },
]
