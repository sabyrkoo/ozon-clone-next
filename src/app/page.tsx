import { Header } from '@/app/components/layout/Header'
import { TopMenu } from '@/app/components/layout/TopMenu'
import Image from 'next/image'

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
    </main>
  )
}
