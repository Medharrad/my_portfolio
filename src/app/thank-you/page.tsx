'use client';

import { Pacifico } from 'next/font/google';
import { Mail, Phone, MapPin } from 'lucide-react';
export const runtime = 'edge';

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });

export default function ThankYou() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1
        className={`${pacifico.className} text-6xl text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}
      >
        Thank You!
      </h1>
      <p className="text-gray-300 text-lg max-w-xl text-center mb-12">
        I have received your message and will reply in the nearest future.
      </p>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center">
                <Mail className="text-purple-400" size={20} />
                <a
                  href="mailto:harrademed@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors underline"
                >
                  harrademed@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Phone className="text-purple-400" size={20} />
                <a
                  href="tel:+212690626645"
                  className="text-gray-300 hover:text-purple-400 transition-colors underline"
                >
                  +212 6 90 62 66 45
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="text-purple-400" size={20} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sidi+Maarouf,+Casablanca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors underline"
                >
                  Sidi Maarouf, Casablanca
                </a>
              </div>
            </div>
      </div>
    </div>
  );
}