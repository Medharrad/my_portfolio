'use client';

import { Pacifico } from 'next/font/google';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

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

      <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-lg max-w-md w-full space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <div className="space-y-4 text-gray-300">
          <div className="flex items-center gap-3">
            <Mail className="text-purple-400" size={20} />
            <span>harrademed@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-purple-400" size={20} />
            <span>+212 6 90 62 66 45</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-purple-400" size={20} />
            <span>Sidi Maarouf, Casablanca</span>
          </div>
        </div>
      </div>
    </div>
  );
}
