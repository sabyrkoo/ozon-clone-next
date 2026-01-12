'use client'

import { LANGUAGES } from '@/app/components/layout/language-switcher/language-switcher.data'
import { useState } from 'react'

export const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ru'>('en')

  const language = LANGUAGES.find(lang => lang.code === currentLanguage)

  return (
    <button
      className="cursor-pointer flex items-center rounded gap-1 px-1 bg-gray-100 w-13 transition-colors hover:bg-gray-200"
      onClick={() => setCurrentLanguage(currentLanguage === 'en' ? 'ru' : 'en')}
    >
      <span className="text-xl">{language?.flag}</span>
      <span className="uppercase text-sm text-gray-400">{language?.code}</span>
    </button>
  )
}