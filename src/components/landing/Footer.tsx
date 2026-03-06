import { Bug, Phone, MapPin, Mail, Instagram, Facebook, Twitter, Youtube, ShieldCheck, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden text-nowrap">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-nowrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-nowrap">

          <div>
            <div className="flex items-center gap-3 mb-8 text-nowrap">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-nowrap">
                <Bug className="w-6 h-6 text-white text-nowrap" />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-nowrap">Brooksville Hornet</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-bold italic uppercase tracking-tighter text-nowrap">
              Brooksville's premier hornet <br /> extraction network. Protecting <br /> Florida estates with technical <br /> precision and 24/7 reliability.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-indigo-500 text-nowrap">Removal Units</h4>
            <ul className="space-y-4 text-nowrap">
              {[
                "Aerial Nest Extraction",
                "Yellow Jacket Neutralization",
                "Structural Recovery",
                "Advanced Perimeter Defense",
                "Emergency Dispatch"
              ].map((item) => (
                <li key={item} className="text-nowrap">
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 group text-nowrap">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 group-hover:w-4 transition-all" />
                    <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-indigo-500 text-nowrap">Dispatch NAP</h4>
            <ul className="space-y-6 text-nowrap">
              <li className="flex gap-4 text-nowrap">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-nowrap">
                  <MapPin className="w-5 h-5 text-indigo-500 text-nowrap" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 text-nowrap">HEADQUARTERS</p>
                  <p className="text-sm font-bold text-slate-200 uppercase tracking-tight text-nowrap">Brooksville, FL 34601</p>
                </div>
              </li>
              <li className="flex gap-4 text-nowrap">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-nowrap">
                  <Phone className="w-5 h-5 text-indigo-500 text-nowrap" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 text-nowrap uppercase">24/7 HOTLINE</p>
                  <a href="tel:3238801224" className="text-sm font-bold text-slate-200 hover:text-indigo-500 transition-colors uppercase tracking-widest text-nowrap">(323) 880-1224</a>
                </div>
              </li>
              <li className="flex gap-4 text-nowrap text-nowrap">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-nowrap">
                  <Mail className="w-5 h-5 text-indigo-500 text-nowrap" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 text-nowrap uppercase">SUPPORT</p>
                  <a href="/lease-my-number" className="text-sm font-bold text-slate-200 hover:text-indigo-500 transition-colors uppercase tracking-widest underline decoration-indigo-900 underline-offset-4 font-black text-nowrap uppercase text-nowrap">LEASE MY NUMBER</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="text-nowrap">
            <h4 className="text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-indigo-500 text-nowrap">Brooksville Promise</h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-8 font-bold italic uppercase tracking-tighter text-nowrap">
              Exclusively using technician- <br /> grade knockdown aerosols <br /> to ensure maximum <br /> safety in all Brooksville <br /> removals.
            </p>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 shadow-inner text-nowrap text-nowrap">
              <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-2 text-nowrap">Technical Guarantee</p>
              <p className="text-xs font-bold text-slate-400 uppercase leading-snug tracking-tighter italic text-nowrap">Full Neutralization Across Hernando County.</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-8 uppercase tracking-[0.2em] text-[10px] font-black text-nowrap">
          <p className="text-slate-600 text-center text-nowrap">
            © {new Date().getFullYear()} Brooksville Hornet Nest Removal Pros. All technical rights reserved.
          </p>
          <div className="max-w-4xl mx-auto text-nowrap">
            <p className="text-slate-700 text-[9px] leading-relaxed text-center normal-case font-medium">
              Disclaimer: This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
