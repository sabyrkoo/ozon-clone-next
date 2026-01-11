'use client'

import { useState } from 'react'
import { SLIDES } from '@/app/components/pages/home/slider/slides.data'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const Slider = () => {
  const [activeSlideId, setActiveSlideId] = useState(1)

  return (
    <div className="relative">
      <ul className="my-3">
        {SLIDES.map((slide) => (
          <li
            key={slide.id}
            className={slide.id === activeSlideId ? 'block' : 'hidden'}
          >
            <Image
              src={slide.image}
              alt=""
              width={1400}
              height={300}
              className="rounded-2xl"
            />
          </li>
        ))}
      </ul>

      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-3">
        <button
          className="cursor-pointer"
          onClick={() => setActiveSlideId(
            activeSlideId === 1 ? SLIDES.length : activeSlideId - 1,
          )}
        >
          <ChevronLeft
            size={24}
            color="#fff"
          />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setActiveSlideId(
            activeSlideId === SLIDES.length ? 1 : activeSlideId + 1,
          )}
        >
          <ChevronRight
            size={24}
            color="#fff"
          />
        </button>
      </div>
    </div>
  )
}
