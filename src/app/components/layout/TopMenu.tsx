import Link from 'next/link'
import { topMenu } from './top-menu.data'
import { Dot } from 'lucide-react'

export const TopMenu = () => {
  return (
    <div className="flex items-center justify-between bg-white px-6">
      <nav>
        <ul className="flex gap-6">
          {topMenu.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center gap-2 pt-2 pb-3 text-gray-400 transition-colors hover:text-primary"
              >
                <item.icon size={20} />
                <span className="text-sm">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="font-semibold text-gray-400 text-sm flex gap-1.5 items-center">
        <span>Ozon pick-up point</span>
        &bull;
        <button className="text-primary text-sm font-medium">Mashh...p, 20</button>
      </div>
    </div>
  )
}
