export function XrayPage() {
  return (
    <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <a className="hover:text-primary" href="#">
            Home
          </a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <a className="hover:text-primary" href="#">
            Services
          </a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-900 dark:text-slate-100 font-medium">
            Digital X-Ray
          </span>
        </nav>

        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
          <img
            alt="Radiologist reviewing digital chest X-ray on high-resolution diagnostic monitors"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAptVx1YjT2I3pEKZ-GbR1fDuxoK2o44ydd3kOVYvr8K6Cs5lx8Ro7TMm0hW4r0EAowLTCsti7GCNepzLVAWVoKuucmfHhr-4FC6aG2vRS3QQDS-R1uRagbOMENtHUwzJ0ZvStG5XpO1zlO_YJHJpo_K314DXXJWsovWQwc44CR1LuJoQTi6Y-H2DRbxOydj_g8682gH52VZkhQMi7BDuFqdZuEAvAz1xqioPZPj4E-IHcjSRA93Ur4FcXJZc-ToCMoRtBCi6pPitw"
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
            <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Diagnostic Imaging
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Digital X-Ray Services
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl">
              High-precision, low-radiation imaging technology for rapid and
              accurate diagnosis at Devam Diagnostic Center.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-xl text-primary">
                <span className="material-symbols-outlined text-3xl">
                  compare_arrows
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Digital vs. Traditional X-Ray
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Our center uses advanced Digital Radiography (DR) systems.
                  Unlike traditional film X-rays, digital X-rays provide higher
                  resolution images instantly, use significantly less radiation
                  (up to 80% less), and allow for easier storage and sharing
                  with your specialists.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-accent">
                  directions_walk
                </span>{' '}
                Walk-in Availability
              </h3>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  At Devam Diagnostic Center, we understand that injuries and
                  urgent health concerns don&apos;t always happen on a schedule.
                  That&apos;s why we offer{' '}
                  <strong>
                    convenient walk-in services for all standard X-ray
                    procedures
                  </strong>
                  .
                </p>
                <p className="mt-4">
                  Most X-ray exams are quick, taking only 10-15 minutes. While
                  appointments are recommended to minimize wait times, you are
                  welcome to visit us during operating hours for immediate
                  service.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-accent">
                  medication_liquid
                </span>{' '}
                Common X-Ray Types
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      respiratory_rate
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      Chest X-Ray
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    Used to assess the lungs, heart, and chest wall. Common for
                    diagnosing pneumonia, heart failure, or lung cancer.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="material-symbols-outlined text-teal-accent text-sm">
                        check
                      </span>
                      <span>Tuberculosis Screening</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="material-symbols-outlined text-teal-accent text-sm">
                        check
                      </span>
                      <span>Rib Fractures</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      orthopedics
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      Bone &amp; Joint X-Ray
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    The fastest way to view and assess broken bones, joint
                    abnormalities, and arthritis progression.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="material-symbols-outlined text-teal-accent text-sm">
                        check
                      </span>
                      <span>Fracture Detection</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="material-symbols-outlined text-teal-accent text-sm">
                        check
                      </span>
                      <span>Dislocation Check</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      dentistry
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      Dental X-Ray (OPG)
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Panoramic scanning of the upper and lower jaw. Essential for
                    planning dental implants and orthodontics.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      accessibility_new
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      Spine X-Ray
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Evaluates the spinal column for infection, tumors,
                    alignment issues like scoliosis, or disk disease.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-accent">
                  visibility
                </span>{' '}
                What to Expect
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">
                    1
                  </div>
                  <p>
                    You may be asked to change into a gown and remove jewelry,
                    eyeglasses, or any metal objects that might interfere with
                    the X-ray image.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">
                    2
                  </div>
                  <p>
                    A technologist will position your body against the X-ray
                    plate. You may be asked to lie down, stand up, or sit,
                    depending on the area being imaged.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">
                    3
                  </div>
                  <p>
                    You must remain very still while the X-ray is taken to
                    prevent blurring. The actual exposure takes less than a
                    second and is completely painless.
                  </p>
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
                    <span className="material-symbols-outlined">event</span> Book
                    X-Ray Now
                  </button>
                  <button className="w-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">call</span> Call
                    for Inquiry
                  </button>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-sm text-slate-500 mb-2 uppercase tracking-wider font-bold">
                    Estimated Pricing
                  </p>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300">
                      Single View
                    </span>
                    <span className="text-lg font-bold">₹300 - ₹500</span>
                  </div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300">
                      Double View
                    </span>
                    <span className="text-lg font-bold">₹600 - ₹800</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-700 dark:text-slate-300">
                      Specialized (IVP/HSG)
                    </span>
                    <span className="text-lg font-bold">₹1,200+</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 italic">
                    *Prices vary based on body part and views required.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-accent">
                    question_answer
                  </span>{' '}
                  X-Ray FAQs
                </h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-teal-accent mb-1">
                      Is radiation safe?
                    </p>
                    <p className="text-slate-300">
                      Yes, the radiation dose is extremely low, comparable to
                      environmental background radiation.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-teal-accent mb-1">
                      Do I need an appointment?
                    </p>
                    <p className="text-slate-300">
                      Appointments are preferred but walk-ins are welcome for
                      standard X-rays.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-teal-accent mb-1">
                      Pregnancy precautions?
                    </p>
                    <p className="text-slate-300">
                      Always inform the technician if you are pregnant or think
                      you might be.
                    </p>
                  </div>
                </div>
                <a
                  className="inline-block mt-4 text-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
                  href="#"
                >
                  View All FAQs
                </a>
              </div>

              <div className="flex items-center gap-4 p-4 bg-teal-accent/10 rounded-xl border border-teal-accent/20">
                <span className="material-symbols-outlined text-teal-accent text-3xl">
                  support_agent
                </span>
                <div>
                  <p className="text-xs font-bold text-teal-accent uppercase">
                    Need Help?
                  </p>
                  <p className="text-sm font-bold">+91 91234 56789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

