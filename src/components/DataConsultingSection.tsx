import { Database, BarChart3, Brain } from 'lucide-react';

export function DataConsultingSection() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-electric-blue mb-6">
            Consultoria Premium (B2B Corporativo)
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
            Engenharia de Dados & IA para o Mercado Financeiro
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Soluções especializadas para FIDC e Securitizadoras, transformando operações financeiras com dados estruturados e inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-electric-blue/50 hover:shadow-lg hover:shadow-electric-blue/10 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
              <Database className="text-electric-blue" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">Arquitetura de Dados Moderna</h3>
            <p className="text-slate-400 leading-relaxed">
              Construção de pipelines robustos e Data Lakes utilizando Microsoft Fabric e PySpark.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-glow/50 hover:shadow-lg hover:shadow-cyan-glow/10 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-glow/20 transition-colors">
              <BarChart3 className="text-cyan-glow" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">Business Intelligence Avançado</h3>
            <p className="text-slate-400 leading-relaxed">
              Dashboards interativos em Power BI para análise de risco, esteira de crédito e tomada de decisão em tempo real.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-electric-blue/50 hover:shadow-lg hover:shadow-electric-blue/10 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
              <Brain className="text-electric-blue" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">Automação com IA</h3>
            <p className="text-slate-400 leading-relaxed">
              Modelos preditivos para otimização de operações financeiras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
