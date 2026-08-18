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
import { DataConsultingSection } from './components/DataConsultingSection';
import { SaaSProductsSection } from './components/SaaSProductsSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-electric-blue selection:text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-cyan-glow flex items-center justify-center font-bold text-lg font-display">
                B
              </div>
              <span className="font-bold text-xl tracking-tight font-display">B-Side Tech</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Serviços</a>
              <a href="#product" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Comanda Digital</a>
              <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-white">
                Fale Conosco
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-400 hover:text-white">Serviços</a>
            <a href="#product" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-400 hover:text-white">Comanda Digital</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-electric-blue">Fale Conosco</a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
              Inovação B2B de Alta Performance
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-display">
              Transformando negócios com <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Data, AI e SaaS Escalável
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Construímos a infraestrutura digital do futuro para empresas que buscam eficiência, inteligência e crescimento acelerado.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#dados" className="px-8 py-4 rounded-full bg-electric-blue text-white font-medium hover:bg-electric-blue-hover transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-electric-blue/20">
                Conheça nossas soluções
                <ChevronRight size={20} />
              </a>
              <a href="https://wa.me/5515998139561?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20B-Side%20e%20gostaria%20de%20falar%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20Dados%20e%20SaaS." target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-transparent border-2 border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 transition-colors text-white font-medium w-full sm:w-auto justify-center flex">
                Fale com um Especialista
              </a>
            </div>
          </div>
        </section>

        {/* Data Consulting Section */}
        <DataConsultingSection />

        {/* SaaS Products Ecosystem */}
        <SaaSProductsSection />

        {/* Consulting Services */}
        <section id="services" className="py-24 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Nossa Expertise B2B</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Soluções consultivas e desenvolvimento sob medida para os desafios mais complexos da sua operação.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-electric-blue/50 transition-colors group">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/10 transition-colors">
                  <Database className="text-electric-blue" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Data Engineering</h3>
                <p className="text-slate-400 leading-relaxed">
                  Arquitetura de dados robusta, pipelines escaláveis e data lakes seguros para centralizar e processar suas informações.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-glow/50 transition-colors group">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-glow/10 transition-colors">
                  <BarChart3 className="text-cyan-glow" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Business Intelligence</h3>
                <p className="text-slate-400 leading-relaxed">
                  Dashboards interativos e relatórios em tempo real para transformar dados brutos em decisões estratégicas precisas.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-electric-blue/50 transition-colors group">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/10 transition-colors">
                  <Brain className="text-electric-blue" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">AI Solutions</h3>
                <p className="text-slate-400 leading-relaxed">
                  Modelos preditivos, automação inteligente e machine learning aplicados para otimizar processos e reduzir custos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Product */}
        <section id="product" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-glow/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="p-10 lg:p-16 lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-sm font-medium text-cyan-glow mb-6">
                  SaaS Proprietário
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                  Comanda Digital
                </h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  A plataforma definitiva para o setor gastronômico. Gestão completa, desde o pedido na mesa até o fechamento de caixa, tudo integrado e em tempo real.
                </p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <CreditCard size={16} className="text-electric-blue" />
                    </div>
                    <span>Smart POS ultra-rápido e integrado</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <MenuSquare size={16} className="text-cyan-glow" />
                    </div>
                    <span>Cardápios digitais interativos via QR Code</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Smartphone size={16} className="text-electric-blue" />
                    </div>
                    <span>Totens de autoatendimento (Self-service)</span>
                  </li>
                </ul>

                <button className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-cyan-glow/50 text-white font-medium transition-all flex items-center gap-2">
                  Solicitar Demonstração
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="lg:w-1/2 p-10 lg:p-16 w-full flex justify-center">
                {/* Abstract UI representation of the POS app */}
                <div className="relative w-full max-w-sm aspect-[9/16] bg-slate-950 border-4 border-slate-800 rounded-[2.5rem] shadow-2xl shadow-cyan-glow/5 overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="h-6 flex items-center justify-between px-6 pt-2">
                    <div className="text-[10px] text-slate-500 font-medium">9:41</div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                    </div>
                  </div>
                  {/* App Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="w-24 h-4 bg-slate-800 rounded-full mb-6"></div>
                    <div className="w-full h-32 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl mb-4 border border-slate-700/50 p-4">
                      <div className="w-16 h-4 bg-slate-700 rounded-full mb-2"></div>
                      <div className="w-32 h-6 bg-slate-600 rounded-full"></div>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1 h-24 bg-slate-900 rounded-2xl border border-slate-800 p-3">
                        <div className="w-8 h-8 bg-electric-blue/20 rounded-lg mb-2"></div>
                        <div className="w-12 h-2 bg-slate-700 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-24 bg-slate-900 rounded-2xl border border-slate-800 p-3">
                        <div className="w-8 h-8 bg-cyan-glow/20 rounded-lg mb-2"></div>
                        <div className="w-12 h-2 bg-slate-700 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-900 rounded-t-3xl border-t border-x border-slate-800 mt-4 p-5">
                       <div className="w-10 h-1 bg-slate-800 rounded-full mx-auto mb-4"></div>
                       <div className="space-y-3">
                         <div className="w-full h-10 bg-slate-800 rounded-xl"></div>
                         <div className="w-full h-10 bg-slate-800 rounded-xl"></div>
                         <div className="w-full h-10 bg-slate-800 rounded-xl"></div>
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
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-electric-blue to-cyan-glow flex items-center justify-center font-bold text-xs font-display">
                  B
                </div>
                <span className="font-bold text-lg font-display">B-Side Tech</span>
              </div>
              <p className="text-slate-500 text-sm">CNPJ: 00.000.000/0001-00</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-900 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} B-Side Tech. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-400">Termos de Uso</a>
              <a href="#" className="hover:text-slate-400">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
