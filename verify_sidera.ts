import * as fs from 'fs';

const fileContent = fs.readFileSync('src/pages/Sidera.tsx', 'utf-8');

if (fileContent.includes('target="_blank"') && !fileContent.includes('rel="noopener noreferrer"')) {
    console.log("Missing noopener noreferrer on target blank");
    process.exit(1);
}

if (!fileContent.includes('O fim do caos no fechamento de caixa')) {
    console.log("Missing Headline");
    process.exit(1);
}

if (!fileContent.includes('1. O Garçom')) {
    console.log("Missing Pilar 1");
    process.exit(1);
}
console.log("Component Verified");
