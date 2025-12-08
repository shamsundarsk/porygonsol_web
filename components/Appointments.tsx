'use client'

import { useState } from 'react'

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const timeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    
    return { firstDay, daysInMonth }
  }

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      alert(`Appointment booked for ${currentMonth.toLocaleString('default', { month: 'long' })} ${selectedDate} at ${selectedTime}`)
    } else {
      alert('Please select a date and time')
    }
  }

  return (
    <section id="appointments" className="py-24 px-5 bg-[#111]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-[#d7df23] mb-4">
          Book Your Consultation
        </h2>
        <p className="text-[#ccc] mb-12">
          Schedule a call with our team to discuss your project
        </p>
        
        <div className="bg-black border-2 border-[#d7df23] rounded-xl p-8">
          {/* Calendar Header */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={handlePrevMonth}
              className="text-[#d7df23] hover:text-white text-2xl font-bold transition"
            >
              ◀
            </button>
            <h3 className="text-lg text-white">
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h3>
            <button 
              onClick={handleNextMonth}
              className="text-[#d7df23] hover:text-white text-2xl font-bold transition"
            >
              ▶
            </button>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-8">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-[#aaa] text-xs py-2">
                {day}
              </div>
            ))}
            {emptyDays.map(i => (
              <div key={`empty-${i}`} className="p-2"></div>
            ))}
            {days.map(day => (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`p-3 rounded-lg transition ${
                  selectedDate === day
                    ? 'bg-[#d7df23] text-black font-bold'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
          
          {/* Time Slots */}
          <div className="mb-8">
            <h4 className="text-sm text-[#d7df23] mb-4">Available Times</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-6 py-3 rounded-lg transition ${
                    selectedTime === time
                      ? 'bg-[#d7df23] text-black font-bold'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          
          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full bg-[#d7df23] hover:bg-[#c5cd1f] text-black font-bold py-4 rounded-lg transition glow-btn"
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </section>
  )
}
