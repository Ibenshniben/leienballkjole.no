import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-serif font-bold text-white tracking-wide">
              LeiEnBallkjole<span className="text-gold-500">.no</span>
            </span>
            <p className="mt-4 text-gray-400 font-light max-w-xs mx-auto md:mx-0">
              Gjør kvelden uforglemmelig med den perfekte kjolen. Bærekraftig, rimelig og enkelt.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-gold-500 font-sans text-xs font-bold uppercase tracking-widest mb-6">Snarveier</h3>
            <ul className="space-y-3">
              <li><a href="#kolleksjon" className="text-gray-400 hover:text-white transition-colors">Kolleksjon</a></li>
              <li><a href="#hvordan-det-funker" className="text-gray-400 hover:text-white transition-colors">Slik fungerer det</a></li>
              <li><a href="#om-oss" className="text-gray-400 hover:text-white transition-colors">Om oss</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="text-gold-500 font-sans text-xs font-bold uppercase tracking-widest mb-6">Følg oss</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="sr-only">Facebook</span>
                <Facebook size={24} />
              </a>
              <a href="mailto:kontakt@leienballkjole.no" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="sr-only">E-post</span>
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} LeiEnBallkjole.no. Alle rettigheter reservert.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300">Personvern</a>
            <a href="#" className="hover:text-gray-300">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
