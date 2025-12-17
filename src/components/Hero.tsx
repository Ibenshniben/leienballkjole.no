import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Elegant evening gowns" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-sm font-sans tracking-widest uppercase mb-6 backdrop-blur-sm">
          Bærekraftig • Rimelig • Eksklusivt
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Din drømmekjole <br/>
          <span className="text-gold-300 italic">for en kveld</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Hvorfor kjøpe nytt når du kan leie? Vi tilbyr et bredt utvalg av vakre ballkjoler til skoleball, bryllup og fest. Spar penger og miljøet – betal først når du henter kjolen.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#kolleksjon" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-sans text-sm font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all duration-300 min-w-[200px]"
          >
            Se våre kjoler
          </a>
          <a 
            href="#hvordan-det-funker" 
            className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-sans text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 min-w-[200px]"
          >
            Slik fungerer det
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
