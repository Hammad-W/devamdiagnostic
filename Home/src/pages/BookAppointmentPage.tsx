import { useState } from 'react';
import {
  Activity,
  ChevronRight,
  ChevronLeft,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Info,
  Phone,
  Mail,
  Shield,
  Scale,
  User,
  Microscope,
  MessageCircle,
} from 'lucide-react';

export function BookAppointmentPage() {
  const [selectedService, setSelectedService] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(1);

  const services = [
    { name: 'X-Ray', desc: 'Digital Radiography', price: '₹4,500' },
    { name: 'Ultrasound', desc: 'USG & Color Doppler', price: '₹3,000' },
    { name: 'CT Scan', desc: 'Computed Tomography', price: '₹5,000' },
    { name: 'MRI Scan', desc: 'Magnetic Resonance Imaging', price: '₹5,500 average' },
    { name: 'TMT/Cardiac Test', desc: 'Treadmill Test', price: '₹4,500' },
    { name: 'ECG', desc: 'Electrocardiogram', price: '₹300' },
    { name: 'Blood Tests', desc: 'Pathology', price: '₹200-400' },
    { name: 'Thyroid Tests', desc: 'Hormone Panel', price: '₹400' },
  ];

  const slots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  return (
    <div className="min-h-screen bg-[#f6f6f8] font-sans text-slate-900">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <nav className="flex text-sm text-slate-500 mb-4 items-center gap-2">
            <a href="#" className="hover:text-[#1152d4]">
              Home
            </a>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">Book Appointment</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Book Your Diagnostic Appointment
          </h1>
        </div>

        <div className="mb-6 flex flex-wrap border-b border-slate-200">
          <div className="flex flex-col items-center border-b-2 border-[#1152d4] px-6 pb-4 pt-2">
            <span className="text-sm font-bold text-[#1152d4]">1. Service &amp; Date</span>
          </div>
          <div className="flex flex-col items-center border-b-2 border-transparent px-6 pb-4 pt-2">
            <span className="text-sm font-bold text-slate-500">2. Patient Details</span>
          </div>
          <div className="flex flex-col items-center border-b-2 border-transparent px-6 pb-4 pt-2">
            <span className="text-sm font-bold text-slate-500">3. Confirmation</span>
          </div>
        </div>

        <p className="text-slate-600 mb-8 max-w-2xl text-lg">
          Schedule your clinical tests at our Patna main center. Our team ensures a quick and
          comfortable experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Microscope className="text-[#1152d4]" size={24} />
                Select Diagnostic Service
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedService(i)}
                    className={`flex flex-col items-start p-4 border-2 rounded-xl text-left transition-all ${
                      selectedService === i
                        ? 'border-[#1152d4] bg-[#1152d4]/5'
                        : 'border-slate-200 hover:border-[#1152d4]/50'
                    }`}
                  >
                    <span className="font-bold">{s.name}</span>
                    <span className="text-xs text-slate-500 mt-1">{s.desc}</span>
                    <span className="text-xs font-semibold text-[#1152d4] mt-2">{s.price}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CalendarIcon className="text-[#1152d4]" size={24} />
                    Preferred Date
                  </h2>
                  <div className="p-4 border border-slate-200 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">October 2023</span>
                      <div className="flex gap-2">
                        <button className="p-1 hover:bg-slate-100 rounded">
                          <ChevronLeft size={20} />
                        </button>
                        <button className="p-1 hover:bg-slate-100 rounded">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold mb-2">
                      <div>Su</div>
                      <div>Mo</div>
                      <div>Tu</div>
                      <div>We</div>
                      <div>Th</div>
                      <div>Fr</div>
                      <div>Sa</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      <div className="p-2 text-slate-300">24</div>
                      <div className="p-2 text-slate-300">25</div>
                      <div className="p-2 text-slate-300">26</div>
                      <div className="p-2 text-slate-300">27</div>
                      <div className="p-2 text-slate-300">28</div>
                      <div className="p-2 text-slate-300">29</div>
                      <div className="p-2 text-slate-300">30</div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">1</div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">2</div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">3</div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">4</div>
                      <div className="p-2 bg-[#1152d4] text-white font-bold rounded cursor-pointer shadow-md">
                        5
                      </div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">6</div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">7</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="text-[#1152d4]" size={24} />
                    Available Slots
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {slots.map((slot, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedSlot(i)}
                        className={`py-2.5 px-3 border-2 rounded-lg text-sm transition-colors ${
                          selectedSlot === i
                            ? 'border-[#1152d4] bg-[#1152d4]/5 font-bold text-[#1152d4]'
                            : 'border-slate-200 hover:bg-[#1152d4]/5 hover:border-[#1152d4]/50'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <User className="text-[#1152d4]" size={24} />
                Patient Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1152d4]/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1152d4]/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Age</label>
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1152d4]/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Gender
                  </label>
                  <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1152d4]/50 transition-all appearance-none">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-[#1152d4]/5 p-6 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-[#1152d4]">Booking Summary</h3>
                </div>

                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                        Service Selected
                      </p>
                      <p className="text-lg font-bold text-slate-900">
                        {services[selectedService].name}
                      </p>
                    </div>
                    <div className="text-[#1152d4] bg-[#1152d4]/10 p-2.5 rounded-lg">
                      <Activity size={20} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CalendarIcon size={18} className="text-slate-400" />
                      <span className="text-sm font-medium text-slate-700">
                        Thursday, Oct 5, 2023
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-slate-400" />
                      <span className="text-sm font-medium text-slate-700">
                        {slots[selectedSlot]} Slot
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-slate-400" />
                      <span className="text-sm font-medium text-slate-700">
                        Patna Main Center, Kankarbagh
                      </span>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="text-sm font-bold text-amber-800 flex items-center gap-2 mb-3">
                      <Info size={16} />
                      Preparation Instructions
                    </h4>
                    <ul className="text-xs text-amber-800 space-y-2 list-disc pl-4">
                      <li>4-6 hours fasting required before scan.</li>
                      <li>Remove all metal objects and jewelry.</li>
                      <li>Arrive 15 minutes before scheduled time.</li>
                      <li>Bring previous medical reports if any.</li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-500">Service Fee</span>
                      <span className="text-sm font-medium">
                        {services[selectedService].price.replace(' average', '')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-slate-500">Consultation</span>
                      <span className="text-sm text-teal-600 font-medium italic">
                        Included
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-lg font-bold">Total Estimated</span>
                      <span className="text-2xl font-black text-[#1152d4]">
                        {services[selectedService].price.replace(' average', '')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                    Payment will be collected at the center
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <button className="w-full bg-[#1152d4] text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-[#1152d4]/90 shadow-lg shadow-[#1152d4]/20 transition-all">
                  Confirm Appointment
                </button>
                <button className="flex items-center justify-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors py-2">
                  <MessageCircle size={24} />
                  Chat with Support
                </button>
              </div>

              <div className="bg-gradient-to-br from-[#1152d4] to-blue-700 rounded-xl p-6 text-white shadow-lg">
                <h3 className="font-bold text-lg mb-2">Need Help Booking?</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our patient coordinators are available 24/7 to assist you with scheduling.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Phone size={16} className="text-white" />
                    </div>
                    <span className="font-bold tracking-wide">+91 612 2345 678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Mail size={16} className="text-white" />
                    </div>
                    <span className="text-sm">help@devamdiagnostic.in</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200 text-center pb-12">
          <p className="text-slate-500 text-sm">
            © 2023 Devam Diagnostic Center Patna. All diagnostic procedures are performed by
            certified professionals.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="#"
              className="text-slate-400 hover:text-[#1152d4] transition-colors flex items-center gap-1.5 text-sm"
            >
              <Shield size={16} /> Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-[#1152d4] transition-colors flex items-center gap-1.5 text-sm"
            >
              <Scale size={16} /> Terms of Service
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

