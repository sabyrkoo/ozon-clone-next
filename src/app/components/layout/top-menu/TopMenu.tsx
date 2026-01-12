import Link from 'next/link'
import { LanguageSwitcher } from '@/app/components/layout/language-switcher/LanguageSwitcher'
import { topMenu } from '@/app/components/layout/top-menu/top-menu.data'

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

      <div className="flex gap-3">
        <div className="font-semibold text-gray-400 text-sm flex gap-1.5 items-center cursor-pointer">
          <span>Ozon pick-up point</span>
          &bull;
          <button className="text-primary text-sm font-medium cursor-pointer">Mashh...p, 20</button>
        </div>

        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
