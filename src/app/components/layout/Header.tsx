import Image from 'next/image'

export const Header = () => {
  return (
    <header>
      <Image
        src='/logo.svg'
        alt='Ozon'
        width={140}
        height={30}
        priority
      />
    </header>
  )
}
