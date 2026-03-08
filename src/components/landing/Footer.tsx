import { Phone, MapPin, Bug } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/20 group-hover:rotate-12 transition-transform">
                <Bug className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black uppercase tracking-tighter leading-none uppercase">Swarthmore Burst Pipe Repair</span>
                <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.3em] uppercase">Pros</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 italic font-medium uppercase">
              Swarthmore's trusted burst pipe detection and repair specialists providing comprehensive water leak services.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-indigo-500">Related Resources</h4>
            <ul className="space-y-4">
              {[
                "Slab Leak Repair Swarthmore",
                "Leaking Pipe Repair Modesto",
                "Cast Iron Pipe Replacement Boonton",
                "Trenchless Sewer Repair Scottsdale"
              ].map((link) => (
                <li key={link}>
                  <a
                    href={
                      link.includes("Slab Leak") ? "https://slableakrepairswarthmore.vercel.app/" :
                      link.includes("Leaking Pipe") ? "https://leakingpiperepairinmodesto.vercel.app/" :
                      link.includes("Cast Iron") ? "https://castironpipereplacementboonton.vercel.app/" :
                      "https://trenchlesssewerrepairscottsdaleaz.vercel.app/"
                    }
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 group-hover:w-4 transition-all" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-indigo-500">Contact Protocol</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 transition-colors">
                  <Phone className="w-4 h-4 text-indigo-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest uppercase">Call Now</p>
                  <a href="tel:8777921410" className="text-sm font-bold text-white uppercase tracking-tight">(877) 792-1410</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 transition-colors">
                  <MapPin className="w-4 h-4 text-indigo-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest uppercase">Service Area</p>
                  <p className="text-sm font-bold text-white uppercase tracking-tight uppercase">Swarthmore, PA 19081</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-indigo-500">Support Protocol</h4>
            <ul className="space-y-4">
              <li>
                <a href="/lease-my-number" className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 group-hover:w-4 transition-all" />
                  <span className="text-xs font-bold uppercase tracking-widest uppercase">LEASE MY NUMBER</span>
                </a>
              </li>
              <li>
                <a href="mailto:leasemynumber@gmail.com" className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 group-hover:w-4 transition-all" />
                  <span className="text-xs font-bold uppercase tracking-widest uppercase">leasemynumber@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} Swarthmore Burst Pipe Repair Pros. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest uppercase">Privacy Protocol</a>
              <a href="#" className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest uppercase">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
