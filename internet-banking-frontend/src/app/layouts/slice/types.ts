export interface LayoutState {
  showSidebar: boolean;
  dropDownActive: boolean;
  showToaster: boolean;
  toasterMessage: string;
  toasterType: 'success' | 'error' | 'warning' | 'info';
  toasterDelay: number;
}
