import {
  Activity,
  Search,
  ChevronRight,
  Microscope,
  HelpCircle,
  ClipboardCheck,
  CheckCircle2,
  Eye,
  Calendar,
  Download,
  MessageCircleQuestion,
  Headset,
} from 'lucide-react';

export function MriPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <a className="hover:text-primary" href="#">
            Home
          </a>
          <ChevronRight className="w-4 h-4" />
          <a className="hover:text-primary" href="#">
            Services
          </a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-slate-100 font-medium">
            MRI Scan
          </span>
        </nav>

        {/* Hero Section */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
          <img
            alt="Modern MRI machine in a clean clinical environment"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMT83bpRVncznh33yUjBrCdsb1pK70xzRNYgI3NUlOtsJXOwOnIb6m-vLbwxhYkgw5xt1pXgO5Ch3fATlp6dI01qJHKjps1BiUkTTe_3yAZLsHNxidDC6C0L1_PmVTjvcCom9xJJvia1RqPJQ2kULf2zWZN7jj3vD7MoHMEeuTex6UvjJZELAK86udy9fU_kmUsAEyYIGbsq2ZhQ0IB8_irPiuW3FebdUCDpe0vUwk_NaPSkNc9APP-BU8RZAHJJayLnxUOwKGAjQ"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Diagnostic Imaging
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
              Magnetic Resonance Imaging (MRI)
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl">
              State-of-the-art diagnostic imaging for precise internal health
              insights at our Patna center.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Advanced Technology Highlight */}
            <section className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-xl text-primary">
                <Microscope className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Advanced 3T MRI Technology
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Our Patna facility is equipped with the latest 3 Tesla MRI
                  scanner. This technology provides higher resolution images in
                  less time compared to standard 1.5T machines, allowing for
                  more accurate diagnosis of complex conditions.
                </p>
              </div>
            </section>

            {/* What is MRI */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-teal-accent" /> What is an
                MRI?
              </h3>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Magnetic Resonance Imaging (MRI) is a non-invasive imaging
                  technology that produces three-dimensional detailed anatomical
                  images. It is often used for disease detection, diagnosis, and
                  treatment monitoring. It is based on sophisticated technology
                  that excites and detects the change in the direction of the
                  rotational axis of protons found in the water that makes up
                  living tissues.
                </p>
                <p className="mt-4">
                  Unlike X-rays and CT scans, MRI does not use ionizing
                  radiation, making it a safer alternative for many patients,
                  especially those requiring frequent imaging.
                </p>
              </div>
            </section>

            {/* How to Prepare */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <ClipboardCheck className="w-6 h-6 text-teal-accent" /> How to
                Prepare
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <h4 className="font-bold text-primary mb-3">
                    Before You Arrive
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>
                        Wear loose, comfortable clothing without metal
                        fasteners.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>
                        Inform us if you have any metallic implants or
                        pacemakers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>
                        No fasting is required unless specified for contrast
                        scans.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <h4 className="font-bold text-primary mb-3">
                    What to Bring
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>Doctor&apos;s referral or prescription.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>Previous scan reports or medical records.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span>Valid ID proof for registration.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What to Expect */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-teal-accent" /> What to Expect
                During the Procedure
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">
                    1
                  </div>
                  <p>
                    You will be asked to lie on a motorized table that slides
                    into the large, tube-like scanner. Our staff will ensure you
                    are comfortable with pillows or blankets.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">
                    2
                  </div>
                  <p>
                    During the scan, the internal part of the magnet produces
                    repetitive tapping, thumping, and other noises. We provide
                    earplugs or headphones to block the noise.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-900 dark:text-slate-100">
                    3
                  </div>
                  <p>
                    An MRI technician monitors you from another room. You can
                    speak to them via an intercom throughout the session. The
                    scan typically lasts 15 to 45 minutes.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-[100px] space-y-6">
              {/* Quick Actions Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
                <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
                <div className="space-y-4">
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20">
                    <Calendar className="w-5 h-5" /> Book an MRI
                  </button>
                  <button className="w-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                    <Download className="w-5 h-5" /> Download Prep Guide
                  </button>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-sm text-slate-500 mb-2 uppercase tracking-wider font-bold">
                    Estimated Pricing
                  </p>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300">
                      Basic Scan
                    </span>
                    <span className="text-lg font-bold">
                      ₹4,500 - ₹8,000
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-700 dark:text-slate-300">
                      Contrast Scan
                    </span>
                    <span className="text-lg font-bold">
                      ₹8,000 - ₹12,000
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 italic">
                    *Prices may vary based on the body part and complexity of
                    the scan.
                  </p>
                </div>
              </div>

              {/* FAQ Sidebar */}
              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-teal-accent" />{' '}
                  Common FAQs
                </h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-teal-accent mb-1">
                      Does it hurt?
                    </p>
                    <p className="text-slate-300">
                      No, the procedure is completely painless. You only need to
                      remain still.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-teal-accent mb-1">
                      How long for reports?
                    </p>
                    <p className="text-slate-300">
                      Detailed reports are usually available within 24 hours.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-teal-accent mb-1">
                      Can I eat before?
                    </p>
                    <p className="text-slate-300">
                      Yes, unless your doctor specifically requests a
                      &apos;Fastened&apos; MRI.
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

              {/* Contact/Support */}
              <div className="flex items-center gap-4 p-4 bg-teal-accent/10 rounded-xl border border-teal-accent/20">
                <Headset className="w-8 h-8 text-teal-accent shrink-0" />
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

