import React, { useState } from 'react';
import { X, Calendar, Check } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  color: string;
  status: 'available' | 'busy';
  availableDate?: string;
}

interface BookingModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ product, isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(2);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Lukk</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {step === 1 ? (
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-2xl leading-6 font-serif font-bold text-gray-900 mb-2" id="modal-title">
                    Book {product.name}
                  </h3>
                  <div className="mt-2 mb-6">
                    <p className="text-sm text-gray-500">
                      Fyll ut skjemaet nedenfor for å reservere kjolen. Betaling skjer ved henting.
                    </p>
                    <div className="mt-4 bg-gray-50 p-4 rounded-sm border border-gray-100 flex gap-4">
                      <img src={product.image} alt={product.name} className="w-16 h-20 object-cover" />
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm text-gray-600">Str: {product.size} • Farge: {product.color}</p>
                        <p className="text-gold-600 font-bold mt-1">Fra {product.price} kr</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Fullt navn</label>
                      <input type="text" id="name" required className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm p-2 border" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-post</label>
                        <input type="email" id="email" required className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm p-2 border" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
                        <input type="tel" id="phone" required className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm p-2 border" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">Ønsket dato for leie</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input type="date" id="date" required className="focus:ring-gold-500 focus:border-gold-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-sm p-2 border" />
                      </div>
                    </div>
                    
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-sm border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm uppercase tracking-wider"
                      >
                        Send forespørsel
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-sm border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm uppercase tracking-wider"
                        onClick={onClose}
                      >
                        Avbryt
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl leading-6 font-serif font-bold text-gray-900 mb-2">Takk for din forespørsel!</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Vi har mottatt din bookingforespørsel for <strong>{product.name}</strong>. 
                  Vi sjekker tilgjengelighet og sender deg en bekreftelse på e-post/SMS innen kort tid.
                </p>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-sm border border-transparent shadow-sm px-6 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none sm:text-sm uppercase tracking-wider"
                  onClick={() => {
                    setStep(1);
                    onClose();
                  }}
                >
                  Lukk vindu
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
