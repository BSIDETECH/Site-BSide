import { MapPin, MessageSquare, Star, Clock, Info, Flame } from 'lucide-react';
import type { RestaurantData } from '../data/restaurantTemplateTypes';

export default function RestaurantTemplate({ data }: { data: RestaurantData }) {
  return (
    <div className={`min-h-screen font-sans selection:bg-red-500 selection:text-theme-text ${data.colors.background} ${data.colors.text}`}>
      {/* Hero Section */}
      <header className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden px-4">
        {/* Fundo abstrato vermelho/laranja para o Burgelo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Logo / Brand - Mockup do Logo Real */}
          <div className="mb-8 flex flex-col items-center justify-center p-6 bg-white rounded-full shadow-[0_0_40px_rgba(220,38,38,0.3)] w-48 h-48 sm:w-56 sm:h-56">
            <div className={`w-16 h-16 rounded-full border-4 border-white mb-2 flex items-center justify-center ${data.colors.accent} text-theme-text shadow-inner`}>
               <Flame size={32} fill="white" className="mt-1" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tighter uppercase leading-none">{data.name}</h1>
            <p className="text-xs sm:text-sm font-bold text-theme-text-muted uppercase tracking-widest mt-1">{data.subtitle}</p>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            {data.heroTitle}
          </h2>
          <p className="text-lg md:text-xl text-theme-text max-w-2xl mx-auto mb-10 opacity-90">
            {data.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={data.links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${data.colors.accent} ${data.colors.accentText} hover:opacity-90 transition-opacity shadow-lg`}
            >
              <MapPin size={20} />
              Como Chegar
            </a>
            <a
              href={data.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-theme-bg-alt text-theme-text hover:bg-theme-border transition-colors border border-theme-border shadow-lg"
            >
              <MessageSquare size={20} />
              Fazer Pedido
            </a>
          </div>
        </div>
      </header>

      {/* Vitrine / Destaques */}
      <section className="py-16 bg-theme-bg-alt/80 border-y border-theme-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Os Mais Pedidos</h3>
            <div className={`w-24 h-1.5 rounded-full mx-auto ${data.colors.accent}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.products.map((product, index) => (
              <div key={index} className="bg-theme-bg rounded-2xl overflow-hidden border border-theme-border hover:border-slate-600 transition-colors group">
                <div className="h-48 w-full bg-theme-bg-alt relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10 opacity-60"></div>
                  {/* Image placeholder - simulate a nice food background */}
                  <div className="absolute inset-0 flex items-center justify-center bg-theme-bg-alt group-hover:scale-105 transition-transform duration-500">
                    <span className="text-sm uppercase font-semibold tracking-wider text-theme-text-muted">Foto {product.name}</span>
                  </div>
                </div>
                <div className="p-6 relative z-20 -mt-8 bg-theme-bg rounded-t-2xl">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-theme-text pr-4">{product.name}</h4>
                    <span className={`font-black whitespace-nowrap px-3 py-1 bg-theme-bg-alt rounded-lg border border-theme-border ${data.colors.priceText}`}>{product.price}</span>
                  </div>
                  <p className="text-theme-text-muted text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMGYxNzJhIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMWUzYThhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="text-yellow-400 fill-yellow-400" size={28} />
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">Aprovado por quem entende</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {data.reviews.map((review, index) => (
              <div key={index} className="bg-theme-bg-alt/90 backdrop-blur-sm p-8 rounded-2xl border border-theme-border text-left shadow-xl">
                <p className="text-theme-text italic mb-6 text-lg">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-theme-bg-alt flex items-center justify-center font-bold text-theme-text-muted">
                    {review.author.charAt(0)}
                  </div>
                  <div className="font-semibold text-theme-text">{review.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <footer className="bg-theme-bg py-16 border-t border-theme-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-xl font-bold text-theme-text mb-6 flex items-center gap-2">
                <MapPin size={24} className={data.colors.priceText} /> Localização
              </h4>
              <p className="text-theme-text-muted font-medium">{data.address.street}</p>
              <p className="text-theme-text-muted">{data.address.city}</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-theme-text mb-6 flex items-center gap-2">
                <Clock size={24} className={data.colors.priceText} /> Horário de Funcionamento
              </h4>
              <div className="space-y-2">
                {data.hours.map((hour, index) => (
                  <p key={index} className="text-theme-text-muted flex justify-between max-w-[250px] border-b border-theme-border pb-2">
                    <span className="font-medium">{hour.day}</span> <span>{hour.time}</span>
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-theme-text mb-6 flex items-center gap-2">
                <Info size={24} className={data.colors.priceText} /> Atendimento
              </h4>
              <p className="text-theme-text-muted mb-4 font-medium">{data.contact.phone}</p>
              <a
                href={data.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-theme-bg-alt border border-theme-border text-theme-text font-medium hover:bg-theme-bg-alt transition-colors w-full sm:w-auto justify-center`}
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-theme-border text-center text-sm text-theme-text-muted flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} {data.name}. Todos os direitos reservados.</p>
            <p className="mt-4 sm:mt-0">
              Orgulhosamente desenvolvido por <a href="https://somosbside.com.br" className="text-theme-text-muted hover:text-theme-text font-bold transition-colors" target="_blank" rel="noopener noreferrer">B-Side Tech</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
