export default function Services() {
  const services = [
    {
      title: 'Website Designing',
      description: 'Custom-built websites that capture your brand and convert visitors into customers with stunning design and seamless functionality.',
      icon: '🌐'
    },
    {
      title: 'E-Commerce',
      description: 'Complete online store solutions with secure payments, inventory management, and optimized checkout flows to maximize sales.',
      icon: '🛒'
    },
    {
      title: 'WhatsApp Automation',
      description: 'Automated customer engagement through WhatsApp. Handle inquiries, bookings, and support 24/7 with intelligent chatbots.',
      icon: '💬'
    }
  ]

  return (
    <section className="py-24 px-5 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-[#d7df23] text-center mb-16">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black border-2 border-[#d7df23] rounded-xl p-8 hover:shadow-[0_0_30px_rgba(215,223,35,0.3)] transition-all"
            >
              <div className="text-6xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-xl text-[#d7df23] mb-4 text-center">{service.title}</h3>
              <p className="text-[#ccc] text-sm leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
