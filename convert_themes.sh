#!/bin/bash
find src -name "*.tsx" -type f -exec sed -i -e 's/bg-slate-950/bg-theme-bg/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/bg-slate-900/bg-theme-bg-alt/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/border-slate-800/border-theme-border/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/border-slate-900/border-theme-border/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/text-slate-400/text-theme-text-muted/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/text-slate-500/text-theme-text-muted/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/text-slate-50/text-theme-text/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/text-white/text-theme-text/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/bg-electric-blue/bg-theme-primary/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/text-electric-blue/text-theme-primary/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/hover:bg-electric-blue-hover/hover:bg-theme-primary-hover/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/hover:text-white/hover:text-theme-text/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/from-electric-blue/from-theme-primary/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/to-cyan-glow/to-theme-accent/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/cyan-glow/theme-accent/g' {} +
