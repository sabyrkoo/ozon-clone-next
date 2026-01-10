import Image from 'next/image'
import { ChevronDown, LayoutGrid, Search } from 'lucide-react'
import Link from 'next/link'
import { headerMenu } from '@/app/components/layout/header-menu.data'
import clsx from 'clsx'

export const Header = () => {
  return (
    <header className="flex items-center gap-6 px-6 py-2">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Ozon"
          width={140}
          height={30}
          priority
        />
      </Link>

      <button className="flex py-2.5 px-4 rounded-xl bg-primary text-white cursor-pointer transition-colors hover:bg-primary/90">
        <LayoutGrid
          className="mr-2"
          color="#fff"
          size={24}
        />
        <span className="font-semibold">Catalog</span>
      </button>

      <div className="flex grow items-center rounded-xl bg-primary">
        <div className="flex grow items-center gap-2 rounded-xl bg-white m-0.5">
          <button
            title="Everywhere"
            className="flex items-center gap-0.5 text-gray-500 text-sm p-1.5 m-1 bg-gray-100 rounded-xl transition-colors hover:text-primary cursor-pointer"
          >
            Everywhere
            <ChevronDown size={12} />
          </button>

          <form>
            <input
              type="search"
              placeholder="Search on Ozon"
              className="placeholder:text-gray-400 outline-none"
            />
          </form>
        </div>

        <div className="py-2.5 px-4">
          <Search
            color="#fff"
            className="cursor-pointer"
          />
        </div>
      </div>

      <ul className="flex gap-6">
        {headerMenu.map((item, index) => (
          <li
            key={item.title}
            className="relative"
          >
            <Link
              href={item.href}
              className={clsx(
                'flex flex-col items-center transition-colors hover:text-primary',
                index === 0 ? 'text-black' : 'text-gray-500',
              )}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.title}</span>
            </Link>

            {index === 0 && (
              <span className="absolute top-0 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
