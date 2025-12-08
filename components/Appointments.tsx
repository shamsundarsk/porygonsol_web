'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Cal: any
  }
}

export default function Appointments() {
  useEffect(() => {
    // Load Cal.com embed script if not already loaded
    if (!document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://app.cal.com/embed/embed.js'
      script.async = true
      document.head.appendChild(script)

      // Initialize Cal.com after script loads
      script.onload = () => {
        if (typeof window !== 'undefined' && window.Cal) {
          window.Cal('init', { origin: 'https://app.cal.com' })
          
          // Create inline embed
          window.Cal('inline', {
            elementOrSelector: '#cal-embed-container',
            calLink: 'your-username/30min',
            layout: 'month_view',
            config: {
              theme: 'dark',
              name: 'Porygon Consultation',
              email: '',
              notes: '',
              guests: [],
              hideEventTypeDetails: false
            }
          })
        }
      }
    } else {
      // Script already loaded, just initialize
      if (typeof window !== 'undefined' && window.Cal) {
        window.Cal('inline', {
          elementOrSelector: '#cal-embed-container',
          calLink: 'your-username/30min',
          layout: 'month_view',
          config: {
            theme: 'dark'
          }
        })
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
        
        <div className="bg-black border-2 border-[#d7df23] rounded-xl p-4 md:p-8">
          {/* Cal.com Inline Embed Container */}
          <div 
            id="cal-embed-container"
            style={{ 
              width: '100%', 
              height: '700px',
              minHeight: '700px'
            }}
          />
        </div>

        <p className="text-[#888] text-sm mt-6">
          Powered by Cal.com - Secure and reliable scheduling
        </p>
      </div>
    </section>
  )
}
