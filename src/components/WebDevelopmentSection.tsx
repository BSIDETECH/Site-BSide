import { Globe, Search, Smartphone, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export function WebDevelopmentSection() {
  return (
    <section id="sites" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-glow/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm font-medium text-cyan-glow mb-6">
            Novo Serviço
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            Presença Digital de Alta Conversão
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Desenvolvimento e manutenção de sites focados em captar clientes, rankear no Google e reduzir a dependência de plataformas com altas taxas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Pain Points (Sem Site) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <XCircle className="text-red-500" size={28} />
              O Custo de Não Estar Online
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <p className="text-slate-400"><strong className="text-slate-300">Invisibilidade Local:</strong> Você perde vendas todos os dias para concorrentes que aparecem quando o cliente pesquisa "onde comer" no Google.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <p className="text-slate-400"><strong className="text-slate-300">Refém de Taxas:</strong> Depender 100% de apps de delivery significa pagar até 27% de taxa em cada pedido, reduzindo drasticamente seu lucro.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <p className="text-slate-400"><strong className="text-slate-300">Amadorismo Online:</strong> Mandar um PDF pesado no WhatsApp ou não ter um cardápio digital profissional afasta clientes exigentes.</p>
              </li>
            </ul>
          </div>

          {/* Benefits (Com Site da B-Side) */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl shadow-cyan-glow/5">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-glow/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
              <CheckCircle2 className="text-cyan-400" size={28} />
              A Solução B-Side Tech
            </h3>
            <ul className="space-y-5 relative z-10">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950/50 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Search size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 mb-1">Máquina de Descoberta (SEO)</h4>
                  <p className="text-sm text-slate-400">Seja encontrado facilmente no Google Maps. Transforme turistas e novos moradores em clientes reais na sua mesa.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950/50 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Globe size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 mb-1">Vendas sem Taxas</h4>
                  <p className="text-sm text-slate-400">Canalize pedidos direto para o seu WhatsApp ou integre com nosso PDV. Lucro 100% seu, sem intermediários.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950/50 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Smartphone size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 mb-1">Cardápio Sempre Atualizado</h4>
                  <p className="text-sm text-slate-400">Site rápido, visual incrível no celular (Mobile-First) e integração com o sistema de caixa. Mudou o preço lá, atualiza no site.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5515998139561?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites%20para%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-lg shadow-cyan-600/20"
          >
            Quero um Site para Meu Negócio
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
