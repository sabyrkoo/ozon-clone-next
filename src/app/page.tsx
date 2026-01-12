import { Header } from '@/app/components/layout/header/Header'
import { TopMenu } from '@/app/components/layout/top-menu/TopMenu'
import Image from 'next/image'
import { Slider } from '@/app/components/pages/home/slider/Slider'

export default function Home() {
  return (
    <main className="max-w-350 mx-auto">
      <Header />
      <TopMenu />
      <Image
        src="/banner.png"
        alt="Banner"
        width={1400}
        height={60}
        className="cursor-pointer"
        priority
      />
      <Slider />
    </main>
  )
}
