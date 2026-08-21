import type { RestaurantData } from './restaurantTemplateTypes';

export const burgeloData: RestaurantData = {
  name: 'Burgelo',
  subtitle: 'Chopp & Grill',
  heroTitle: 'O Melhor Hambúrguer Artesanal da Cidade',
  heroDescription: 'Sabor autêntico, ingredientes frescos e aquele ambiente perfeito para curtir com a família e amigos.',
  colors: {
    background: 'bg-slate-950',
    text: 'text-slate-50',
    accent: 'bg-red-600', // Tema Burgelo (chama vermelha)
    accentText: 'text-white',
    priceText: 'text-red-400',
  },
  links: {
    whatsapp: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido%21', // Fictício
    maps: 'https://maps.google.com/?q=Burgelo', // Fictício
  },
  products: [
    {
      name: 'Burgelo Clássico',
      price: 'R$ 34,90',
      description: 'Pão brioche artesanal, blend bovino 160g, queijo prato derretido, alface americana, tomate e nossa maionese especial da casa.',
    },
    {
      name: 'Bacon Supremo',
      price: 'R$ 39,90',
      description: 'Pão australiano, blend bovino 160g, duplo cheddar, tiras de bacon crocante, cebola caramelizada e molho barbecue.',
    },
    {
      name: 'Smash Duplo',
      price: 'R$ 32,90',
      description: 'Pão brioche, 2 smash burgers de 90g, duplo american cheese, picles e molho especial.',
    },
    {
      name: 'Porção de Fritas com Cheddar',
      price: 'R$ 28,90',
      description: 'Nossa famosa porção de batatas fritas rústicas, cobertas com muito creme de cheddar e farofa de bacon.',
    },
    {
      name: 'Chopp Artesanal',
      price: 'R$ 12,00',
      description: 'Chopp Pilsen estupidamente gelado, servido na caneca congelada de 400ml.',
    },
    {
      name: 'Milkshake de Nutella',
      price: 'R$ 22,90',
      description: 'Sorvete de creme batido com muita Nutella original e chantilly.',
    }
  ],
  reviews: [
    {
      author: 'Carlos Silva (Guia Local)',
      text: 'Simplesmente o melhor lanche da região! Atendimento impecável e o ambiente é muito agradável. Recomendo de olhos fechados.',
    },
    {
      author: 'Marina Costa',
      text: 'A carne é muito suculenta e o bacon super crocante. Fiquei impressionada com a agilidade do pedido na mesa pelo QR Code!',
    }
  ],
  address: {
    street: 'Rua das Flores, 123 - Centro', // Fictício
    city: 'Sua Cidade - SP', // Fictício
  },
  hours: [
    { day: 'Ter a Qui', time: '18:00 - 23:00' },
    { day: 'Sex a Dom', time: '18:00 - 00:00' },
  ],
  contact: {
    phone: '(11) 99999-9999', // Fictício
  }
};
