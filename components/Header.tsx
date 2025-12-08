'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [text, setText] = useState('')
  const [shrink, setShrink] = useState(false)
  const fullText = 'Porygon'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 flex justify-center items-center transition-all duration-500 ${
        shrink 
          ? 'h-[70px] backdrop-blur-xl bg-black/30 border-b border-[#d7df23]/20 shadow-[0_8px_32px_0_rgba(215,223,35,0.1)]' 
          : 'h-screen bg-transparent'
      }`}
      style={shrink ? {
        background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(17,17,17,0.3) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      } : {}}
    >
      <div className="flex items-center gap-4 transition-all duration-500">
        <Image 
          src="/porygon-logo.png" 
          alt="Porygon Logo" 
          width={shrink ? 50 : 120}
          height={shrink ? 50 : 120}
          className="transition-all duration-500"
        />
        <h1 className={`text-[#d7df23] transition-all duration-500 ${
          shrink ? 'text-base' : 'text-6xl md:text-[9rem]'
        }`}>
          {text}<span className="animate-pulse">_</span>
        </h1>
      </div>
    </header>
  )
}
