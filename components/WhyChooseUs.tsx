export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Proven Results',
      description: 'Our websites don\'t just look good—they convert. We focus on driving real business growth and measurable ROI.',
      icon: '📈'
    },
    {
      title: 'Fast Delivery',
      description: 'Most projects completed in 2-4 weeks. We work efficiently without compromising on quality or attention to detail.',
      icon: '⚡'
    },
    {
      title: 'SEO Optimized',
      description: 'Every website is built with SEO best practices from day one, ensuring you rank well and attract organic traffic.',
      icon: '🎯'
    },
    {
      title: 'Ongoing Support',
      description: 'We don\'t disappear after launch. Get continuous support, updates, and maintenance to keep your site performing.',
      icon: '🛡️'
    },
    {
      title: 'Custom Solutions',
      description: 'No templates, no shortcuts. Every project is tailored specifically to your brand, goals, and target audience.',
      icon: '✨'
    },
    {
      title: 'Trusted Worldwide',
      description: 'Working with 30+ agencies globally. Our reputation speaks for itself through satisfied clients and successful projects.',
      icon: '🌍'
    }
  ]

  return (
    <section className="py-24 px-5 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-[#d7df23] text-center mb-16">
          Why Choose Porygon?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-[#111] border border-gray-800 rounded-lg p-6 hover:border-[#d7df23] transition-all"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg text-white mb-3">{reason.title}</h3>
              <p className="text-[#aaa] text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
