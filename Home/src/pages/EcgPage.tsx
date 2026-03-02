import { ChevronRight, Calendar, HeartPulse, ActivitySquare, ShieldCheck, CheckCircle2, Headset } from 'lucide-react';

export function EcgPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                    <a className="hover:text-primary" href="/">Home</a>
                    <ChevronRight className="w-4 h-4" />
                    <a className="hover:text-primary" href="/#services">Services</a>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-900 dark:text-slate-100 font-medium">ECG & Cardiology</span>
                </nav>

                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                    <img
                        alt="ECG Heart Monitor"
                        className="w-full h-full object-cover"
                        src="/Electrocardiogram.jpg"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                        <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Cardiology</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">Electrocardiogram (ECG)</h2>
                        <p className="text-slate-200 text-lg max-w-2xl">Pain-free cardiovascular monitoring and rhythm testing to evaluate your heart health.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-xl text-primary">
                                <HeartPulse className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Instant Heart Analysis</h3>
                                <p className="text-slate-600 dark:text-slate-400">An electrocardiogram records the electrical signals in your heart. It&apos;s a common and painless test used to quickly detect heart problems and monitor your heart&apos;s health. Our modern 12-lead ECG machines deliver highly precise traces.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <ActivitySquare className="w-6 h-6 text-teal-accent" /> Why You Might Need an ECG
                            </h3>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                <p className="text-slate-600 dark:text-slate-400 mb-4">Your doctor may order an electrocardiogram if you experience any of the following symptoms:</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                                        <span>Chest pain or discomfort</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                                        <span>Shortness of breath</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                                        <span>Dizziness, lightheadedness</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                                        <span>Rapid or irregular heartbeats</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                                        <span>Weakness or unexplained fatigue</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                                        <span>Pre-surgical fitness check</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-teal-accent" /> Safe and Fast
                            </h3>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>The entire process typically takes less than 10 minutes. Small, sticky sensors (electrodes) are placed on your chest, arms, and legs. They are connected to the ECG machine which records the electrical activity. There is no risk involved, as the device only records and does not send electricity into your body.</p>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-[100px] space-y-6">
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
                                <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
                                <div className="space-y-4">
                                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-lg shadow-primary/20">
                                        <Calendar className="w-5 h-5" /> Book ECG Test
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
