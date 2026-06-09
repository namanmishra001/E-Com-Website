import showroomImg from '../assets/images/showroom_about_1781044140944.png';

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square group">
          <img 
            src={showroomImg} 
            alt="Craftsmanship" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-stone-900/10"></div>
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-sm border border-stone-100">
            <h4 className="font-serif text-lg text-stone-800 mb-1">Generations of Trust</h4>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-medium">Est. 1984 in Old Delhi</p>
          </div>
        </div>
        
        <div className="flex flex-col justify-center px-4 md:px-8">
          <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-4">Our Heritage</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 tracking-tight leading-tight mb-8">
            Woven with <span className="italic font-light text-stone-500">tradition</span>.<br /> Tailored for today.
          </h2>
          <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
            <p>
              At Gupta Emporium, we believe clothing is more than just fabric—it is an expression of our rich cultural tapestry. Founded in the vibrant lanes of Chandni Chowk, our family has dedicated decades to curating the finest silks, breathable cottons, and intricate embroideries from master weavers across India.
            </p>
            <p>
              Whether you are preparing for a festive celebration, a grand wedding, or seeking everyday elegance, our showroom offers a handpicked selection of premium garments that honor authentic craftsmanship without compromising on modern comfort.
            </p>
          </div>
          
          <div className="mt-10 pt-10 border-t border-stone-200 grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-serif text-stone-800 mb-1">40+</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Years of Heritage</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-stone-800 mb-1">10k+</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Happy Families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
