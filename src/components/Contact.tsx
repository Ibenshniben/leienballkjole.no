import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="kontakt" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-gold-500 font-sans text-sm font-bold uppercase tracking-widest mb-2 block">Ta kontakt</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Vi hjelper deg gjerne</h2>
            <p className="text-lg text-gray-600 font-light mb-10 leading-relaxed">
              Lurer du på noe angående størrelser, leieperiode eller tilgjengelighet? Send oss en melding, så svarer vi så raskt vi kan. Vi er her for å gjøre din opplevelse så enkel som mulig.
            </p>

            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white shadow-sm rounded-sm">
                <div className="bg-black p-3 rounded-full mr-4 text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">E-post</p>
                  <a href="mailto:kontakt@leienballkjole.no" className="text-lg font-medium text-gray-900 hover:text-gold-600">kontakt@leienballkjole.no</a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white shadow-sm rounded-sm">
                <div className="bg-black p-3 rounded-full mr-4 text-white">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Melding / SMS</p>
                  <p className="text-lg font-medium text-gray-900">+47 123 45 678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 shadow-lg border-t-4 border-gold-500">
            <h3 className="text-2xl font-serif font-bold mb-6">Send oss en melding</h3>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-sm text-center">
                <p className="font-medium">Takk for din melding!</p>
                <p className="text-sm mt-1">Vi svarer deg så snart som mulig.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Navn</label>
                  <input type="text" id="contact-name" required className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-gold-500 focus:border-gold-500 p-3 border" placeholder="Ditt navn" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                  <input type="email" id="contact-email" required className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-gold-500 focus:border-gold-500 p-3 border" placeholder="din@epost.no" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Melding</label>
                  <textarea id="contact-message" rows={4} required className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-gold-500 focus:border-gold-500 p-3 border" placeholder="Hva lurer du på?"></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center items-center px-8 py-4 bg-black text-white font-sans text-sm font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors">
                  Send melding <Send size={16} className="ml-2" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
