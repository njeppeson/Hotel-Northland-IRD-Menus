export interface MenuItem {
  id: string;
  label: string;
  url: string;
  description?: string;
  logo?: string;
}

export type ViewState = 'HOME' | 'MENU';