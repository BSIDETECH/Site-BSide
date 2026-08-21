import {
  Brain,
  Database,
  BarChart3,
  CreditCard,
  Smartphone,
  MenuSquare,
  ChevronRight,
  Mail,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { DataConsultingSection } from '../components/DataConsultingSection';
import { SaaSProductsSection } from '../components/SaaSProductsSection';
import { WebDevelopmentSection } from '../components/WebDevelopmentSection';
import { ContactSection } from '../components/ContactSection';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { FeatureCard } from '../components/FeatureCard';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text font-sans selection:bg-theme-primary selection:text-theme-text">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-theme-bg/80 backdrop-blur-md border-b border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img src="/k7-icon.png" alt="B-Side Tech Logo" className="w-10 h-10 object-contain drop-shadow-md" />
              <span className="font-bold text-2xl tracking-tight font-handwriting text-theme-text ml-2 drop-shadow-sm">B-Side Tech</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-theme-text-muted hover:text-theme-primary transition-colors font-mono">Serviços</a>
              <a href="#sites" className="text-sm font-medium text-theme-text-muted hover:text-theme-primary transition-colors font-mono">Criação de Sites</a>
              <a href="#product" className="text-sm font-medium text-theme-text-muted hover:text-theme-primary transition-colors font-mono">Comanda Digital</a>
              <ThemeSwitcher />
              <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-full bg-theme-primary/10 hover:bg-theme-primary border border-theme-primary/30 transition-all text-theme-primary hover:text-theme-bg font-mono">
                Fale Conosco
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeSwitcher />
              <button
                className="p-2 text-theme-text-muted hover:text-theme-text"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-theme-bg-alt border-b border-theme-border px-4 py-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-theme-text-muted hover:text-theme-text font-mono">Serviços</a>
            <a href="#sites" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-theme-text-muted hover:text-theme-text font-mono">Criação de Sites</a>
            <a href="#product" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-theme-text-muted hover:text-theme-text font-mono">Comanda Digital</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-theme-primary bg-theme-primary/10 border border-theme-primary/30 rounded-lg p-3 text-center font-mono">Fale Conosco</a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-theme-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-bg-alt/50 border border-theme-border text-sm text-theme-text-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-theme-primary animate-pulse"></span>
              Inovação B2B de Alta Performance
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-handwriting">
              Transformando negócios com <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Data, AI e SaaS Escalável
              </span>
            </h1>
            <p className="text-lg md:text-xl text-theme-text-muted max-w-2xl mx-auto mb-10">
              Construímos a infraestrutura digital do futuro para empresas que buscam eficiência, inteligência e crescimento acelerado.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#dados" className="px-8 py-4 rounded-full bg-theme-primary text-theme-text font-medium hover:bg-theme-primary-hover transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-theme-primary/20">
                Conheça nossas soluções
                <ChevronRight size={20} />
              </a>
              <a href="https://wa.me/5515998139561?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20B-Side%20e%20gostaria%20de%20falar%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20Dados%20e%20SaaS." target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-transparent border-2 border-theme-border hover:border-slate-500 hover:bg-theme-bg-alt/50 transition-colors text-theme-text font-medium w-full sm:w-auto justify-center flex">
                Fale com um Especialista
              </a>
            </div>
          </div>
        </section>

        {/* Data Consulting Section */}
        <DataConsultingSection />

        {/* Web Development Service */}
        <WebDevelopmentSection />

        {/* SaaS Products Ecosystem */}
        <SaaSProductsSection />

        {/* Consulting Services */}
        <section id="services" className="py-24 bg-theme-bg-alt/50 border-y border-theme-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-handwriting">Nossa Expertise B2B</h2>
              <p className="text-theme-text-muted max-w-2xl mx-auto">Soluções consultivas e desenvolvimento sob medida para os desafios mais complexos da sua operação.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <FeatureCard
                icon={Database}
                title="Data Engineering"
                description="Arquitetura de dados robusta, pipelines escaláveis e data lakes seguros para centralizar e processar suas informações."
                colorTheme="theme-primary"
              />

              {/* Card 2 */}
              <FeatureCard
                icon={BarChart3}
                title="Business Intelligence"
                description="Dashboards interativos e relatórios em tempo real para transformar dados brutos em decisões estratégicas precisas."
                colorTheme="theme-accent"
              />

              {/* Card 3 */}
              <FeatureCard
                icon={Brain}
                title="AI Solutions"
                description="Modelos preditivos, automação inteligente e machine learning aplicados para otimizar processos e reduzir custos."
                colorTheme="theme-primary"
              />
            </div>
          </div>
        </section>

        {/* Flagship Product */}
        <section id="product" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-theme-border rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-theme-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="p-10 lg:p-16 lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-bg-alt/80 border border-theme-border text-sm font-medium text-theme-accent mb-6">
                  SaaS Proprietário
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-handwriting">
                  Comanda Digital
                </h2>
                <p className="text-lg text-theme-text-muted mb-8 leading-relaxed">
                  A plataforma definitiva para o setor gastronômico. Gestão completa, desde o pedido na mesa até o fechamento de caixa, tudo integrado e em tempo real.
                </p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-theme-text">
                    <div className="w-8 h-8 rounded-full bg-theme-bg-alt flex items-center justify-center flex-shrink-0">
                      <CreditCard size={16} className="text-theme-primary" />
                    </div>
                    <span>Smart POS ultra-rápido e integrado</span>
                  </li>
                  <li className="flex items-center gap-3 text-theme-text">
                    <div className="w-8 h-8 rounded-full bg-theme-bg-alt flex items-center justify-center flex-shrink-0">
                      <MenuSquare size={16} className="text-theme-accent" />
                    </div>
                    <span>Cardápios digitais interativos via QR Code</span>
                  </li>
                  <li className="flex items-center gap-3 text-theme-text">
                    <div className="w-8 h-8 rounded-full bg-theme-bg-alt flex items-center justify-center flex-shrink-0">
                      <Smartphone size={16} className="text-theme-primary" />
                    </div>
                    <span>Totens de autoatendimento (Self-service)</span>
                  </li>
                </ul>

                <button className="px-6 py-3 rounded-xl bg-theme-bg-alt/50 border border-theme-border hover:bg-theme-bg-alt hover:border-theme-accent/50 text-theme-text font-medium transition-all flex items-center gap-2">
                  Solicitar Demonstração
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="lg:w-1/2 p-10 lg:p-16 w-full flex justify-center">
                {/* Abstract UI representation of the POS app */}
                <div className="relative w-full max-w-sm aspect-[9/16] bg-theme-bg border-4 border-theme-border rounded-[2.5rem] shadow-2xl shadow-theme-accent/5 overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="h-6 flex items-center justify-between px-6 pt-2">
                    <div className="text-[10px] text-theme-text-muted font-medium">9:41</div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-theme-bg-alt"></div>
                      <div className="w-3 h-3 rounded-full bg-theme-bg-alt"></div>
                    </div>
                  </div>
                  {/* App Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="w-24 h-4 bg-theme-bg-alt rounded-full mb-6"></div>
                    <div className="w-full h-32 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl mb-4 border border-theme-border/50 p-4">
                      <div className="w-16 h-4 bg-theme-border rounded-full mb-2"></div>
                      <div className="w-32 h-6 bg-theme-border rounded-full"></div>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1 h-24 bg-theme-bg-alt rounded-2xl border border-theme-border p-3">
                        <div className="w-8 h-8 bg-theme-primary/20 rounded-lg mb-2"></div>
                        <div className="w-12 h-2 bg-theme-border rounded-full"></div>
                      </div>
                      <div className="flex-1 h-24 bg-theme-bg-alt rounded-2xl border border-theme-border p-3">
                        <div className="w-8 h-8 bg-theme-accent/20 rounded-lg mb-2"></div>
                        <div className="w-12 h-2 bg-theme-border rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-theme-bg-alt rounded-t-3xl border-t border-x border-theme-border mt-4 p-5">
                       <div className="w-10 h-1 bg-theme-bg-alt rounded-full mx-auto mb-4"></div>
                       <div className="space-y-3">
                         <div className="w-full h-10 bg-theme-bg-alt rounded-xl"></div>
                         <div className="w-full h-10 bg-theme-bg-alt rounded-xl"></div>
                         <div className="w-full h-10 bg-theme-bg-alt rounded-xl"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <footer className="bg-theme-bg border-t border-theme-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <img src="/k7-icon.png" alt="B-Side Tech Logo" className="w-8 h-8 object-contain opacity-80" />
                <span className="font-bold text-xl font-handwriting text-theme-text">B-Side Tech</span>
              </div>
              <p className="text-theme-text-muted text-sm font-mono mt-1">Lado B da Tecnologia</p>
              <p className="text-theme-text-muted/50 text-xs mt-1">CNPJ: 00.000.000/0001-00</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-theme-bg-alt flex items-center justify-center text-theme-text-muted hover:text-theme-text hover:bg-theme-bg-alt transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-theme-border text-center flex flex-col md:flex-row justify-between items-center gap-4 text-theme-text-muted text-sm">
            <p>&copy; {new Date().getFullYear()} B-Side Tech. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-theme-text-muted">Termos de Uso</a>
              <a href="#" className="hover:text-theme-text-muted">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
