'use client';

import { useState } from 'react';
import { Mail, Clock, MapPin, ChevronRight } from 'lucide-react';

export function ContactSection() {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const interest = formData.get('interest') as string;
    const message = formData.get('message') as string;

    const text = `Olá, vim pelo site da B-Side Tech!
*Nome:* ${name}
*E-mail:* ${email}
*Interesse:* ${interest}
*Mensagem:* ${message}`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/5515998139561?text=${encodedText}`;

    window.open(url, '_blank', 'noopener,noreferrer');

    setSuccessMessage('Redirecionando para o WhatsApp...');
    form.reset();
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-theme-bg border-t border-theme-border">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwriting">Pronto para escalar seu negócio?</h2>
          <p className="text-xl text-theme-text-muted">
            Fale com nossos especialistas em Dados, IA ou agende uma demonstração dos nossos sistemas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Informações de Contato */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-theme-bg-alt border border-theme-border flex items-center justify-center flex-shrink-0 text-theme-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-theme-text mb-1 font-handwriting">E-mail</h3>
                  <p className="text-theme-text-muted">contato@somosbside.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-theme-bg-alt border border-theme-border flex items-center justify-center flex-shrink-0 text-theme-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-theme-text mb-1 font-handwriting">Horário Comercial</h3>
                  <p className="text-theme-text-muted">Segunda a Sexta, 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-theme-bg-alt border border-theme-border flex items-center justify-center flex-shrink-0 text-theme-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-theme-text mb-1 font-handwriting">Localização</h3>
                  <p className="text-theme-text-muted">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-theme-primary/10 to-transparent border border-theme-primary/20">
              <p className="text-sm text-theme-text leading-relaxed">
                "Nossa missão é fornecer a infraestrutura tecnológica necessária para que nossos parceiros alcancem o próximo nível de eficiência e escala."
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-theme-bg-alt/50 p-8 rounded-3xl border border-theme-border backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-theme-text block">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-theme-bg-alt border border-theme-border rounded-xl px-4 py-3 text-theme-text placeholder-slate-500 focus:outline-none focus:border-theme-primary focus:ring-1 focus:ring-theme-primary transition-all"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-theme-text block">E-mail corporativo</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-theme-bg-alt border border-theme-border rounded-xl px-4 py-3 text-theme-text placeholder-slate-500 focus:outline-none focus:border-theme-primary focus:ring-1 focus:ring-theme-primary transition-all"
                  placeholder="seu@email.com.br"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium text-theme-text block">Interesse</label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  className="w-full bg-theme-bg-alt border border-theme-border rounded-xl px-4 py-3 text-theme-text focus:outline-none focus:border-theme-primary focus:ring-1 focus:ring-theme-primary transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="consultoria">Consultoria em Dados/IA</option>
                  <option value="comanda">Comanda Digital</option>
                  <option value="adegas">Sistema para Adegas</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-theme-text block">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-theme-bg-alt border border-theme-border rounded-xl px-4 py-3 text-theme-text placeholder-slate-500 focus:outline-none focus:border-theme-primary focus:ring-1 focus:ring-theme-primary transition-all resize-none"
                  placeholder="Como podemos ajudar sua empresa?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-theme-primary text-theme-text font-medium hover:bg-theme-primary-hover transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-theme-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Enviar Mensagem
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {successMessage && (
                <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                  {successMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
