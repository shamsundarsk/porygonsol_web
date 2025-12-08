export default function Plans() {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        '1 month support',
        'Mobile optimized'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Advanced animations',
        'Full SEO optimization',
        'E-commerce integration',
        '3 months support',
        'Analytics setup',
        'WhatsApp integration',
        'Custom features'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages',
        'Custom development',
        'Advanced integrations',
        'Full automation',
        '12 months support',
        'Priority support',
        'Dedicated team',
        'Everything included'
      ],
      highlighted: false
    }
  ]

  return (
    <section className="py-24 px-5 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-[#d7df23] text-center mb-4">
          Choose Your Plan
        </h2>
        <p className="text-[#ccc] text-center mb-16">
          Flexible pricing to match your needs and budget
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 transition-all duration-300 group ${
                plan.highlighted 
                  ? 'bg-[#d7df23] text-black scale-105' 
                  : 'bg-black border-2 border-gray-800 hover:bg-[#d7df23] hover:border-[#d7df23] hover:scale-105'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-black text-[#d7df23] px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl mb-2 text-center transition-colors ${plan.highlighted ? 'text-black' : 'text-[#d7df23] group-hover:text-black'}`}>
                {plan.name}
              </h3>
              
              <div className="text-center mb-4">
                <span className={`text-4xl font-bold transition-colors ${plan.highlighted ? 'text-black' : 'text-white group-hover:text-black'}`}>
                  {plan.price}
                </span>
              </div>
              
              <p className={`text-center mb-6 text-sm transition-colors ${plan.highlighted ? 'text-black' : 'text-[#aaa] group-hover:text-black'}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-start text-sm transition-colors ${plan.highlighted ? 'text-black' : 'text-[#ccc] group-hover:text-black'}`}>
                    <span className="mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#appointments"
                className={`block text-center py-3 rounded-lg font-bold transition ${
                  plan.highlighted
                    ? 'bg-black text-[#d7df23] hover:bg-gray-900'
                    : 'bg-black text-[#d7df23] hover:bg-gray-900 group-hover:bg-black'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
