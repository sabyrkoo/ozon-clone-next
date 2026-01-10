import Image from 'next/image'
import { LayoutGrid } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex items-center">
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
    </header>
  )
}
