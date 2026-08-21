import { Database, BarChart3, Brain } from 'lucide-react';

export function DataConsultingSection() {
  return (
    <section id="dados" className="py-24 bg-theme-bg border-t border-theme-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-bg-alt/50 border border-theme-border text-sm font-medium text-theme-primary mb-6">
            Consultoria Premium (B2B Corporativo)
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-handwriting">
            Engenharia de Dados & IA para o Mercado Financeiro
          </h2>
          <p className="text-lg text-theme-text-muted max-w-3xl mx-auto">
            Soluções especializadas para FIDC e Securitizadoras, transformando operações financeiras com dados estruturados e inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-theme-bg-alt border border-theme-border p-8 rounded-2xl hover:border-theme-primary/50 hover:shadow-lg hover:shadow-theme-primary/10 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-full h-32 bg-theme-bg-alt rounded-xl mb-6 overflow-hidden border border-theme-border/50">
              <img src="/images/data-pipeline.png" alt="Arquitetura de Dados" className="w-full h-full object-cover" />
            </div>
            <div className="w-14 h-14 bg-theme-bg-alt rounded-xl flex items-center justify-center mb-6 group-hover:bg-theme-primary/20 transition-colors">
              <Database className="text-theme-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-handwriting">Arquitetura de Dados Moderna</h3>
            <p className="text-theme-text-muted leading-relaxed">
              Construção de pipelines robustos e Data Lakes utilizando Microsoft Fabric e PySpark.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-theme-bg-alt border border-theme-border p-8 rounded-2xl hover:border-theme-accent/50 hover:shadow-lg hover:shadow-theme-accent/10 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-full h-32 bg-theme-bg-alt rounded-xl mb-6 overflow-hidden border border-theme-border/50">
              <img src="/images/powerbi-dashboard.png" alt="Dashboard Power BI" className="w-full h-full object-cover" />
            </div>
            <div className="w-14 h-14 bg-theme-bg-alt rounded-xl flex items-center justify-center mb-6 group-hover:bg-theme-accent/20 transition-colors">
              <BarChart3 className="text-theme-accent" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-handwriting">Business Intelligence Avançado</h3>
            <p className="text-theme-text-muted leading-relaxed">
              Dashboards interativos em Power BI para análise de risco, esteira de crédito e tomada de decisão em tempo real.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-theme-bg-alt border border-theme-border p-8 rounded-2xl hover:border-theme-primary/50 hover:shadow-lg hover:shadow-theme-primary/10 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-theme-bg-alt rounded-xl flex items-center justify-center mb-6 group-hover:bg-theme-primary/20 transition-colors">
              <Brain className="text-theme-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-handwriting">Automação com IA</h3>
            <p className="text-theme-text-muted leading-relaxed">
              Modelos preditivos para otimização de operações financeiras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
