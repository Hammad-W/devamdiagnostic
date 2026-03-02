import { useState } from 'react';
import {
  User,
  Key,
  Eye,
  EyeOff,
  ArrowRight,
  Info,
  ShieldCheck,
  Shield,
  Lock,
  Facebook,
  Twitter,
} from 'lucide-react';

export function DownloadReportPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="font-display bg-background-light text-slate-900 min-h-screen flex flex-col relative overflow-x-hidden">
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 z-10">
        <div className="w-full max-w-[520px] space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-tight">
              Download Your Reports
            </h1>
            <p className="text-slate-500 text-base font-normal">
              Secure Patient Portal for Devam Diagnostic Center, Patna
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-8 md:p-10">
            <h3 className="text-slate-900 text-xl font-bold mb-6 flex items-center gap-2">
              <Lock className="text-primary size-6" />
              Portal Login
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="block text-slate-700 text-sm font-semibold">
                  Patient ID / Registration Number
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                  <input
                    className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="e.g. DDC-2023-XXXX"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-slate-700 text-sm font-semibold">
                    Password / Date of Birth
                  </label>
                  <a
                    className="text-primary text-xs font-semibold hover:underline"
                    href="#"
                  >
                    Forgot Patient ID?
                  </a>
                </div>
                <div className="relative flex items-stretch">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10 size-5" />
                  <input
                    className="w-full pl-11 pr-12 py-3.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="DDMMYYYY or Password"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Format for DOB: DDMMYYYY (e.g., 15081947)
                </p>
              </div>

              <button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                type="submit"
              >
                <span>Access My Reports</span>
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10 flex gap-3 items-start">
              <Info className="text-primary size-5 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-800">Processing Time</p>
                <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                  Most diagnostic reports are processed and available online within 24-48 hours
                  after sample collection. Critical results may take longer.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-slate-500 text-sm">
              New patient or having trouble?{' '}
              <a className="text-primary font-bold hover:underline" href="#">
                Contact our helpdesk
              </a>
            </p>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <ShieldCheck className="size-4" />
                SSL Secured
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Shield className="size-4" />
                Privacy Protected
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-6 md:px-20 py-10 border-t border-slate-200 bg-white mt-auto z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <p>
              © 2024 Devam Diagnostic Center. All medical records are strictly
              confidential.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <Facebook className="size-5" />
            </a>
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <Twitter className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

