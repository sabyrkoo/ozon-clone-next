import {  Flower2, Microwave, Percent, Rabbit, Shirt, Smartphone, Van } from 'lucide-react'
import { PagesConfig } from '@/app/config/pages.config'
import type { LucideIcon } from 'lucide-react'

export type TopMenuItem = {
  title: string
  icon: LucideIcon
  href: string
}

export const topMenu = [
  {
    title: 'Installment 0-0-12',
    icon: Percent,
    href: PagesConfig.INSTALLMENT,
  },
  {
    title: 'Kazakhstani sellers',
    icon: Van,
    href: PagesConfig.KAZAKH_SELLERS,
  },
  {
    title: 'Clothing',
    icon: Shirt,
    href: PagesConfig.CLOTHING,
  },
  {
    title: 'Electronics',
    icon: Smartphone,
    href: PagesConfig.ELECTRONICS,
  },
  {
    title: 'House & Garden',
    icon: Flower2,
    href: PagesConfig.HOUSE_AND_GARDEN,
  },
  {
    title: 'Kids Products',
    icon: Rabbit,
    href: PagesConfig.KIDS_PRODUCTS,
  },
  {
    title: 'Household Appliances',
    icon: Microwave,
    href: PagesConfig.HOUSEHOLD_APPLIANCES,
  },
] satisfies TopMenuItem[]
