import {
  Activity,
  Search,
  ChevronRight,
  HeartPulse,
  HelpCircle,
  ClipboardCheck,
  CheckCircle2,
  Eye,
  Heart,
  Download,
  MessageCircleQuestion,
  Headset
} from 'lucide-react';

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <Activity className="w-8 h-8" />
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
                <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-500 outline-none ml-2" placeholder="Search services..." type="text" />
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-primary/20 cursor-pointer">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <a className="hover:text-primary" href="#">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a className="hover:text-primary" href="#">Services</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-slate-100 font-medium">ECG & TMT</span>
        </nav>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10"></div>
          <img alt="Heart monitor displaying ECG rhythm strip" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5BscnVKx9bz0yXeSq9OhboOO5Hur3QAFq-Ou4uiTJVRAE_5qOUgnSDwstWIeKxKbugcCVZIN3LYN-e8HqssKd_spHp8UxU9NK6I3LnjeiHqmuM3r7tLfeIxvGyUCoJ4J89VUE0sP9DITQySZpLRMT9pN0J2rNXVUtpLDv3TvVxlYyqkQ3j7qtPgjrDfd-QNjtcLSUWkwSyBw7NvF4_wyfBjH6HEDQv-zUdmtWbX1KihOCrdPiUpp5ejBcIA6hm5IzWtmQ0nhlQOQ" />
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <span className="bg-rose-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Cardiac Care</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">ECG, TMT & Stress Tests</h2>
            <p className="text-slate-200 text-lg max-w-2xl">Comprehensive heart health monitoring using advanced Electrocardiogram and Treadmill Stress Test technology.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-rose-100 dark:bg-rose-900/40 p-3 rounded-xl text-rose-600 dark:text-rose-400 shrink-0">
                <HeartPulse className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Digital 12-Channel ECG</h3>
                <p className="text-slate-600 dark:text-slate-400">Our center utilizes state-of-the-art 12-channel ECG machines and computerized TMT systems for precise cardiac evaluation. We ensure rapid reporting for critical cases to facilitate immediate medical intervention.</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-teal-accent" /> What is a TMT (Stress Test)?
              </h3>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>A Treadmill Test (TMT), also known as an exercise stress test, determines how well your heart responds during times when it's working hardest. During the test, you'll be asked to exercise — typically walking on a treadmill — while being hooked up to an electrocardiogram (ECG) machine.</p>
                <p className="mt-4">This allows your doctor to monitor your heart rate, breathing, blood pressure, and electrical activity to detect coronary artery disease or determine safe levels of exercise following a heart attack or surgery.</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <ClipboardCheck className="w-6 h-6 text-teal-accent" /> Preparation for Stress Tests
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <h4 className="font-bold text-primary mb-3">Before You Arrive</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>Wear comfortable walking shoes and loose pants.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>Do not eat a heavy meal 2-3 hours before the test.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>Avoid caffeine (tea, coffee) for 24 hours prior.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <h4 className="font-bold text-primary mb-3">Medical Instructions</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>Bring a list of all current medications.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>Consult doctor about stopping beta-blockers.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>Previous ECG reports are helpful for comparison.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-teal-accent" /> During the Procedure
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">1</div>
                  <p>Electrodes (sticky patches) will be attached to your chest, legs, and arms. These are connected by wires to the ECG machine which records your heart's electrical signals.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">2</div>
                  <p>For TMT, you will start walking slowly on the treadmill. The speed and incline will gradually increase every 3 minutes. Your blood pressure will be checked frequently.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">3</div>
                  <p>The test continues until you reach a target heart rate or develop symptoms like chest pain or shortness of breath. A cool-down period follows immediately after.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
                <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
                <div className="space-y-4">
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20 cursor-pointer">
                    <Heart className="w-5 h-5" /> Schedule Heart Check
                  </button>
                  <button className="w-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors cursor-pointer">
                    <Download className="w-5 h-5" /> Heart Health Guide
                  </button>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-sm text-slate-500 mb-2 uppercase tracking-wider font-bold">Estimated Pricing</p>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300">Resting ECG</span>
                    <span className="text-lg font-bold">₹400</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-700 dark:text-slate-300">TMT (Stress Test)</span>
                    <span className="text-lg font-bold">₹2,500</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 italic">*Consultation charges may apply separately.</p>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-teal-accent" /> Cardiac FAQs
                </h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-teal-accent mb-1">Is TMT safe?</p>
                    <p className="text-slate-300">Yes, it is generally safe. It is performed under strict medical supervision.</p>
                  </div>
                  <div>
                    <p className="font-bold text-teal-accent mb-1">How long does it take?</p>
                    <p className="text-slate-300">An ECG takes 5-10 mins. A TMT takes about 30-45 mins including prep.</p>
                  </div>
                  <div>
                    <p className="font-bold text-teal-accent mb-1">Why do I need it?</p>
                    <p className="text-slate-300">To check for irregular heartbeats or blocked arteries causing chest pain.</p>
                  </div>
                </div>
                <a className="inline-block mt-4 text-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors" href="#">View All FAQs</a>
              </div>

              <div className="flex items-center gap-4 p-4 bg-teal-accent/10 rounded-xl border border-teal-accent/20">
                <Headset className="w-8 h-8 text-teal-accent" />
                <div>
                  <p className="text-xs font-bold text-teal-accent uppercase">Cardiac Helpline</p>
                  <p className="text-sm font-bold">+91 91234 56789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <a className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center" href="https://wa.me/yournumber">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
      </a>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white mb-6">
            <Activity className="w-8 h-8" />
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
