import React from 'react';
import { Microscope, Send, MapPin, Phone, Clock, MessageCircle, Share2, ThumbsUp, Camera } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[#f6f6f8]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-[#1152d4]">
                <Microscope className="w-8 h-8" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Devam Diagnostic</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-[#1152d4] transition-colors" href="#">Home</a>
              <a className="text-sm font-medium hover:text-[#1152d4] transition-colors" href="#">Services</a>
              <a className="text-sm font-medium hover:text-[#1152d4] transition-colors" href="#">Packages</a>
              <a className="text-sm font-medium text-[#1152d4] underline underline-offset-4" href="#">Contact Us</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="bg-[#1152d4] hover:bg-[#0f48ba] text-white px-5 py-2 rounded-lg text-sm font-bold transition-all">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Have questions about our diagnostic services or want to schedule a home collection? Reach out to our team in Patna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Full Name</label>
                  <input 
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1152d4] focus:border-[#1152d4] outline-none transition-all" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Email Address</label>
                  <input 
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1152d4] focus:border-[#1152d4] outline-none transition-all" 
                    placeholder="john@example.com" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Phone Number</label>
                <input 
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1152d4] focus:border-[#1152d4] outline-none transition-all" 
                  placeholder="+91 00000 00000" 
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Message</label>
                <textarea 
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1152d4] focus:border-[#1152d4] outline-none transition-all resize-y" 
                  placeholder="How can we help you today?" 
                  rows={4}
                ></textarea>
              </div>
              <button 
                className="w-full bg-[#1152d4] text-white font-bold py-4 rounded-lg hover:bg-[#0f48ba] transition-all flex items-center justify-center gap-2" 
                type="button"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Info & Map */}
          <div className="space-y-8">
            {/* Location Info */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1152d4]/10 p-3 rounded-lg text-[#1152d4]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Visit Us</h3>
                    <p className="text-slate-600 mt-1">123 Health Plaza, Bailey Road, Patna, Bihar 800001, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1152d4]/10 p-3 rounded-lg text-[#1152d4]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Call Us</h3>
                    <p className="text-slate-600 mt-1">+91 612 2345 678<br/>+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1152d4]/10 p-3 rounded-lg text-[#1152d4]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Working Hours</h3>
                    <p className="text-slate-600 mt-1">Mon - Sat: 07:00 AM - 09:00 PM<br/>Sun: 08:00 AM - 02:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-xl overflow-hidden border border-slate-200 h-64 relative group">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Map view showing the location of the medical center in Patna" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8_4ZLvoK5HL_0H4veXoW6Io6IfcZyn3RYuZ1kqeIbU0Yl73QIKoG-m6VY-SOlx39d4yLPRV9TqUQ4fzEZ-y2WaBLHLIaakbx-qiRz5p2Pjua50Wc4DG0va342_hofHnKip-oWCt1lLnSx2UouGJfYZzbKLc_7ZNQleGS-dJiYdtS8CDIJl5Ds3UE0PxAzTbSzduqn6XYwDwPnSxpiZExrUUUV325AW6_3kBNY34i0xrNwZQmVi2M4cv90sKTSbyQY9OubkrxWHwQ"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute bg-white px-4 py-2 rounded-full shadow-lg border border-[#1152d4]/20 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1152d4]" fill="currentColor" />
                  <span className="text-sm font-bold text-slate-900">Devam Diagnostic Center</span>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-slate-100 p-8 rounded-xl border-t-4 border-[#008080] shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-slate-900">Quick Support</h3>
              <p className="text-slate-600 mb-6">Need instant help? Connect with our support team directly via WhatsApp.</p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </button>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1152d4] border border-slate-200 hover:scale-110 hover:bg-slate-50 transition-all shadow-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1152d4] border border-slate-200 hover:scale-110 hover:bg-slate-50 transition-all shadow-sm">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1152d4] border border-slate-200 hover:scale-110 hover:bg-slate-50 transition-all shadow-sm">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#101622] text-slate-400 py-12 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Microscope className="w-8 h-8 text-[#1152d4]" />
            <span className="text-white text-xl font-bold">Devam Diagnostic Center</span>
          </div>
          <p className="mb-8 max-w-md mx-auto">Providing high-quality diagnostic services to the community of Patna with precision and care.</p>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 Devam Diagnostic Center. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
