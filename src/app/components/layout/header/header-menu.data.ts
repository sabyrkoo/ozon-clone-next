import { Heart, Package, ShoppingCart, User } from 'lucide-react'
import { PagesConfig } from '@/app/config/pages.config'
import type { LucideIcon } from 'lucide-react'

type HeaderMenuItem = {
  title: string
  icon: LucideIcon
  href: string
}

export const headerMenu = [
  {
    title: 'Sign in',
    icon: User,
    href: PagesConfig.LOGIN,
  },
  {
    title: 'Orders',
    icon: Package,
    href: PagesConfig.ORDERS,
  },
  {
    title: 'Favorites',
    icon: Heart,
    href: PagesConfig.FAVORITES,
  },
  {
    title: 'Cart',
    icon: ShoppingCart,
    href: PagesConfig.CART,
  },
] satisfies HeaderMenuItem[]
