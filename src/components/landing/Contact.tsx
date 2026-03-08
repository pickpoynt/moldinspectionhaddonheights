import { Phone, MapPin, Clock, ShieldCheck, Mail, Send, Bug, ShieldAlert, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/3.jpeg"
          alt="Kaysville Emergency Service Area"
          className="w-full h-full object-cover opacity-30 brightness-[0.5] grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-indigo-900/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Info Column */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-8 uppercase tracking-[0.2em] text-[10px] font-bold shadow-2xl uppercase text-nowrap">
                <ShieldAlert className="w-4 h-4" />
                Drain Cleaning Specialists
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none italic uppercase">
                Emergency <br /><span className="text-indigo-400">Response</span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-12 italic font-medium border-l-4 border-indigo-600 pl-6 uppercase">
                Professional drain cleaning services for homes and businesses in Evansville and surrounding areas. Expert technicians ready to handle clogs and blockages immediately. Serving all 47708, 47710, 47711, 47712, 47713, 47714, 47715, 47716 and Vanderburgh County areas.
              </p>

              <div className="grid gap-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-[2rem] bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/20 group-hover:rotate-12 transition-transform text-nowrap">
                    <Phone className="w-8 h-8 text-white text-nowrap" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2 text-nowrap">Call Now</p>
                    <a href="tel:8777921410" className="text-3xl font-black text-white hover:text-indigo-400 transition-colors text-nowrap">(877) 792-1410</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:-rotate-12 transition-transform text-nowrap">
                    <MapPin className="w-8 h-8 text-indigo-500 text-nowrap" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 text-nowrap uppercase">Service Area</p>
                    <p className="text-2xl font-black text-white text-nowrap uppercase uppercase">Evansville, IN 47708</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:w-1/2">
              <div className="bg-white p-12 rounded-[4rem] shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-3xl group-hover:bg-indigo-600/10 transition-all text-nowrap" />
                <form className="space-y-6 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      placeholder="FULL NAME"
                      className="h-16 px-6 rounded-2xl bg-slate-50 border-slate-100 text-[11px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-indigo-600 transition-all"
                    />
                    <Input
                      placeholder="PHONE NUMBER"
                      className="h-16 px-6 rounded-2xl bg-slate-50 border-slate-100 text-[11px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-indigo-600 transition-all text-nowrap"
                    />
                  </div>
                  <Input
                    placeholder="SERVICE ADDRESS (EVANSVILLE AREA)"
                    className="h-16 px-6 rounded-2xl bg-slate-50 border-slate-100 text-[11px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-indigo-600 transition-all text-nowrap"
                  />
                  <Textarea
                    placeholder="DESCRIBE DRAIN CLOG EMERGENCY AND AFFECTED FIXTURES..."
                    className="min-h-[160px] p-6 rounded-[2rem] bg-slate-50 border-slate-100 text-[11px] font-bold uppercase tracking-widest focus:ring-2 focus:ring-indigo-600 transition-all text-nowrap"
                  />
                  <Button className="w-full bg-slate-900 text-white hover:bg-indigo-600 h-20 rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm shadow-2xl transition-all active:scale-95 group text-nowrap">
                    Request Inspection
                    <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform text-nowrap" />
                  </Button>
                  <p className="text-center text-[9px] font-black text-slate-400 uppercase tracking-widest mt-6 text-nowrap uppercase">
                    Professional Response Guaranteed
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
