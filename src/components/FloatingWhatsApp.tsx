import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5515998139561?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20B-Side%20e%20gostaria%20de%20falar%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20Dados%20e%20SaaS."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-theme-text rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
