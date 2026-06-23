import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Smartphone, Zap, Palette, Wallet, LifeBuoy, Rocket,
  MessageCircle, Send, Instagram, Mail, ArrowRight,
  Check, ChevronDown,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Design pentru afaceri locale | Site-uri moderne de prezentare" },
      { name: "description", content: "Site-uri moderne one-page pentru afaceri locale. Design premium, responsive, optimizat SEO. Solicită ofertă gratuit." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Benefits />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Servicii", "#about"],
    ["Avantaje", "#benefits"],
    ["Portofoliu", "#portfolio"],
    ["Proces", "#process"],
    ["Contact", "#contact"],
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow text-primary-foreground">
          <Sparkles className="size-4" />
          </span>
          <span>Mauu<span className="text-gradient"> Studio</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium shadow-glow hover:scale-105 transition-transform">
          Solicită ofertă <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      <img src={heroBg} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Disponibil pentru proiecte noi · 2026
        </div>
        <h1 className="reveal text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
          Transform afacerea ta într-o{" "}
          <span className="text-gradient">prezență profesională online</span>
        </h1>
        <p className="reveal text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Realizez site-uri moderne de prezentare pentru afaceri locale, saloane, săli de fitness, restaurante, cabinete și orice afacere care dorește mai mulți clienți.
        </p>
        <div className="reveal flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium shadow-glow hover:scale-105 transition-transform">
            Solicită ofertă <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#portfolio" className="inline-flex items-center gap-2 glass px-7 py-3.5 rounded-full font-medium hover:bg-secondary/60 transition-colors">
            Vezi portofoliu
          </a>
        </div>
        <div className="reveal mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          {[["-", "Site-uri livrate"], ["7 zile", "Timp mediu livrare"], ["-", "Clienți mulțumiți"]].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const items = [
    "Site-uri de prezentare cu o singură pagină",
    "Design modern și responsive",
    "Optimizare pentru telefoane și desktop",
    "Formulare de contact",
    "Integrare Google Maps",
    "Butoane pentru WhatsApp și social media",
    "Publicare online",
  ];
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">Despre serviciu</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tot ce-ți trebuie pentru o <span className="text-gradient">prezență online completă</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mă ocup de tot — de la design și dezvoltare, până la publicare. Tu primești un site gata să atragă clienți, fără bătăi de cap tehnice.
          </p>
        </div>
        <ul className="reveal space-y-3">
          {items.map((t) => (
            <li key={t} className="flex items-start gap-4 glass p-4 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                <Check className="w-4 h-4 text-primary-foreground" />
              </span>
              <span className="pt-1">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Palette, title: "Design profesional", desc: "Aspect modern, premium, care inspiră încredere de la prima vizită." },
    { icon: Zap, title: "Încărcare rapidă", desc: "Site optimizat tehnic, se deschide instant pe orice device." },
    { icon: Smartphone, title: "Compatibil mobil", desc: "Arată impecabil pe telefoane, tablete și desktop." },
    { icon: Wallet, title: "Preț accesibil", desc: "Tarife corecte, fără costuri ascunse. Plată în rate disponibilă." },
    { icon: LifeBuoy, title: "Suport și modificări", desc: "Sunt aici după livrare pentru orice ajustare ai nevoie." },
    { icon: Rocket, title: "Livrare rapidă", desc: "Site-ul tău e online în 5-10 zile lucrătoare." },
  ];
  return (
    <section id="benefits" className="py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">De ce eu</div>
          <h2 className="text-4xl md:text-5xl font-bold">Avantajele unui site făcut <span className="text-gradient">cum trebuie</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="reveal group relative p-8 rounded-2xl glass shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">Portofoliu</div>
          <h2 className="text-4xl md:text-5xl font-bold">Proiecte care <span className="text-gradient">aduc clienți</span></h2>
        </div>
        <div className="reveal glass rounded-3xl p-16 md:p-24 text-center shadow-card">
          <div className="text-5xl md:text-7xl font-display font-bold text-gradient tracking-widest">
            VA URMA
          </div>
          <p className="mt-6 text-muted-foreground">Primele proiecte vor apărea în curând aici.</p>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Discutăm cerințele", desc: "Aflu ce vrei, cui te adresezi și ce obiective ai." },
    { n: "02", title: "Realizez designul", desc: "Creez un design unic, adaptat brandului tău." },
    { n: "03", title: "Dezvolt site-ul", desc: "Implementez totul curat, rapid și optimizat." },
    { n: "04", title: "Publicare online", desc: "Site-ul ajunge live pe domeniul tău, gata de clienți." },
  ];
  return (
    <section id="process" className="py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">Proces de lucru</div>
          <h2 className="text-4xl md:text-5xl font-bold">Simplu, clar, <span className="text-gradient">fără surprize</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal relative p-8 rounded-2xl glass" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="text-5xl font-display font-bold text-gradient mb-4">{s.n}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">Testimoniale</div>
          <h2 className="text-4xl md:text-5xl font-bold">Ce spun <span className="text-gradient">clienții mei</span></h2>
        </div>
        <div className="reveal glass rounded-3xl p-16 md:p-24 text-center shadow-card">
          <div className="text-5xl md:text-7xl font-display font-bold text-gradient tracking-widest">
            VA URMA
          </div>
          <p className="mt-6 text-muted-foreground">Primele testimoniale vor apărea în curând aici.</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Cât durează realizarea?", a: "În general, între 5 și 10 zile lucrătoare, în funcție de complexitate și de cât de repede primesc conținutul (text, imagini)." },
    { q: "Cât costă?", a: "Prețurile pornesc de la 300 RON pentru un site one-page complet. Îți trimit o ofertă personalizată după ce discutăm despre proiect." },
    { q: "Pot modifica ulterior?", a: "Da. Ofer suport și modificări post-livrare. Poți cere oricând actualizări de conținut, imagini sau secțiuni noi." },
    { q: "Este inclusă găzduirea?", a: "Te ajut cu alegerea și configurarea găzduirii și domeniului. Costurile anuale (~150 RON) sunt separate, dar foarte mici." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">Întrebări frecvente</div>
          <h2 className="text-4xl md:text-5xl font-bold">Răspunsuri la ce <span className="text-gradient">te întrebi acum</span></h2>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="reveal glass rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/40 transition-colors">
                <span className="font-medium">{it.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">Contact</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Hai să-ți construim <span className="text-gradient">site-ul perfect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Trimite-mi un mesaj și îți răspund în cel mult 24 de ore cu o ofertă personalizată.
          </p>
        </div>
        <div className="reveal grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a href="https://wa.me/40741646620" className="group glass p-6 rounded-2xl text-center hover:shadow-glow transition-all hover:-translate-y-1">
            <MessageCircle className="w-7 h-7 mx-auto mb-3 text-primary" />
            <div className="font-medium mb-1">WhatsApp</div>
            <div className="text-sm text-muted-foreground">+40 741 646 620</div>
          </a>
          <a href="https://instagram.com/marius_mahalau" target="_blank" rel="noopener noreferrer" className="group glass p-6 rounded-2xl text-center hover:shadow-glow transition-all hover:-translate-y-1">
            <Instagram className="w-7 h-7 mx-auto mb-3 text-primary" />
            <div className="font-medium mb-1">Instagram</div>
            <div className="text-sm text-muted-foreground">@marius_mahalau</div>
          </a>
          <a href="mailto:mahalaumarius@gmail.com" className="group glass p-6 rounded-2xl text-center hover:shadow-glow transition-all hover:-translate-y-1">
            <Mail className="w-7 h-7 mx-auto mb-3 text-primary" />
            <div className="font-medium mb-1">Email</div>
            <div className="text-sm text-muted-foreground">mahalaumarius@gmail.com</div>
          </a>
        </div>
        <div className="reveal mt-10 text-center">
          <a href="https://wa.me/40741646620" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-glow hover:scale-105 transition-transform">
            <Send className="w-4 h-4" /> Solicită ofertă acum
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display font-bold text-foreground">
          <span className="w-7 h-7 rounded-lg bg-gradient-primary"/>
          Mauu<span className="text-gradient">Studio</span>
        </div>
        <p className="text-center max-w-md">
          Site-uri de prezentare moderne pentru afaceri care vor să crească online.
        </p>
        <div>© {new Date().getFullYear()} Mauu Studio</div>
      </div>
    </footer>
  );
}
