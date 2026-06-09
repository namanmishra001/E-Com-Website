import { Search, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import lehengaImg from '../assets/images/zardosi_lehenga_1781044157393.png';
import sherwaniImg from '../assets/images/ivory_sherwani_1781044168130.png';
import sareeImg from '../assets/images/banarasi_saree_1781044180884.png';
import kurtaImg from '../assets/images/chikankari_kurta_1781044192000.png';
import anarkaliImg from '../assets/images/organza_anarkali_1781044212338.png';
import boysImg from '../assets/images/boys_kurta_1781044225870.png';

const PRODUCTS = [
  {
    id: 1,
    name: "Bridal Zardosi Lehenga",
    category: "Women",
    image: lehengaImg,
    description: "Intricately hand-embroidered maroon silk lehenga with heavy zardosi work, perfect for your special day."
  },
  {
    id: 2,
    name: "Classic Ivory Sherwani",
    category: "Men",
    image: sherwaniImg,
    description: "Premium raw silk sherwani featuring subtle zari detailing. Elegant and timeless for the modern groom."
  },
  {
    id: 3,
    name: "Banarasi Silk Saree",
    category: "Women",
    image: sareeImg,
    description: "Authentic handloom Banarasi silk saree featuring antique golden motifs and a rich pallu."
  },
  {
    id: 4,
    name: "Chikankari Kurta Set",
    category: "Men",
    image: kurtaImg,
    description: "Breathable pure cotton fabric adorned with delicate hand-embroidered Lucknowi chikankari."
  },
  {
    id: 5,
    name: "Floral Organza Anarkali",
    category: "Women",
    image: anarkaliImg,
    description: "Lightweight pastel organza suit with delicate floral prints and scalloped borders."
  },
  {
    id: 6,
    name: "Boys' Festivity Kurta",
    category: "Kids",
    image: boysImg,
    description: "Comfortable, skin-friendly cotton silk blend perfect for long festive hours."
  }
];

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Women", "Men", "Kids"];

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === activeCategory);

  const getWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(`Hello Gupta Emporium, I am interested in the ${productName} from your lookbook. Could you share price and availability?`);
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="lookbook" className="py-12 md:py-16">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-4">Our Curations</span>
        <h2 className="text-3xl md:text-5xl font-serif text-stone-800 tracking-tight leading-tight mb-4">The Lookbook</h2>
        <p className="max-w-xl text-sm text-stone-500">Discover our curated selection of high-quality traditional wear. For pricing, customization, or to check sizes, inquire directly with our store via WhatsApp.</p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-stone-900 text-white shadow-md' 
                  : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-stone-800 shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>
          
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-serif text-stone-800 mb-2">{product.name}</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-6 flex-grow">{product.description}</p>
              
              <a 
                href={getWhatsAppLink(product.name)}
                target="_blank" rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-stone-50 border border-stone-200 text-stone-800 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
