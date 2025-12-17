import { ShieldAlert, Heart, MapPin } from 'lucide-react';

const InfoSections = () => {
  return (
    <>
      {/* How it works */}
      <section id="hvordan-det-funker" className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-sans text-sm font-bold uppercase tracking-widest mb-2 block">Enkelt og trygt</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900">Slik fungerer det</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-serif">1</div>
              <h3 className="text-xl font-serif font-bold mb-4">Finn & Book</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Bla gjennom utvalget og reserver din favorittkjole direkte på nettsiden. Ingen betaling ved booking.
              </p>
            </div>
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-serif">2</div>
              <h3 className="text-xl font-serif font-bold mb-4">Hent & Betal</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Hent kjolen på avtalt sted. Du betaler først når du har sett kjolen og bekreftet at den passer.
              </p>
            </div>
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-serif">3</div>
              <h3 className="text-xl font-serif font-bold mb-4">Nyt & Returner</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Strål på festen! Returner kjolen når leieperioden er over. Vi tar oss av rens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Info Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Logistics */}
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="text-gold-500 mr-4" size={32} />
                <h3 className="text-2xl font-serif font-bold">Henting og Levering</h3>
              </div>
              <div className="prose prose-lg text-gray-600 font-light">
                <p className="mb-4">
                  Vi holder til sentralt og tilbyr fleksibel henting. Kjolene må hentes fysisk slik at du kan prøve den på forhånd om ønskelig.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Betaling skjer ved overlevering (Vipps).</li>
                  <li>Vi sender dessverre ikke kjoler i posten.</li>
                  <li>Mulighet for levering i nærområdet mot et lite tillegg.</li>
                  <li>Fleksibel tilbakelevering – vi finner en tid som passer.</li>
                </ul>
              </div>
            </div>

            {/* Insurance/Liability */}
            <div>
              <div className="flex items-center mb-6">
                <ShieldAlert className="text-gold-500 mr-4" size={32} />
                <h3 className="text-2xl font-serif font-bold">Ansvar og Forsikring</h3>
              </div>
              <div className="prose prose-lg text-gray-600 font-light">
                <p className="mb-4">
                  Vi ønsker at alle skal ha en fantastisk opplevelse. Kjolene er ikke forsikret, så du som leietaker er ansvarlig i leieperioden.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Behandle kjolen som om den var din egen.</li>
                  <li>Mindre bruksmerker går fint, men større skader må erstattes.</li>
                  <li>Ved manglende retur vil forholdet bli politianmeldt.</li>
                  <li>Vi er snille og fleksible ved forsinkelser, bare gi oss beskjed!</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="om-oss" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Heart className="mx-auto text-gold-500 mb-8" size={48} />
          <h2 className="text-4xl font-serif font-bold mb-8">Vår Historie</h2>
          <p className="text-xl leading-relaxed font-light text-gray-300 mb-8">
            LeiEnBallkjole.no startet som et lite, privat initiativ med et stort hjerte. Vi så hvor dyrt det var å kjøpe nye kjoler for kun én kveld, og ønsket å gjøre noe med det.
          </p>
          <p className="text-lg leading-relaxed font-light text-gray-400 mb-10">
            Vårt mål er å gjøre ball, galla og store feiringer tilgjengelig for alle, uavhengig av budsjett. Vi tror på gjenbruk, fellesskap og gleden av å føle seg vakker. Vi er her for å hjelpe deg med å finne den perfekte kjolen, og vi strekker oss langt for at du skal bli fornøyd.
          </p>
          <div className="inline-block border-t border-gold-500 w-24"></div>
        </div>
      </section>
    </>
  );
};

export default InfoSections;
