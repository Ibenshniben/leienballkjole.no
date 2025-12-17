import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'text-black' : 'text-white';
  const logoColor = scrolled ? 'text-black' : 'text-white';
  const buttonClass = scrolled 
    ? 'bg-black text-white hover:bg-gold-500' 
    : 'bg-white text-black hover:bg-gold-500 hover:text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`text-2xl font-serif font-bold tracking-wide transition-colors ${logoColor}`}>
              LeiEnBallkjole<span className="text-gold-500">.no</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`${textColor} hover:text-gold-500 font-sans tracking-wider text-sm transition-colors uppercase`}>Hjem</a>
            <a href="#kolleksjon" className={`${textColor} hover:text-gold-500 font-sans tracking-wider text-sm transition-colors uppercase`}>Kolleksjon</a>
            <a href="#om-oss" className={`${textColor} hover:text-gold-500 font-sans tracking-wider text-sm transition-colors uppercase`}>Om oss</a>
            <a href="#kontakt" className={`${textColor} hover:text-gold-500 font-sans tracking-wider text-sm transition-colors uppercase`}>Kontakt</a>
            <a href="#kolleksjon" className={`${buttonClass} px-6 py-2 rounded-sm transition-colors font-sans text-sm tracking-widest uppercase`}>
              Book nå
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${textColor} hover:text-gold-500 transition-colors`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a href="#" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-black hover:text-gold-500 font-sans text-lg border-b border-gray-50">Hjem</a>
          <a href="#kolleksjon" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-black hover:text-gold-500 font-sans text-lg border-b border-gray-50">Kolleksjon</a>
          <a href="#om-oss" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-black hover:text-gold-500 font-sans text-lg border-b border-gray-50">Om oss</a>
          <a href="#kontakt" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-black hover:text-gold-500 font-sans text-lg">Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
