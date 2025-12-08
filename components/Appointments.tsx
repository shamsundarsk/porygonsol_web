'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Cal: any
  }
}

export default function Appointments() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Initialize Cal.com after script loads
    script.onload = () => {
      if (typeof window !== 'undefined' && window.Cal) {
        window.Cal('init', { origin: 'https://app.cal.com' })
      }
    }

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="appointments" className="py-24 px-5 bg-[#111]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-[#d7df23] mb-4">
          Book Your Consultation
        </h2>
        <p className="text-[#ccc] mb-12">
          Schedule a call with our team to discuss your project
        </p>
        
        <div className="bg-black border-2 border-[#d7df23] rounded-xl p-4 md:p-8 min-h-[600px]">
          {/* Cal.com Inline Embed */}
          <div 
            className="cal-inline-embed"
            data-cal-link="your-username/30min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            style={{ 
              width: '100%', 
              height: '100%', 
              minHeight: '550px',
              overflow: 'auto'
            }}
          >
            <button
              data-cal-link="your-username/30min"
              className="w-full bg-[#d7df23] hover:bg-[#c5cd1f] text-black font-bold py-4 px-8 rounded-lg transition glow-btn text-lg"
            >
              Click to Schedule Your Consultation
            </button>
          </div>
        </div>

        <p className="text-[#888] text-sm mt-6">
          Powered by Cal.com - Secure and reliable scheduling
        </p>
      </div>
    </section>
  )
}
