import { ChevronRight, Calendar, Download, Eye, HelpCircle, FileText, CheckCircle2, MessageCircleQuestion, Headset, Baby, Activity } from 'lucide-react';

export function UltrasoundPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                    <a className="hover:text-primary" href="/">Home</a>
                    <ChevronRight className="w-4 h-4" />
                    <a className="hover:text-primary" href="/#services">Services</a>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-900 dark:text-slate-100 font-medium">Ultrasound</span>
                </nav>

                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                    <img
                        alt="Advanced Ultrasound procedure"
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                        <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Sonography</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">4D Doppler Ultrasound</h2>
                        <p className="text-slate-200 text-lg max-w-2xl">High-resolution imaging for maternity care, vascular studies, and abdominal diagnostics.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-xl text-primary">
                                <Baby className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Modern 4D Sonography</h3>
                                <p className="text-slate-600 dark:text-slate-400">Our center provides safe, radiation-free imaging technology that uses high-frequency sound waves to capture real-time images of the inside of your body. It is completely safe during pregnancy and for pediatric care.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <HelpCircle className="w-6 h-6 text-teal-accent" /> Common Applications
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-primary mb-3">Obstetrics & Gynecology</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Monitoring fetal development, screening for complications, and evaluating pelvic organs.</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h4 className="font-bold text-primary mb-3">Abdominal & Renal</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Detecting gallstones, kidney stones, liver disease, and other abdominal conditions.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <FileText className="w-6 h-6 text-teal-accent" /> Preparing for Ultrasound
                            </h3>
                            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-teal-accent shrink-0" />
                                    <span><strong>For Abdominal Scans:</strong> You may need to fast for 8-12 hours before the procedure to minimize gas in the intestines.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-teal-accent shrink-0" />
                                    <span><strong>For Pelvic/Pregnancy Scans:</strong> You may be required to drink water and hold your urine to allow for a clearer view of the pelvic organs.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-teal-accent shrink-0" />
                                    <span><strong>General:</strong> Wear comfortable, loose-fitting clothing. You may be asked to wear a gown during the procedure.</span>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-[100px] space-y-6">
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
                                <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
                                <div className="space-y-4">
                                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-lg shadow-primary/20">
                                        <Calendar className="w-5 h-5" /> Book Ultrasound
                                    </button>
                                    <button className="w-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                                        <Download className="w-5 h-5" /> Download Prep Guide
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
