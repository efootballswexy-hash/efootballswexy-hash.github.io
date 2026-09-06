// Blueprint-style inline SVG illustrations (no external image dependency).
// File ini HANYA berisi data (string), tanpa "use client", supaya aman
// diimpor dari Server Component manapun.

export const HERO_ART = `
<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gsky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0F2C48"/>
      <stop offset="1" stop-color="#081826"/>
    </linearGradient>
  </defs>
  <rect width="480" height="480" fill="url(#gsky)"/>
  <g stroke="#2E85EC" stroke-width="1" opacity="0.35">
    <line x1="0" y1="120" x2="480" y2="120"/>
    <line x1="0" y1="240" x2="480" y2="240"/>
    <line x1="0" y1="360" x2="480" y2="360"/>
    <line x1="120" y1="0" x2="120" y2="480"/>
    <line x1="240" y1="0" x2="240" y2="480"/>
    <line x1="360" y1="0" x2="360" y2="480"/>
  </g>
  <g stroke="#FF7F33" stroke-width="2" fill="none">
    <rect x="90" y="150" width="70" height="180" />
    <path d="M90 150 L125 110 L160 150" />
    <line x1="90" y1="190" x2="160" y2="190"/>
    <line x1="90" y1="230" x2="160" y2="230"/>
    <line x1="90" y1="270" x2="160" y2="270"/>
  </g>
  <g stroke="#2E85EC" stroke-width="2" fill="none">
    <rect x="180" y="180" width="55" height="150" />
    <path d="M180 180 L207 145 L235 180" />
  </g>
  <g stroke="#8CA9C2" stroke-width="2" fill="none">
    <line x1="235" y1="300" x2="330" y2="230"/>
    <line x1="235" y1="316" x2="330" y2="246"/>
    <line x1="245" y1="308" x2="245" y2="292"/>
    <line x1="280" y1="284" x2="280" y2="268"/>
    <line x1="315" y1="260" x2="315" y2="244"/>
  </g>
  <g stroke="#FF7F33" stroke-width="2" fill="none">
    <ellipse cx="350" cy="220" rx="34" ry="20"/>
    <line x1="316" y1="220" x2="316" y2="300"/>
    <line x1="384" y1="220" x2="384" y2="300"/>
    <line x1="316" y1="300" x2="384" y2="300"/>
  </g>
  <g stroke="#8CA9C2" stroke-width="2" fill="none">
    <rect x="330" y="330" width="70" height="46"/>
    <line x1="345" y1="330" x2="345" y2="376"/>
    <line x1="360" y1="330" x2="360" y2="376"/>
    <line x1="375" y1="330" x2="375" y2="376"/>
  </g>
  <line x1="40" y1="380" x2="440" y2="380" stroke="#2E85EC" stroke-width="1.5" opacity="0.6"/>
  <g stroke="#FF7F33" stroke-width="1" opacity="0.8">
    <line x1="40" y1="374" x2="40" y2="386"/>
    <line x1="440" y1="374" x2="440" y2="386"/>
  </g>
  <text x="220" y="410" fill="#8CA9C2" font-family="JetBrains Mono, monospace" font-size="11" letter-spacing="1">HZS-SERIES &middot; CONCRETE BATCHING UNIT</text>
</svg>
`;

function wrap(inner, label) {
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#0A2036"/>
  <g stroke="#163C5C" stroke-width="1">
    <line x1="0" y1="75" x2="400" y2="75"/>
    <line x1="0" y1="150" x2="400" y2="150"/>
    <line x1="0" y1="225" x2="400" y2="225"/>
    <line x1="100" y1="0" x2="100" y2="300"/>
    <line x1="200" y1="0" x2="200" y2="300"/>
    <line x1="300" y1="0" x2="300" y2="300"/>
  </g>
  ${inner}
  <line x1="20" y1="255" x2="380" y2="255" stroke="#2E85EC" stroke-width="1.2" opacity="0.6"/>
  <text x="200" y="278" fill="#7C93A8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle" letter-spacing="1.5">${label}</text>
</svg>`;
}

export const WET_MIX_BP = wrap(`
  <g stroke="#FF7F33" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <rect x="95" y="130" width="55" height="95"/>
    <path d="M95 130 L122 95 L150 130"/>
    <line x1="95" y1="160" x2="150" y2="160"/>
    <line x1="95" y1="190" x2="150" y2="190"/>
    <ellipse cx="235" cy="178" rx="40" ry="22"/>
    <line x1="195" y1="178" x2="195" y2="228"/>
    <line x1="275" y1="178" x2="275" y2="228"/>
    <line x1="195" y1="228" x2="275" y2="228"/>
    <path d="M175 138 q10 -14 20 0" stroke-width="1.6"/>
    <line x1="185" y1="138" x2="185" y2="158"/>
  </g>
`, "WET MIX BATCHING PLANT");

export const DRY_MIX_BP = wrap(`
  <g stroke="#2E85EC" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <rect x="90" y="130" width="55" height="95"/>
    <path d="M90 130 L117 95 L145 130"/>
    <line x1="150" y1="165" x2="220" y2="140"/>
    <line x1="150" y1="180" x2="220" y2="155"/>
    <rect x="225" y="150" width="70" height="35" rx="4"/>
    <ellipse cx="310" cy="167" rx="18" ry="18"/>
    <circle cx="245" cy="230" r="10"/><circle cx="285" cy="230" r="10"/>
  </g>
`, "DRY MIX BATCHING PLANT");

export const MOBILE_BP = wrap(`
  <g stroke="#2E85EC" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <rect x="110" y="140" width="60" height="90"/>
    <path d="M110 140 L140 105 L170 140"/>
    <line x1="175" y1="190" x2="240" y2="160"/>
    <line x1="175" y1="205" x2="240" y2="175"/>
    <ellipse cx="270" cy="150" rx="26" ry="15"/>
    <rect x="255" y="220" width="70" height="10"/>
    <circle cx="265" cy="240" r="8"/><circle cx="315" cy="240" r="8"/>
  </g>
`, "MOBILE BATCHING PLANT");

export const ICONS = {
  "Wet Mix Batching Plant": WET_MIX_BP,
  "Dry Mix Batching Plant": DRY_MIX_BP,
  "Mobile Batching Plant": MOBILE_BP,
};