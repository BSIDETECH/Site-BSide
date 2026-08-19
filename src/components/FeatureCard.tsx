import type { ElementType } from 'react';

interface FeatureCardProps {
  icon: ElementType;
  title: string;
  description: string;
  colorTheme?: 'electric-blue' | 'cyan-glow';
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  colorTheme = 'electric-blue',
}: FeatureCardProps) {
  const isElectricBlue = colorTheme === 'electric-blue';

  return (
    <div
      className={`bg-slate-900 border border-slate-800 p-8 rounded-2xl transition-colors group ${
        isElectricBlue ? 'hover:border-electric-blue/50' : 'hover:border-cyan-glow/50'
      }`}
    >
      <div
        className={`w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 transition-colors ${
          isElectricBlue ? 'group-hover:bg-electric-blue/10' : 'group-hover:bg-cyan-glow/10'
        }`}
      >
        <Icon className={isElectricBlue ? 'text-electric-blue' : 'text-cyan-glow'} size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
