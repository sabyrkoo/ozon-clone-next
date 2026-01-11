'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SLIDES } from './slides.data'

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevSlide = () => {
    setActiveIndex((prev) => prev - 1)
  }

  const nextSlide = () => {
    setActiveIndex((prev) => prev + 1)
  }

  return (
    <div className="relative overflow-hidden my-3">
      <ul
        className="flex transition-transform duration-500 ease-in-out"
        style={{transform: `translateX(-${activeIndex * 100}%)`}}
      >
        {SLIDES.map((slide) => (
          <li
            key={slide.id}
            className="min-w-full"
          >
            <Image
              src={slide.image}
              alt=""
              width={1400}
              height={300}
              className="rounded-2xl"
              priority
            />
          </li>
        ))}
      </ul>

      <div className="absolute top-1/2 -translate-y-1/2 w-full px-3 flex">
        <div className="w-6">
          {activeIndex > 0 && (
            <button
              type="button"
              onClick={prevSlide}
              className="cursor-pointer"
            >
              <ChevronLeft
                size={24}
                color="#fff"
              />
            </button>
          )}
        </div>

        <div className="ml-auto w-6">
          {activeIndex < SLIDES.length - 1 && (
            <button
              type="button"
              onClick={nextSlide}
              className="cursor-pointer"
            >
              <ChevronRight
                size={24}
                color="#fff"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}