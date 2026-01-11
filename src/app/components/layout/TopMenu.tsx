import Link from 'next/link'
import { topMenu } from './top-menu.data'

export const TopMenu = () => {
  return (
    <nav className="px-6 bg-white">
      <ul className="flex gap-6">
        {topMenu.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="flex items-center gap-2 pt-2 pb-3 transition-colors hover:text-primary"
            >
              <item.icon size={20} />
              <span className="text-sm">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
