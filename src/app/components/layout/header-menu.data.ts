import { Heart, Package, ShoppingCart, User } from 'lucide-react'
import { PagesConfig } from '@/app/config/pages.config'

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
]