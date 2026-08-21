import type { ElementType } from 'react';

interface FeatureCardProps {
  icon: ElementType;
  title: string;
  description: string;
  colorTheme?: 'theme-primary' | 'theme-accent';
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  colorTheme = 'theme-primary',
}: FeatureCardProps) {
  const isElectricBlue = colorTheme === 'theme-primary';

  return (
    <div
      className={`bg-theme-bg-alt border border-theme-border p-8 rounded-2xl transition-colors group ${
        isElectricBlue ? 'hover:border-theme-primary/50' : 'hover:border-theme-accent/50'
      }`}
    >
      <div
        className={`w-14 h-14 bg-theme-bg-alt rounded-xl flex items-center justify-center mb-6 transition-colors ${
          isElectricBlue ? 'group-hover:bg-theme-primary/10' : 'group-hover:bg-theme-accent/10'
        }`}
      >
        <Icon className={isElectricBlue ? 'text-theme-primary' : 'text-theme-accent'} size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p className="text-theme-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
