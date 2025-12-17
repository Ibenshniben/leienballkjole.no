import { useState } from 'react';
import { Heart, Clock, CheckCircle } from 'lucide-react';
import BookingModal from './BookingModal';

interface Product {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  color: string;
  status: 'available' | 'busy';
  availableDate?: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Royal Blue Silk Gown",
    price: 1500,
    size: "M",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "Blå",
    status: 'available',
    description: "En fantastisk silkekjole som får deg til å føle deg som en dronning."
  },
  {
    id: 2,
    name: "Emerald Green Velvet",
    price: 1800,
    size: "S",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "Grønn",
    status: 'busy',
    availableDate: 'Ledig om 5 dager',
    description: "Elegant fløyelskjole perfekt for juleball eller galla."
  },
  {
    id: 3,
    name: "Classic Red Evening Dress",
    price: 1200,
    size: "L",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "Rød",
    status: 'available',
    description: "Tidløs rød kjole med nydelig passform."
  },
  {
    id: 4,
    name: "Black Sparkle Prom Dress",
    price: 2000,
    size: "XS",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "Svart",
    status: 'available',
    description: "Glitrende svart kjole som garantert vekker oppsikt."
  },
  {
    id: 5,
    name: "Golden Champagne Flow",
    price: 1600,
    size: "S/M",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "Gull",
    status: 'available',
    description: "Luksuriøs champagnefarget kjole med åpen rygg."
  },
  {
    id: 6,
    name: "Midnight Blue Stardust",
    price: 1400,
    size: "M/L",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "Mørkeblå",
    status: 'busy',
    availableDate: 'Ledig om 2 uker',
    description: "Drømmende mørkeblå kjole med diskret glitter."
  }
];

const ProductCard = ({ product, onBook }: { product: Product; onBook: (p: Product) => void }) => (
  <div className="group flex flex-col h-full bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
    <div className="aspect-[3/4] w-full overflow-hidden relative bg-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute top-4 right-4">
        {product.status === 'available' ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-green-800 backdrop-blur-sm shadow-sm">
            <CheckCircle size={12} className="mr-1" /> Ledig
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-amber-800 backdrop-blur-sm shadow-sm">
            <Clock size={12} className="mr-1" /> {product.availableDate}
          </span>
        )}
      </div>
      
      {/* Quick Action Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button 
          onClick={() => onBook(product)}
          className="bg-white text-black px-6 py-3 font-sans font-bold uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
        >
          Book kjole
        </button>
      </div>
    </div>
    
    <div className="flex flex-col flex-grow p-6 text-center">
      <h3 className="text-lg font-serif font-medium text-gray-900 mb-1">
        {product.name}
      </h3>
      <p className="text-sm text-gray-500 mb-4 font-light">{product.color} • Str. {product.size}</p>
      
      <div className="mt-auto pt-4 border-t border-gray-100 w-full flex justify-between items-center">
        <span className="text-gold-600 font-semibold font-serif italic">Fra {product.price} kr</span>
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <Heart size={20} />
        </button>
      </div>
    </div>
  </div>
);

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBook = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="kolleksjon" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-sans text-sm font-bold uppercase tracking-widest mb-2 block">Kolleksjon</span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Våre Kjoler</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light">
            Utforsk vårt utvalg av eksklusive kjoler. Finn den som passer din stil og størrelse.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onBook={handleBook} />
          ))}
        </div>
      </div>

      <BookingModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default ProductList;
