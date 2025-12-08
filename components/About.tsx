export default function About() {
  return (
    <section className="py-24 px-5 bg-black text-center">
      <h2 className="text-2xl md:text-4xl text-[#d7df23] mb-12">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#d7df23] rounded-full"></div>
          <h3 className="font-bold text-white mb-2">Name</h3>
          <p className="text-[#aaa]">Sham and Shane</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#d7df23] rounded-full"></div>
          <h3 className="font-bold text-white mb-2">Email</h3>
          <p className="text-[#aaa] break-words">porygonsolutions@gmail.com</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#d7df23] rounded-full"></div>
          <h3 className="font-bold text-white mb-2">Location</h3>
          <p className="text-[#aaa]">New York, USA</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#d7df23] rounded-full"></div>
          <h3 className="font-bold text-white mb-2">Profession</h3>
          <p className="text-[#aaa]">Website Developer</p>
        </div>
      </div>
    </section>
  )
}
