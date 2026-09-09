import {
  XOctagon,
  Smartphone,
  Printer,
  Monitor,
  ShieldCheck,
  Zap,
  TrendingUp,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export default function Sidera() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const waLink = "https://wa.me/5515998139561?text=Ol%C3%A1%21%20Vi%20o%20Sidera%20no%20site%20e%20gostaria%20de%20saber%20como%20o%20sistema%20pode%20agilizar%20o%20atendimento%20das%20minhas%20mesas%20e%20facilitar%20o%20fechamento%20do%20caixa.";

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text font-sans selection:bg-theme-primary selection:text-theme-text">
      {/* Header - Minimal with no escape routes */}
      <header className="fixed w-full top-0 z-50 bg-theme-bg/80 backdrop-blur-md border-b border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight text-theme-text ml-2">Sidera</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#como-funciona" className="text-sm font-medium text-theme-text-muted hover:text-theme-primary transition-colors">Como Funciona</a>
              <a href="#vantagens" className="text-sm font-medium text-theme-text-muted hover:text-theme-primary transition-colors">Vantagens</a>
              <a href="#depoimentos" className="text-sm font-medium text-theme-text-muted hover:text-theme-primary transition-colors">Depoimentos</a>
              <ThemeSwitcher />
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white transition-all shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={18} />
                Falar com Consultor
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
             <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-theme-text-muted hover:text-theme-text">Como Funciona</a>
             <a href="#vantagens" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-theme-text-muted hover:text-theme-text">Vantagens</a>
             <a href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-theme-text-muted hover:text-theme-text">Depoimentos</a>
             <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex justify-center items-center gap-2 text-lg font-bold bg-green-500 hover:bg-green-600 text-white rounded-xl p-3 text-center shadow-lg"
              >
                <MessageCircle size={20} />
                Falar com Consultor
              </a>
          </div>
        )}
      </header>

      <main>
        {/* Bloco 1: A Primeira Dobra (Hero Section) */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-theme-bg">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-theme-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-theme-bg-alt/80 border border-theme-border text-sm font-semibold text-theme-accent mb-6 shadow-sm uppercase tracking-wider">
              Para Food Parks, Bares e Estabelecimentos Multi-operações
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
              Uma única comanda, <br className="hidden md:block"/>múltiplas operações. <br/>
              <span className="text-theme-primary">O fim do caos no fechamento de caixa.</span>
            </h1>

            <p className="text-lg md:text-xl text-theme-text-muted mb-10 leading-relaxed max-w-3xl mx-auto">
              O Sidera unifica o atendimento de todas as suas frentes de venda em um só PDV Móvel. Sem pedidos perdidos, sem telas complexas na cozinha e com um fechamento de caixa que leva minutos, não horas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 transform hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Falar com um Consultor
              </a>
            </div>
          </div>
        </section>

        {/* Bloco 2: Agitação do Problema (Conexão com a dor) */}
        <section className="py-20 bg-theme-bg-alt/30 border-y border-theme-border/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A hora do rush não deveria custar o seu lucro.</h2>
            <p className="text-lg text-theme-text-muted mb-12 max-w-2xl mx-auto">
              Nós sabemos como é. O cliente senta, quer um espetinho de uma loja e a bebida do bar. O garçom precisa fazer malabarismo, a cozinha se perde com papeis duplicados e, no fim da noite, o seu caixa não bate.
            </p>

            <div className="bg-theme-bg border border-theme-border rounded-2xl p-6 md:p-10 shadow-lg text-left inline-block w-full">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 bg-red-500/10 p-1.5 rounded-full">
                    <XOctagon size={20} className="text-red-500" />
                  </div>
                  <span className="text-lg text-theme-text font-medium">Garçons perdendo tempo cruzando pedidos de lojas diferentes.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 bg-red-500/10 p-1.5 rounded-full">
                    <XOctagon size={20} className="text-red-500" />
                  </div>
                  <span className="text-lg text-theme-text font-medium">Cozinha confusa e pedidos duplicados gerando desperdício.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 bg-red-500/10 p-1.5 rounded-full">
                    <XOctagon size={20} className="text-red-500" />
                  </div>
                  <span className="text-lg text-theme-text font-medium">Clientes irritados com a demora e contas erradas.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 bg-red-500/10 p-1.5 rounded-full">
                    <XOctagon size={20} className="text-red-500" />
                  </div>
                  <span className="text-lg text-theme-text font-medium">Horas perdidas no fim do expediente para fechar o caixa de cada setor.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloco 3: Apresentação da Solução (O "Momento Aha!") */}
        <section id="como-funciona" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Conheça o Sidera: A operação complexa, resolvida de forma simples.</h2>
              <p className="text-xl text-theme-text-muted max-w-3xl mx-auto">
                Substituímos a confusão por um fluxo de trabalho inteligente e à prova de falhas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Pillar 1 */}
              <div className="bg-theme-bg-alt border border-theme-border rounded-2xl p-8 hover:border-theme-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-theme-primary/10 flex items-center justify-center mb-6">
                  <Smartphone size={32} className="text-theme-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">1. O Garçom (Unificação)</h3>
                <p className="text-theme-text-muted leading-relaxed">
                  Lança pedidos de qualquer setor, para a mesma mesa, em um único dispositivo. Mais velocidade, zero confusão.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-theme-bg-alt border border-theme-border rounded-2xl p-8 hover:border-theme-accent/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-theme-accent/10 flex items-center justify-center mb-6">
                  <Printer size={32} className="text-theme-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">2. A Cozinha (Impressão Direta)</h3>
                <p className="text-theme-text-muted leading-relaxed">
                  Esqueça telas caras e complexas (KDS). O pedido sai direto na impressora térmica certa, no segundo em que é feito. Sem duplicidade, sem atrasos.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-theme-bg-alt border border-theme-border rounded-2xl p-8 hover:border-theme-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-theme-primary/10 flex items-center justify-center mb-6">
                  <Monitor size={32} className="text-theme-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">3. O Caixa (Controle Total)</h3>
                <p className="text-theme-text-muted leading-relaxed">
                  Visão centralizada de todas as mesas. Cobrança baseada no consumo unificado e fechamento de dia com relatórios analíticos instantâneos.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="w-full max-w-5xl mx-auto bg-theme-bg-alt rounded-3xl border border-theme-border overflow-hidden shadow-2xl flex items-center justify-center min-h-[400px]">
               {/* Replace this img tag with the actual mockup when available */}
               <div className="text-center p-12">
                  <Monitor size={64} className="text-theme-text-muted mx-auto mb-4 opacity-50" />
                  <p className="text-theme-text-muted font-medium text-lg">
                    [Espaço reservado para Mockup do Smartphone e Cupom Impresso]
                  </p>
                  <p className="text-sm text-theme-text-muted/60 mt-2">
                    Substitua a imagem local em public/sidera-mockup.png e atualize a tag &lt;img&gt;
                  </p>
               </div>
               {/* <img src="/sidera-mockup.png" alt="Interface do Sidera" className="w-full h-auto object-cover" /> */}
            </div>
          </div>
        </section>

        {/* Bloco 4: Argumentos Técnicos (Traduzidos para Negócios) */}
        <section id="vantagens" className="py-20 bg-theme-bg-alt/50 border-y border-theme-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Um sistema que nunca te deixa na mão.</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <Zap size={32} className="text-green-500" />
                </div>
                <h4 className="text-xl font-bold mb-3">Não trava no pico</h4>
                <p className="text-theme-text-muted">Arquitetura leve que não sobrecarrega a sua rede, garantindo estabilidade no momento que você mais precisa.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <ShieldCheck size={32} className="text-blue-500" />
                </div>
                <h4 className="text-xl font-bold mb-3">Fácil de treinar</h4>
                <p className="text-theme-text-muted">Tão intuitivo que um garçom novo aprende a usar em 10 minutos. Reduza o tempo e custo com treinamentos.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-purple-500" />
                </div>
                <h4 className="text-xl font-bold mb-3">Gestão de Dados</h4>
                <p className="text-theme-text-muted">Painéis gerenciais completos para você saber exatamente o que vende mais e onde está o seu lucro real.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 5: Prova Social & Garantia (Crucial para a conversão) */}
        <section id="depoimentos" className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Quem usa, não troca.</h2>

            <div className="bg-theme-bg-alt border border-theme-border rounded-3xl p-10 md:p-14 relative shadow-xl">
              <div className="absolute top-8 left-8 text-6xl text-theme-primary/20 font-serif leading-none">"</div>

              {/* USER: Replace this text with a real testimonial */}
              <p className="text-xl md:text-2xl font-medium text-theme-text italic leading-relaxed mb-8 relative z-10">
                Antes do Sidera, nós fechávamos o caixa às 2h da manhã todos os dias. Hoje, em 15 minutos tudo está conferido e as comandas batem perfeitamente.
              </p>

              <div className="flex flex-col items-center">
                {/* USER: Replace with real client info */}
                <span className="font-bold text-lg">João Silva</span>
                <span className="text-theme-text-muted">Proprietário, Food Park Exemplo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 6: Chamada Final (Rodapé) */}
        <section className="py-24 bg-theme-bg relative overflow-hidden border-t border-theme-border">
          <div className="absolute inset-0 bg-theme-primary/5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para colocar sua operação no piloto automático?</h2>
            <p className="text-xl text-theme-text-muted mb-12 max-w-2xl mx-auto">
              Dê o próximo passo. Implementação rápida, suporte dedicado e zero dor de cabeça.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-green-500 text-white font-bold text-xl md:text-2xl hover:bg-green-600 transition-all shadow-2xl shadow-green-500/30 transform hover:scale-105"
            >
              <MessageCircle size={28} />
              Quero ver o Sidera funcionando
            </a>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />

      <footer className="bg-theme-bg border-t border-theme-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-theme-text-muted text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold text-lg text-theme-text">Sidera</div>
          <p>&copy; {new Date().getFullYear()} Desenvolvido por Somos B-Side. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
