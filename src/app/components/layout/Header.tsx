import Image from 'next/image'
import { LayoutGrid } from 'lucide-react'

export const Header = () => {
  return (
    <header className='flex'>
      <Image
        src="/logo.svg"
        alt="Ozon"
        width={140}
        height={30}
        priority
      />

      <button className='flex py-2.5 px-4 rounded-xl bg-primary text-white'>
        <LayoutGrid className='mr-2' color="#fff" size={24} />
        <span className='font-semibold'>Catalog</span>
      </button>
    </header>
  )
}
