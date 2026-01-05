"use client";

import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Send 
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-black text-white flex items-center gap-2">
            <Image src="/tripmingle-logo.png" alt="TripMingle Logo" width={40} height={40} />
              <span className="text-blue-500">Trip</span>Mingle
            </Link>
            <p className="text-sm leading-relaxed">
              Making solo travel safer and more social. Join our global community to find your perfect travel companion for your next big adventure.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-blue-500 transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-blue-500 transition-colors"><Youtube size={20} /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/explore" className="hover:text-blue-500 transition-colors">Find a Buddy</Link></li>
              <li><Link href="/travel-plans" className="hover:text-blue-500 transition-colors">Travel Plans</Link></li>
              <li><Link href="/destinations" className="hover:text-blue-500 transition-colors">Destinations</Link></li>
              <li><Link href="/premium" className="hover:text-blue-500 transition-colors">Premium Membership</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Safety Guidelines</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to get the latest travel deals and buddy requests.</p>
            <div className="flex items-center bg-gray-800 rounded-xl overflow-hidden p-1 border border-gray-700">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none focus:ring-0 text-sm px-3 w-full outline-none"
              />
              <button className="bg-blue-600 p-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-gray-800 text-sm mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-500">
              <Phone size={18} />
            </div>
            <span>+880 123 456 789</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-500">
              <Mail size={18} />
            </div>
            <span>support@tripmingle.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-500">
              <MapPin size={18} />
            </div>
            <span>Feni, Bangladesh</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-wider">
          <p>© {currentYear} TripMingle Platform. All Rights Reserved.</p>
          <p>Designed with ❤️ for Travelers</p>
        </div>
      </div>
    </footer>
  );
}