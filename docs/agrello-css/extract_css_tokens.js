#!/usr/bin/env node

const fs = require('fs');

// Read the CSS file
const css = fs.readFileSync('agrello-web.shared.min.css', 'utf8');

// Extract colors (hex, rgb, rgba, CSS variables)
const colorRegex = /#[0-9a-fA-F]{3,6}|rgb\([^)]+\)|rgba\([^)]+\)|var\(--[^)]+\)/g;
const colors = [...new Set(css.match(colorRegex) || [])].sort();

// Extract CSS variables
const varRegex = /--[a-zA-Z0-9-]+:[^;]+/g;
const cssVars = [...new Set(css.match(varRegex) || [])].sort();

// Extract font-family declarations
const fontFamilyRegex = /font-family:\s*([^;]+)/g;
const fontFamilies = [];
let match;
while ((match = fontFamilyRegex.exec(css)) !== null) {
  fontFamilies.push(match[1].trim());
}
const uniqueFonts = [...new Set(fontFamilies)];

// Extract font-size values
const fontSizeRegex = /font-size:\s*([^;]+)/g;
const fontSizes = [];
while ((match = fontSizeRegex.exec(css)) !== null) {
  fontSizes.push(match[1].trim());
}
const uniqueFontSizes = [...new Set(fontSizes)].sort((a, b) => {
  const aNum = parseFloat(a);
  const bNum = parseFloat(b);
  return aNum - bNum;
});

// Extract spacing values (margin, padding)
const spacingRegex = /(?:margin|padding)(?:-top|-right|-bottom|-left)?:\s*([^;]+)/g;
const spacing = [];
while ((match = spacingRegex.exec(css)) !== null) {
  spacing.push(match[1].trim());
}
const uniqueSpacing = [...new Set(spacing)].sort();

// Extract media queries
const mediaQueryRegex = /@media\s+[^{]+{/g;
const mediaQueries = css.match(mediaQueryRegex) || [];

// Extract border-radius values
const borderRadiusRegex = /border-radius:\s*([^;]+)/g;
const borderRadiuses = [];
while ((match = borderRadiusRegex.exec(css)) !== null) {
  borderRadiuses.push(match[1].trim());
}
const uniqueBorderRadius = [...new Set(borderRadiuses)];

// Extract box-shadow values
const boxShadowRegex = /box-shadow:\s*([^;]+)/g;
const boxShadows = [];
while ((match = boxShadowRegex.exec(css)) !== null) {
  boxShadows.push(match[1].trim());
}
const uniqueBoxShadows = [...new Set(boxShadows)];

// Output results
const output = {
  colors: colors.slice(0, 100), // Limit to first 100
  cssVariables: cssVars.slice(0, 50), // Limit to first 50
  fontFamilies: uniqueFonts.slice(0, 20),
  fontSizes: uniqueFontSizes.slice(0, 30),
  spacing: uniqueSpacing.slice(0, 50),
  borderRadius: uniqueBorderRadius.slice(0, 20),
  boxShadows: uniqueBoxShadows.slice(0, 20),
  mediaQueries: mediaQueries.length,
  mediaQuerySamples: mediaQueries.slice(0, 5)
};

console.log(JSON.stringify(output, null, 2));

// Also write to file
fs.writeFileSync('extracted_tokens.json', JSON.stringify(output, null, 2));
console.log('\n✅ Extracted tokens saved to extracted_tokens.json');
