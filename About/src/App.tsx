import React from 'react';
import {
  MessageCircle,
  ChevronRight,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Calendar,
  Microscope,
  Eye,
  Activity,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Quote,
  Landmark,
  MapPin,
  Phone,
  Mail,
  BarChart,
  Camera,
} from 'lucide-react';

const Logo = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
    <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
  </svg>
);

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="text-primary">
                  <Logo />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">Devam Diagnostic</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Home</a>
                <a className="text-sm font-medium text-primary border-b-2 border-primary pb-1" href="#">About Dr. Pankaj</a>
                <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Services</a>
                <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Facilities</a>
                <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Contact</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden lg:flex items-center gap-2 bg-accent-teal/10 text-accent-teal px-4 py-2 rounded-lg font-bold text-sm hover:bg-accent-teal/20 transition-all">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Support
              </button>
              <button className="bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all cursor-pointer">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <a className="hover:text-primary" href="#">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a className="hover:text-primary" href="#">Our Doctors</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">Dr. Pankaj Kumar</span>
          </nav>
        </div>

        {/* Doctor Hero Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-slate-200">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="relative w-full lg:w-1/3 aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
                <img 
                  alt="Dr. Pankaj Kumar Portrait" 
                  className="absolute inset-0 w-full h-full object-cover object-top" 
                  src="/doctor-image.jpg"
                />
                <div className="absolute bottom-4 right-4 bg-[#20947A] text-white px-4 py-3 rounded-xl flex flex-col shadow-lg">
                  <span className="text-3xl font-bold leading-none mb-1">15+</span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase">Years Experience</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    <BadgeCheck className="w-4 h-4" />
                    Senior Consultant Radiologist
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 leading-tight">Dr. Pankaj Kumar</h1>
                  <p className="text-xl text-slate-600 font-medium mb-6">MBBS, MD - AIIMS Trained Radiologist</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Experience</p>
                        <p className="text-slate-900 font-semibold">15+ Years Professional</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Education</p>
                        <p className="text-slate-900 font-semibold">AIIMS, New Delhi</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 max-w-2xl leading-relaxed mb-8">
                    Dr. Pankaj Kumar is a highly distinguished radiologist with specialized training from AIIMS. He leads the advanced imaging department at Devam Diagnostic Center, specializing in complex neuro and musculoskeletal diagnostics.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer">
                    <Calendar className="w-5 h-5" />
                    Book Consultation
                  </button>
                  <button className="bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all cursor-pointer">
                    View Available Slots
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="border-b border-slate-200 mb-8 overflow-x-auto">
            <div className="flex gap-8 min-w-max">
              <button className="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-primary transition-colors cursor-pointer">Biography</button>
              <button className="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-primary transition-colors cursor-pointer">Education & Experience</button>
              <button className="pb-4 text-sm font-bold border-b-2 border-primary text-primary cursor-pointer">Specializations</button>
              <button className="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-primary transition-colors cursor-pointer">Publications</button>
              <button className="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-primary transition-colors cursor-pointer">Patient Reviews</button>
            </div>
          </div>
          
          {/* Content Area: Specializations (Active) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 text-accent-teal flex items-center justify-center">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Advanced MRI</h3>
              <p className="text-slate-600">Expertise in 3T MRI, Functional MRI (fMRI), and Diffusion Tensor Imaging for neuro-surgical planning.</p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                  Neuro-radiology
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                  Musculoskeletal MRI
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 text-accent-teal flex items-center justify-center">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">CT Imaging</h3>
              <p className="text-slate-600">High-resolution multi-slice CT scans including cardiac calcium scoring and virtual colonoscopy.</p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                  CT Angiography
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                  3D Reconstructions
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 text-accent-teal flex items-center justify-center">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Interventional Radiology</h3>
              <p className="text-slate-600">Minimally invasive image-guided procedures for diagnosis and treatment of complex vascular conditions.</p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                  Image-guided Biopsies
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                  Vascular Interventions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Patient Feedback Carousel */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Patient Feedback</h2>
              <p className="text-slate-500">Real stories from Dr. Kumar's patients</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-white transition-all cursor-pointer">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-white transition-all cursor-pointer">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 italic text-slate-600 relative">
              <Quote className="w-12 h-12 text-primary/10 absolute top-4 right-4 rotate-180" />
              "Dr. Kumar's diagnostic accuracy saved my father's life. His report was so detailed that the surgeons knew exactly what to expect. Truly the best radiologist in Patna."
              <div className="mt-6 flex items-center gap-4 not-italic">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Rajesh Khanna</p>
                  <p className="text-xs text-slate-500">Patient - MRI Scan</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 italic text-slate-600 relative">
              <Quote className="w-12 h-12 text-primary/10 absolute top-4 right-4 rotate-180" />
              "Very professional and calm. He took the time to explain the procedure to me, which helped ease my anxiety about the CT scan. Highly recommended."
              <div className="mt-6 flex items-center gap-4 not-italic">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Sneha Verma</p>
                  <p className="text-xs text-slate-500">Patient - CT Guided Biopsy</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 italic text-slate-600 relative hidden lg:block">
              <Quote className="w-12 h-12 text-primary/10 absolute top-4 right-4 rotate-180" />
              "The level of detail in the MRI report was praised even by my consultant in Mumbai. Devam Diagnostic and Dr. Kumar are world-class."
              <div className="mt-6 flex items-center gap-4 not-italic">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Amit Singh</p>
                  <p className="text-xs text-slate-500">Patient - Brain MRI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Professional Affiliations & Memberships</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-slate-600" />
                <span className="font-bold text-slate-600">IRIA</span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-slate-600" />
                <span className="font-bold text-slate-600">IMA India</span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-slate-600" />
                <span className="font-bold text-slate-600">RSNA</span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-slate-600" />
                <span className="font-bold text-slate-600">ESR</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">
                  <Logo />
                </div>
                <span className="text-xl font-bold text-slate-900">Devam Diagnostic Center</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                Pioneering diagnostic excellence in Patna with state-of-the-art imaging and laboratory services since 2008.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
                  <BarChart className="w-5 h-5" />
                </a>
                <a className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
                  <Camera className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Our Services</a></li>
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Find a Doctor</a></li>
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Book a Test</a></li>
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Health Packages</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-500">Bailey Road, Patna, Bihar - 800001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-500">+91 612 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-500">info@devamdiag.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-100 mt-12 pt-8 text-center">
            <p className="text-sm text-slate-400">© 2024 Devam Diagnostic Center. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
