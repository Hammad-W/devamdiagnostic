import { ChevronRight, Calendar, Download, Eye, HelpCircle, Activity, CheckCircle2, Headset, ShieldAlert } from 'lucide-react';

export function CtScanPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                    <a className="hover:text-primary" href="/">Home</a>
                    <ChevronRight className="w-4 h-4" />
                    <a className="hover:text-primary" href="/#services">Services</a>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-900 dark:text-slate-100 font-medium">CT Scan</span>
                </nav>

                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                    <img
                        alt="Multi-slice CT Scanner"
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                        <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Tomography</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">Multi-Slice CT Scan</h2>
                        <p className="text-slate-200 text-lg max-w-2xl">Computed Tomography for extremely detailed 3D cross-sectional views of the body.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-xl text-primary">
                                <Activity className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Rapid & Accurate Diagnostics</h3>
                                <p className="text-slate-600 dark:text-slate-400">Our advanced CT scanner combines multiple X-ray measurements to produce detailed cross-sectional images of your bones, blood vessels, and soft tissues. It is especially useful for quickly examining people who may have internal injuries from trauma.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <HelpCircle className="w-6 h-6 text-teal-accent" /> Why is it done?
                            </h3>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>CT scans have many uses, but they are particularly well-suited for rapidly examining people who may have internal injuries from car accidents or other types of trauma. A CT scan can be used to visualize nearly all parts of the body and is used to diagnose disease or injury as well as to plan medical, surgical, or radiation treatment.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <ShieldAlert className="w-6 h-6 text-teal-accent" /> Contrast Material
                            </h3>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                <p className="text-slate-600 dark:text-slate-400 mb-4">In some CT scans, a special dye called contrast material is needed to help highlight the areas of your body being examined. The contrast material blocks X-rays and appears white on images, emphasizing blood vessels, intestines or other structures.</p>
                                <div className="flex gap-2 text-sm text-slate-500">
                                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                                    <span>Be sure to inform your doctor if you have had allergic reactions to contrast dye in the past, or if you have kidney problems.</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-[100px] space-y-6">
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-slate-700">
                                <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
                                <div className="space-y-4">
                                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-lg shadow-primary/20">
                                        <Calendar className="w-5 h-5" /> Book CT Scan
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
