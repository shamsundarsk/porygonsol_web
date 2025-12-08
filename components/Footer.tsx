'use client'

import ASCIIText from './ASCIIText'

export default function Footer() {
  return (
    <footer className="py-20 px-8 bg-black border-t-4 border-[#d7df23]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side - Animated Porygon Text */}
        <div className="w-full md:w-[600px] h-56 md:h-64">
          <ASCIIText
            text="Porygon!"
            enableWaves={true}
            asciiFontSize={16}
            textFontSize={200}
            textColor="#d7df23"
            planeBaseHeight={12}
          />
        </div>
        
        {/* Right Side - Button and Credit */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <a
            href="#appointments"
            className="bg-[#d7df23] hover:bg-[#c5cd1f] text-black font-bold px-10 py-4 rounded-full transition glow-btn text-lg"
          >
            Book a Call
          </a>
          
          <p className="text-[#aaa] text-base">
            Designed by <span className="text-[#d7df23]">[Your Name]</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
