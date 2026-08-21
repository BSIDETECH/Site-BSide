#!/bin/bash
find src -name "*.tsx" -type f -exec sed -i -e 's/electric-blue/theme-primary/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/bg-slate-800/bg-theme-bg-alt/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/border-slate-700/border-theme-border/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/text-slate-300/text-theme-text/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/text-slate-600/text-theme-text-muted/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/text-slate-700/text-theme-text-muted/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/bg-slate-700/bg-theme-border/g' {} +
find src -name "*.tsx" -type f -exec sed -i -e 's/bg-slate-600/bg-theme-border/g' {} +
