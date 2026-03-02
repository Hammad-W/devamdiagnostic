import { ChevronRight, Calendar, FlaskConical, TestTube, Download, HelpCircle, CheckCircle2, Headset } from 'lucide-react';

export function LabTestsPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                    <a className="hover:text-primary" href="/">Home</a>
                    <ChevronRight className="w-4 h-4" />
                    <a className="hover:text-primary" href="/#services">Services</a>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-900 dark:text-slate-100 font-medium">Lab Tests</span>
                </nav>

                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                    <img
                        alt="Advanced Pathology Laboratory"
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000&auto=format&fit=crop"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                        <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Pathology</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">Clinical Lab Tests</h2>
                        <p className="text-slate-200 text-lg max-w-2xl">Comprehensive pathology, blood work, and molecular diagnostics with rapid, precise reporting.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-xl text-primary">
                                <FlaskConical className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Automated & Accurate</h3>
                                <p className="text-slate-600 dark:text-slate-400">Our NABL-accredited pathology laboratory uses fully automated analyzers and stringent quality controls to ensure error-free diagnostic results. We offer a sweeping range of tests to support your health journey.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <TestTube className="w-6 h-6 text-teal-accent" /> Popular Test Packages
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-primary mb-3">Complete Blood Count (CBC)</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Evaluates overall health and detects a wide range of disorders, including anemia and infection.</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-primary mb-3">Lipid Profile</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Measures cholesterol levels to assess the risk of cardiovascular disease.</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-primary mb-3">Thyroid Profile (TFT)</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Checks thyroid gland function (TSH, T3, T4) which regulates metabolism.</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-primary mb-3">Diabetes Screening</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Fasting blood sugar, postprandial levels, and HbA1c testing for diabetes management.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-teal-accent" /> Home Collection Available
                            </h3>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>We understand your busy schedule and health concerns. That is why Devam Diagnostic offers convenient at-home sample collection. Our certified phlebotomists will visit your home at your scheduled time to collect samples safely and hygienically.</p>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-[100px] space-y-6">
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
                                <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
                                <div className="space-y-4">
                                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-lg shadow-primary/20">
                                        <Calendar className="w-5 h-5" /> Book Lab Test
                                    </button>
                                    <button className="w-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                                        <Download className="w-5 h-5" /> Download Reports
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-teal-accent/10 rounded-xl border border-teal-accent/20">
                                <Headset className="w-8 h-8 text-teal-accent shrink-0" />
                                <div>
                                    <p className="text-xs font-bold text-teal-accent uppercase">Need Help?</p>
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
