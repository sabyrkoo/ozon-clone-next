import { Header } from '@/app/components/layout/Header'
import { TopMenu } from '@/app/components/layout/TopMenu'

export default function Home() {
  return (
    <main className='max-w-325 mx-auto'>
      <Header />
      <TopMenu />
    </main>
  )
}
