import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import { MriPage } from './pages/MriPage';
import { XrayPage } from './pages/XrayPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { DownloadReportPage } from './pages/DownloadReportPage';
import { UltrasoundPage } from './pages/UltrasoundPage';
import { CtScanPage } from './pages/CtScanPage';
import { LabTestsPage } from './pages/LabTestsPage';
import { EcgPage } from './pages/EcgPage';
import {
  Microscope,
  Calendar,
  FileText,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Bone,
  Brain,
  Activity,
  Baby,
  HeartPulse,
  FlaskConical,
  Twitter,
  Instagram,
  MessageCircle,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/#services' },
    { label: 'About Dr. Pankaj', to: '/about' },
    { label: 'Testimonials', to: '/#testimonials' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={closeMenu}>
            <div className="text-blue-700 flex items-center">
              <Microscope className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Devam<span className="text-blue-700">Diagnostic</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className="text-sm font-medium hover:text-blue-700 transition-colors"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: hamburger (mobile) + Book Appointment button */}
          <div className="flex items-center gap-3">
            {/* Hamburger icon — visible only on mobile/tablet */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link
              to="/book-appointment"
              className="hidden md:inline-flex bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-md shadow-blue-700/20"
              onClick={closeMenu}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-slate-100">
              <Link
                to="/book-appointment"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg text-sm font-bold transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-600/10 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            24/7 Diagnostic Service in Patna
          </div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
            Advanced Diagnostic <span className="text-blue-700">Excellence</span> with Expert Care
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Patna&apos;s trusted medical diagnostic partner. Combining cutting-edge technology with
            the expertise of AIIMS-trained radiologists.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/book-appointment"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-700/30 transition-all flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <Link
              to="/download-report"
              className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              View Reports
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl"></div>
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square bg-slate-200"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGdgZRGZpz1KsUW2_LogQk4g8VaaRRNcHx_sGm6MGGM1cs-gQmaKXDgIrPYV_htzNNSip_4E-QuOG9Y912gzhE47mZ7959CAwaAn20pKlF6bXL-1dd66OLBU5YI4QnTcT5hP5j8iNE30y19WVMgsjZoydq47yr3_r1fJGDXuZakvPIwK9tLa-URYxTPDDScDfkDEbc0APxL20r6It0_gbCPsNmJfHRyY1ZviyuEjQd5EsYpj9MLLMU4YJZqPU2LjV3ku5ZgQDwDWw')",
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const [current, setCurrent] = useState(0);

  const services = [
    {
      icon: <Bone className="w-8 h-8" />,
      title: 'X-ray',
      description: 'High-precision digital imaging for bone health, chest examinations, and emergency diagnostics.',
      to: '/services/x-ray',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'MRI',
      description: 'Advanced high-resolution 3T MRI scanning for detailed visualization of organs and tissues.',
      to: '/services/mri',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'CT Scan',
      description: 'Multi-slice CT imaging for comprehensive internal body assessments and specialized diagnostics.',
      to: '/services/ct-scan',
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Ultrasound',
      description: '4D Doppler Ultrasound for maternity care, vascular studies, and abdominal diagnostics.',
      to: '/services/ultrasound',
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: 'ECG',
      description: 'Cardiovascular monitoring and electro-cardiogram services for heart health evaluation.',
      to: '/services/ecg',
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Lab Tests',
      description: 'Comprehensive pathology, blood work, and molecular diagnostics with rapid reporting.',
      to: '/services/lab-tests',
    },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? services.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === services.length - 1 ? 0 : c + 1));

  const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all h-full">
      <div className="w-14 h-14 bg-blue-700/10 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
      <Link
        className="text-blue-700 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
        to={service.to}
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Diagnostic Services</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600">Comprehensive testing using the latest medical imaging and laboratory technology.</p>
        </div>

        {/* ── Mobile slider (hidden on md+) ── */}
        <div className="md:hidden">
          <div className="relative">
            {/* Prev chevron */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Card */}
            <div className="px-4">
              <ServiceCard service={services[current]} />
            </div>

            {/* Next chevron */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to service ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-blue-700 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop grid (hidden below md) ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};


const About = () => (
  <section className="py-24 bg-white" id="about">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/3">
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-100"
              style={{
                backgroundImage:
                  "url('/Dr. Pankaj Kumar.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-xs font-medium uppercase">Years Experience</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="text-blue-700 font-bold tracking-widest uppercase text-sm mb-4">Expert Medical Leadership</h2>
          <h3 className="text-4xl font-black mb-6 text-slate-900">Meet Dr. Pankaj Kumar</h3>
          <p className="text-lg font-bold text-slate-700 mb-6">MBBS, MD Radiology (AIIMS New Delhi)</p>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Dr. Pankaj Kumar is a highly acclaimed Radiologist with extensive clinical training from the prestigious AIIMS, New Delhi. With a commitment to diagnostic precision, he leads our team of experts in providing accurate and timely reports.
            </p>
            <p>
              Under his leadership, Devam Diagnostic Center has become a beacon of trust for thousands of patients and leading physicians across Patna and Bihar.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Education</h4>
              <p className="text-sm text-slate-600">AIIMS New Delhi - Radiology Specialization</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Expertise</h4>
              <p className="text-sm text-slate-600">Interventional Radiology & Advanced Imaging</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md shadow-blue-700/20"
            >
              About Dr. Pankaj <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ testimonial }: { testimonial: { quote: string; name: string; location: string; image: string } }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
    <p className="italic text-slate-600 mb-6 leading-relaxed">"{testimonial.quote}"</p>
    <div className="flex items-center gap-4">
      <div
        className="w-10 h-10 rounded-full bg-slate-200 shrink-0"
        style={{ backgroundImage: `url('${testimonial.image}')`, backgroundSize: 'cover' }}
      />
      <div>
        <p className="font-bold text-sm">{testimonial.name}</p>
        <p className="text-xs text-slate-500">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote: "The diagnostic center is very clean and the staff is professional. Got my MRI reports same day. Highly recommend Dr. Pankaj.",
      name: "Animesh Singh",
      location: "Patna, Bihar",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtv-uUNbnJ_fSnJlCBU2oQY0s278FcUWRMqi5aj4xLhZ7GM5umMpNEdfWqKIoEKkr1giy-SZ6dlB05CkaEkLL2Ko8quqeQVdV9HfP94QPbQSizMEdbgeUBEc3JZKuVpbtbxzMvleQxyuSZvJweJHzOx1CquKZilSZvxZs2YJPjMlLRgs_0agnzMyZwfDNsfUcrboZOJx_ZUvs5clC2duYGSYo7HHG1uuvOnvsyP6HX5pALiw7boU0_G4POyAG-QUOS9UOYRmrjAOo",
    },
    {
      quote: "Excellent service. The 24/7 facility was a lifesaver during an emergency. The digital X-ray clarity was amazing.",
      name: "Priya Sharma",
      location: "Kankarbagh, Patna",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUF1klYQt0Fw2S2yhIyWdr1-9qOxxShnmu6AvUxOYUXDi-jYZcExK1C4mRVFY6jFwLgH0uTXbffLArodSH6jnWis6oniemNBBTNws_X6oqE2zlUEPgo_Wi-xNHLDaALJ0MX8hA66ceHebO7sdj7UejR3aKckThLXSORnuHMv4gXP7s0FKV75hykcuzW6DlgishWU5whKhEB3Cenoog3qGZ7r0cH03fMOZVauhJVSN5IRcjGZ2zz9YPgi7day2fNsCEAJkFn_a1-to",
    },
    {
      quote: "Trustworthy reports. Dr. Pankaj's explanation of my ultrasound results was very thorough and helpful.",
      name: "Rajiv Verma",
      location: "Boring Road, Patna",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiBdvyUSAVt7KOLVFA_zK8nb7HBIpulyl6i-WP92ChNsJmuL-CUM_L4HGpnHVA5PQcdstlG1sbt4lCqTV91DmUf06fA8aGzA62loNBOwqheDWQJoSFiF7PaI_UrisfdEy2xD2fB1C2hZfNqszT7XJ9nS373G2uZLQT4PzHcqDzCMDAOp55FW-2yqrkgxi79C_b1IpIghxnw6DkXMeYw44XX-_4MSLq0SXe3PaDrRrlybVRC9H04cdct4IrvOkUC6fMl_u0z2bFtZU",
    },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 bg-slate-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* ── Mobile slider (hidden on md+) ── */}
        <div className="md:hidden">
          <div className="relative">
            {/* Prev chevron */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Card */}
            <div className="px-4">
              <TestimonialCard testimonial={testimonials[current]} />
            </div>

            {/* Next chevron */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-blue-700 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop grid (hidden below md) ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-20 pb-10" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6 text-white">
            <Microscope className="w-8 h-8 text-blue-700" />
            <span className="text-xl font-bold">Devam Diagnostic</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Pioneering diagnostic healthcare with AIIMS-level expertise and state-of-the-art medical technology.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors" href="#">
              <Twitter className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors" href="#">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link className="hover:text-blue-700 transition-colors" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-700 transition-colors"
                to="/download-report"
              >
                Online Reports
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-700 transition-colors"
                to="/services/mri"
              >
                Services List
              </Link>
            </li>
            <li>
              <a className="hover:text-blue-700 transition-colors" href="#">
                Health Packages
              </a>
            </li>
            <li>
              <a className="hover:text-blue-700 transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-700 shrink-0" />
              <span>Main Road, Near Gandhi Maidan, Patna, Bihar - 800001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-700 shrink-0" />
              <span>+91 99999 88888</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-700 shrink-0" />
              <span>care@devamdiagnostic.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Location</h4>
          <div className="rounded-xl overflow-hidden h-40 bg-slate-800">
            <div
              className="w-full h-full opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRKGHsCyTOKzr4SjILl4AQ8foVO-gsZEiif0gQ_dAYlaF9KD2u0c6X2Vqv8-uAvoVZH5x9Bf6rJs2KIGkzfy8rBaLbNZmtiJ_-hX2yLSyiE9JiY-rFsyMP2oMRkcNMs0n8_4whuLoI-N7yR0oH-bLjEnHfFxq276J4xxzmYu1sfZ8oBuU2DsO_Q64CN2kVeE4N1DDi9f-PNM4mkypFuH7sJA77watQFpHHk1NPP-FEHfMzTA9EnaG2FHdhJeLE17QHbJrqp2KP-do')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2024 Devam Diagnostic Center. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span>Designed By Neo Studio</span>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a
    className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
    href="https://wa.me/919999988888"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageCircle className="w-6 h-6 fill-current" />
  </a>
);

const HomePage = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </>
  );
};

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-slate-50 font-sans text-slate-900 antialiased min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default function AppWithRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/mri" element={<MriPage />} />
        <Route path="/services/x-ray" element={<XrayPage />} />
        <Route path="/services/ct-scan" element={<CtScanPage />} />
        <Route path="/services/ultrasound" element={<UltrasoundPage />} />
        <Route path="/services/lab-tests" element={<LabTestsPage />} />
        <Route path="/services/ecg" element={<EcgPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/download-report" element={<DownloadReportPage />} />
        <Route
          path="*"
          element={
            <div className="max-w-7xl mx-auto px-4 py-24">
              <h1 className="text-4xl font-black mb-4">Page not found</h1>
              <p className="text-slate-600 mb-6">
                The page you are looking for does not exist. Please check the URL or return home.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
              >
                Go to Home
              </Link>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

