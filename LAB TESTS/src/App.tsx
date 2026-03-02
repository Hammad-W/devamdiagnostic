import React from 'react';

export default function App() {
  return (
    <div className="bg-background-light text-slate-900 font-sans min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                  Devam <span className="text-primary">Diagnostic</span>
                </h1>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
                <a className="text-sm font-medium text-primary underline underline-offset-4" href="#">Services</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">About Us</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Doctors</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center bg-slate-100 rounded-lg px-3 py-1.5">
                <span className="material-symbols-outlined text-slate-500 text-sm">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-500 outline-none ml-2" placeholder="Search tests..." type="text" />
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-primary/20">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <a className="hover:text-primary" href="#">Home</a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <a className="hover:text-primary" href="#">Services</a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-900 font-medium">Pathology & Lab</span>
        </nav>

        {/* Hero Section */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10"></div>
          <img alt="Modern pathology laboratory" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEbTPUF9bQv87xS1XSjOWi8ewwigIlnS_jYEl92b0h7epU3fO_VqFM8o7fIPHxmDRt3f7BuFx6oMjAhLtGrDLysQY-PKKVX9uZHe-3MpLhp0FCbvaRXnszBNNuPhhgZeXHKLlQCT13wLiUCotHIJQZE2sefkptTZBBuxfPv4wkqdtrm05DT4Xrr4wi5pjvglY5D7WhU1f6RpAUbuAvAZXnGf7fw-D3VETwuLF8AMF4xJ33NQsV1W7MKjLDPfMdHJZX-C-6kGSaCVs" />
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <span className="bg-rose-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Clinical Laboratory</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">Advanced Pathology & Lab Services</h2>
            <p className="text-slate-200 text-lg max-w-2xl">Accurate diagnostics powered by cutting-edge technology and expert pathologists for precise health monitoring.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Free Home Sample Collection */}
            <section className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-xl text-primary">
                <span className="material-symbols-outlined text-3xl">home_health</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Free Home Sample Collection</h3>
                <p className="text-slate-600">Convenience at your doorstep. Our trained phlebotomists will visit your home for sample collection at no extra cost for bills above ₹500. Safe, hygienic, and punctual service across Patna.</p>
              </div>
            </section>

            {/* Our Key Departments */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-rose-accent">science</span> Our Key Departments
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Hematology */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-rose-accent bg-rose-50 p-2 rounded-lg">bloodtype</span>
                    <h4 className="font-bold text-slate-900 text-lg">Hematology</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Comprehensive blood tests including CBC, Hemoglobin, Platelet counts, and coagulation studies.</p>
                  <ul className="space-y-1 text-sm text-slate-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>Complete Blood Count (CBC)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>ESR & Blood Grouping</li>
                  </ul>
                </div>
                {/* Biochemistry */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-teal-accent bg-teal-50 p-2 rounded-lg">water_drop</span>
                    <h4 className="font-bold text-slate-900 text-lg">Biochemistry</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Analysis of body fluids for Liver Function, Kidney Function, Lipid Profiles, and Diabetes monitoring.</p>
                  <ul className="space-y-1 text-sm text-slate-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>HbA1c & Blood Sugar</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>Lipid Profile & LFT/KFT</li>
                  </ul>
                </div>
                {/* Microbiology */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-indigo-500 bg-indigo-50 p-2 rounded-lg">coronavirus</span>
                    <h4 className="font-bold text-slate-900 text-lg">Microbiology</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Detection of infectious diseases through culture sensitivity, staining, and advanced serological tests.</p>
                  <ul className="space-y-1 text-sm text-slate-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>Urine Culture & Sensitivity</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>Typhoid, Dengue & Malaria</li>
                  </ul>
                </div>
                {/* Biopsy & Cytology */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-amber-500 bg-amber-50 p-2 rounded-lg">biotech</span>
                    <h4 className="font-bold text-slate-900 text-lg">Biopsy & Cytology</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Expert examination of tissue samples (Biopsies) and FNAC for accurate cancer screening and diagnosis.</p>
                  <ul className="space-y-1 text-sm text-slate-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>FNAC & Pap Smear</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>Tissue Biopsy Reporting</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Report Turnaround Time */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-rose-accent">schedule</span> Report Turnaround Time
              </h3>
              <div className="space-y-4 text-slate-600">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-xl">bolt</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Same Day Reports</h4>
                    <p className="text-sm mt-1">For routine tests like CBC, Blood Sugar, and Urine Analysis, reports are available within 4-6 hours of sample collection.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-xl">calendar_today</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Next Day Reports</h4>
                    <p className="text-sm mt-1">Specialized hormonal assays (Thyroid), Vitamin levels, and culture reports typically require 24 hours for accurate processing.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-xl">hourglass_bottom</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Specialized Testing</h4>
                    <p className="text-sm mt-1">Biopsies, genetic testing, and complex molecular tests may take 3-7 days depending on the complexity of the analysis.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-[100px] space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
                <div className="space-y-4">
                  <button className="w-full bg-rose-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-rose-700 transition-colors shadow-lg shadow-rose-accent/20">
                    <span className="material-symbols-outlined">moped</span> Book Home Collection
                  </button>
                  <button className="w-full bg-slate-100 text-slate-900 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                    <span className="material-symbols-outlined">upload_file</span> Upload Prescription
                  </button>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-sm text-slate-500 mb-2 uppercase tracking-wider font-bold">Popular Health Panels</p>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-slate-700 text-sm">Full Body Checkup</span>
                    <span className="text-base font-bold text-primary">₹1,499</span>
                  </div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-slate-700 text-sm">Diabetes Panel</span>
                    <span className="text-base font-bold text-primary">₹750</span>
                  </div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-slate-700 text-sm">Thyroid Profile</span>
                    <span className="text-base font-bold text-primary">₹450</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3 italic">*Prices subject to change. Home collection charges may apply for small orders.</p>
                </div>
              </div>

              {/* Common Questions */}
              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-rose-accent">question_answer</span> Common Questions
                </h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-rose-accent mb-1">Do I need to fast?</p>
                    <p className="text-slate-300">Yes, 8-10 hours fasting is required for Sugar (Fasting), Lipid Profile, and Thyroid tests.</p>
                  </div>
                  <div>
                    <p className="font-bold text-rose-accent mb-1">How do I get reports?</p>
                    <p className="text-slate-300">You can download them online via our website, WhatsApp, or collect a hard copy from the center.</p>
                  </div>
                  <div>
                    <p className="font-bold text-rose-accent mb-1">Is home collection safe?</p>
                    <p className="text-slate-300">Absolutely. Our staff follows strict hygiene protocols and uses sterile, single-use kits.</p>
                  </div>
                </div>
                <a className="inline-block mt-4 text-white/70 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors" href="#">View All FAQs</a>
              </div>

              {/* Lab Enquiry */}
              <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-xl border border-rose-100">
                <span className="material-symbols-outlined text-rose-accent text-3xl">support_agent</span>
                <div>
                  <p className="text-xs font-bold text-rose-accent uppercase">Lab Enquiry</p>
                  <p className="text-sm font-bold text-slate-800">+91 91234 56789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* WhatsApp Floating Button */}
      <a className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center" href="https://wa.me/yournumber">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white mb-6">
            <span className="material-symbols-outlined text-3xl">medical_services</span>
            <span className="text-xl font-bold tracking-tight">Devam <span className="text-primary">Diagnostic</span></span>
          </div>
          <p className="max-w-xl mx-auto mb-8">Providing world-class diagnostic services in Patna. Trust us for accurate, fast, and reliable health imaging and pathology.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a className="hover:text-primary" href="#">Terms of Service</a>
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Cookie Policy</a>
          </div>
          <p className="text-sm">© 2024 Devam Diagnostic Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
