import React from 'react';
import { 
  SquareActivity, 
  Search, 
  ChevronRight, 
  Baby, 
  Shapes, 
  Users, 
  Activity, 
  Droplet, 
  Bone, 
  ClipboardList, 
  CheckCircle, 
  Eye, 
  Calendar, 
  Download, 
  MessageCircleQuestion, 
  Headset
} from 'lucide-react';

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <SquareActivity className="w-8 h-8" />
                <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
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
              <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5">
                <Search className="w-4 h-4 text-slate-500" />
                <input 
                  className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-500 ml-2 outline-none" 
                  placeholder="Search services..." 
                  type="text"
                />
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 cursor-pointer">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <a className="hover:text-primary" href="#">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a className="hover:text-primary" href="#">Services</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-slate-100 font-medium">Ultrasound & Doppler</span>
        </nav>

        {/* Hero Section */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10"></div>
          <img 
            alt="Ultrasound monitor displaying a scan during a patient examination" 
            className="w-full h-full object-cover object-center" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKkJyfBx8sxz0Khyq8dCKGSNzhkkyI2vBcl_8gswHB_du0l_dMYP-Jh0OSsyAoGfTfw_d4gBeloRbqTZZZZTkTh10Lhv9MvWSSxBGqjxjD1ATV89haXn4YIxOMlMpT3BThNRvaUmHC64OZjd_QmwaZ2zpcaZ6_zHn6oBYeOhpNXubPQpWjXkmP-LTfnu4MeRhgGNa9n4a2BGLcb8QrVqc7UtySm6M6Yl7s_ZOM8afqBl-7SFSZWzagy4C_h_TCwr6w1czAI2_r4ts"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block shadow-sm">
              Diagnostic Imaging
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight drop-shadow-md">
              Ultrasound & Color Doppler
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl drop-shadow-sm">
              High-resolution sonography services for comprehensive internal imaging and prenatal care.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Safe & Radiation-Free */}
            <section className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-xl text-primary shrink-0">
                <Baby className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Safe & Radiation-Free</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Ultrasound uses high-frequency sound waves rather than ionizing radiation, making it the safest imaging modality for pregnant women and children. Our center utilizes advanced 3D/4D technology for exceptional clarity.
                </p>
              </div>
            </section>

            {/* Types of Scans */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Shapes className="w-6 h-6 text-teal-accent" /> Types of Scans Available
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">Pregnancy Scans</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Routine antenatal scans, viability checks, anomaly scans (Level II), and growth dopplers.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Activity className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">Abdominal & Pelvic</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Evaluation of liver, kidneys, gallbladder, pancreas, spleen, and reproductive organs.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Droplet className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">Color Doppler</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Assesses blood flow in arteries and veins, detecting clots or poor circulation (Carotid, Renal, Limb Doppler).</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Bone className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">Small Parts</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">High-resolution imaging for thyroid, breast, scrotum, and soft tissue swellings.</p>
                </div>
              </div>
            </section>

            {/* Preparation Instructions */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <ClipboardList className="w-6 h-6 text-teal-accent" /> Preparation Instructions
              </h3>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm mb-6">
                <h4 className="font-bold text-primary mb-3">General Guidelines</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                    <span><strong>Whole Abdomen:</strong> Fasting for 6-8 hours is required. You may drink water but avoid milk or tea.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                    <span><strong>KUB / Pelvis / Early Pregnancy:</strong> Drink plenty of water (1 liter) 1 hour before the scan. Do not urinate, a full bladder is necessary.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                    <span><strong>Neck / Thyroid / Scrotum / Breast:</strong> No specific preparation is needed.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* During the Procedure */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-teal-accent" /> During the Procedure
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">1</div>
                  <p>You will lie on an examination table. A clear, water-based gel will be applied to the area of the body being studied. This helps the probe make secure contact with the skin.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">2</div>
                  <p>The sonographer will move the transducer probe firmly over the skin. You might feel some pressure, but it is generally painless.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">3</div>
                  <p>The procedure usually takes 15 to 30 minutes. Once done, the gel is wiped off, and you can resume normal activities immediately.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
                <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
                <div className="space-y-4">
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20 cursor-pointer">
                    <Calendar className="w-5 h-5" /> Book Ultrasound
                  </button>
                  <button className="w-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer">
                    <Download className="w-5 h-5" /> Download Guidelines
                  </button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-sm text-slate-500 mb-4 uppercase tracking-wider font-bold">Estimated Pricing</p>
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-slate-700 dark:text-slate-300">Routine USG</span>
                      <span className="text-lg font-bold">₹800 - ₹1,500</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-slate-700 dark:text-slate-300">Level II / Anomaly</span>
                      <span className="text-lg font-bold">₹2,000 - ₹2,500</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-slate-700 dark:text-slate-300">Color Doppler</span>
                      <span className="text-lg font-bold">₹2,500 - ₹3,500</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-4 italic">*Prices vary based on complexity and specific study type.</p>
                </div>
              </div>

              {/* Common FAQs */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-teal-accent" /> Common FAQs
                </h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-teal-accent mb-1">Is it safe for my baby?</p>
                    <p className="text-slate-300">Yes, ultrasound does not use radiation and is safe for fetal monitoring.</p>
                  </div>
                  <div>
                    <p className="font-bold text-teal-accent mb-1">Do I need a full bladder?</p>
                    <p className="text-slate-300">For lower abdomen and early pregnancy scans, a full bladder is essential for clear images.</p>
                  </div>
                  <div>
                    <p className="font-bold text-teal-accent mb-1">How long does it take?</p>
                    <p className="text-slate-300">Most scans are completed within 15-30 minutes.</p>
                  </div>
                </div>
                <a className="inline-block mt-6 text-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors" href="#">View All FAQs</a>
              </div>

              {/* Need Help */}
              <div className="flex items-center gap-4 p-4 bg-teal-accent/10 rounded-xl border border-teal-accent/20">
                <Headset className="w-8 h-8 text-teal-accent" />
                <div>
                  <p className="text-xs font-bold text-teal-accent uppercase">Need Help?</p>
                  <p className="text-sm font-bold">+91 91234 56789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* WhatsApp Floating Button */}
      <a 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center" 
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white mb-6">
            <SquareActivity className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">
              Devam <span className="text-primary">Diagnostic</span>
            </span>
          </div>
          <p className="max-w-xl mx-auto mb-8">
            Providing world-class diagnostic services in Patna. Trust us for accurate, fast, and reliable health imaging and pathology.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Cookie Policy</a>
          </div>
          <p className="text-sm">© 2024 Devam Diagnostic Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
