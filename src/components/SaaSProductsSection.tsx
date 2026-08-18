import { Smartphone, Store, ChevronRight } from 'lucide-react';

export function SaaSProductsSection() {
  return (
    <section className="py-24 bg-slate-900/30 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-cyan-glow mb-6">
            Produtos SaaS (Product-Led Growth)
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
            Ecossistema de Produtos SaaS
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Soluções plug-and-play para o varejo físico e phygital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product 1: Comanda Digital */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-cyan-glow/50 transition-all duration-300 group flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-cyan-glow/20 transition-colors">
                <Smartphone className="text-cyan-glow" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-display">Comanda Digital (Bares e Restaurantes)</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
              Sistema de autoatendimento Phygital. Modernize sua operação unindo QR Codes físicos nas mesas com um Dashboard Firebase em tempo real para a cozinha e o caixa.
            </p>

            <div className="bg-slate-800 aspect-video rounded-xl mb-8 border border-slate-700/50 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-glow/30 transition-colors">
              <img src="/images/comanda-mobile.png" alt="Interface Mobile da Comanda Digital" className="w-full h-full object-cover relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/5 to-transparent pointer-events-none z-20"></div>
            </div>

            <a href="#contato" className="self-start px-6 py-3 rounded-xl bg-transparent border border-slate-700 hover:bg-slate-800 hover:border-cyan-glow/50 text-white font-medium transition-all flex items-center gap-2">
              Conhecer o Produto
              <ChevronRight size={18} />
            </a>
          </div>

          {/* Product 2: Sistema PDV Inteligente */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-electric-blue/50 transition-all duration-300 group flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors">
                <Store className="text-electric-blue" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-display">Gestão para Adegas e Empórios</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
              PDV completo com módulo financeiro integrado, controle rigoroso de estoque e Inteligência Artificial para previsão de ruptura (Stock-out prediction).
            </p>

            <div className="bg-slate-800 aspect-video rounded-xl mb-8 border border-slate-700/50 flex items-center justify-center relative overflow-hidden group-hover:border-electric-blue/30 transition-colors">
              <img src="/images/adega-desktop.png" alt="Dashboard do Sistema PDV para Adegas" className="w-full h-full object-cover relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent pointer-events-none z-20"></div>
            </div>

            <a href="#contato" className="self-start px-6 py-3 rounded-xl bg-transparent border border-slate-700 hover:bg-slate-800 hover:border-electric-blue/50 text-white font-medium transition-all flex items-center gap-2">
              Solicitar Demonstração
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
