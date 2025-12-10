import { MenuItem } from './types';

export const HOTEL_LOGO = "./hotel-logo.png";

export const MENUS: MenuItem[] = [
  {
    id: 'poke',
    label: 'Poke the Bear',
    url: 'https://app.menuvative.com/embed/1.0/menu?menuId=1806&width=600',
    description: 'Fresh, bold flavors in a lively atmosphere.',
    logo: './poke-logo.png',
  },
  {
    id: 'walnut',
    label: 'Walnut Room',
    url: 'https://app.menuvative.com/embed/1.0/menu?menuId=2915&width=600',
    description: 'Elegant dining featuring locally sourced ingredients.',
    logo: './walnut-logo.png',
  },
  {
    id: 'wine',
    label: 'Wine Menu',
    url: 'https://app.menuvative.com/embed/1.0/menu?menuId=3070&width=600',
    description: 'Our curated selection of fine wines.',
  },
];

export const HOTEL_NAME = "Hotel Northland";
export const HOTEL_SUBTITLE = "Autograph Collection";
export const PAGE_TITLE = "In-Room Dining & Beverage Menus";
export const PAGE_DESCRIPTION = "Scan, tap, and explore the latest offerings from Poke the Bear, The Walnut Room, and our Wine List.";