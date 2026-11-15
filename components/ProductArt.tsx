import { useId, type ReactNode } from "react";
import type { ArtKind } from "@/lib/products";

/* ------------------------------------------------------------------ */
/*  Hand-built SVG product illustrations (vector = tiny + razor sharp) */
/*  Replace any of them with a real photo by adding                    */
/*  /public/products/<slug>.webp — see README.                         */
/* ------------------------------------------------------------------ */

const themes: Record<ArtKind, { bg: [string, string]; blob: string; dark: string }> = {
  jaggery: { bg: ["#F7E7C6", "#E7C285"], blob: "#F9D88C", dark: "#7E4E10" },
  sugar: { bg: ["#F8EDD4", "#EBD2A0"], blob: "#FBE7B5", dark: "#8A5E22" },
  "jaggery-fruits": { bg: ["#F6E1BC", "#D9A650"], blob: "#F4C979", dark: "#6B3F0E" },
  barley: { bg: ["#E8EFD8", "#BDD0A2"], blob: "#D6E4BC", dark: "#3F5B2A" },
  corn: { bg: ["#FCF1C6", "#F1D073"], blob: "#FBE28A", dark: "#8A6410" },
  sattu: { bg: ["#F2E3CA", "#D3A878"], blob: "#E9C89A", dark: "#5C3C22" },
  moringa: { bg: ["#E3F0DC", "#9CC79B"], blob: "#BFE0B5", dark: "#1F4A2E" },
  mustard: { bg: ["#FCF2BD", "#EFD05E"], blob: "#FBE27A", dark: "#7A5A06" },
  sesame: { bg: ["#F4E8D2", "#D4B27C"], blob: "#EBD3A6", dark: "#5C3C22" },
};

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Sparkle({ x, y, s = 8, d = 0 }: { x: number; y: number; s?: number; d?: number }) {
  return (
    <path
      className="art-twinkle"
      style={{ animationDelay: `${d}s` }}
      transform={`translate(${x} ${y})`}
      d={`M0 ${-s} Q0 0 ${s} 0 Q0 0 0 ${s} Q0 0 ${-s} 0 Q0 0 0 ${-s}Z`}
      fill="#fff"
      opacity="0.9"
    />
  );
}

function Cube({ x, y, s, r, a, b }: { x: number; y: number; s: number; r: number; a: string; b: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <rect x={-s / 2} y={-s * 0.4} width={s} height={s * 0.8} rx={s * 0.2} fill={a} />
      <rect x={-s / 2} y={s * 0.05} width={s} height={s * 0.35} rx={s * 0.18} fill={b} opacity="0.55" />
      <rect x={-s * 0.38} y={-s * 0.3} width={s * 0.42} height={s * 0.14} rx={s * 0.07} fill="#fff" opacity="0.32" />
    </g>
  );
}

function Seeds({ n, seed, box, fill, rx = 3, ry = 1.8, opacity = 1 }: {
  n: number; seed: number; box: [number, number, number, number]; fill: string; rx?: number; ry?: number; opacity?: number;
}) {
  const r = rng(seed);
  return (
    <>
      {Array.from({ length: n }).map((_, i) => {
        const cx = Math.round((box[0] + r() * box[2]) * 10) / 10;
        const cy = Math.round((box[1] + r() * box[3]) * 10) / 10;
        const rot = Math.round(r() * 180);
        return <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} transform={`rotate(${rot} ${cx} ${cy})`} fill={fill} opacity={opacity} />;
      })}
    </>
  );
}

function Ear({ x, y, len, rot, grain = "#D8B45A", awn = "#B8923A" }: { x: number; y: number; len: number; rot: number; grain?: string; awn?: string }) {
  const steps = 7;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <line x1="0" y1="0" x2="0" y2={-len} stroke="#8FA66A" strokeWidth="3" strokeLinecap="round" />
      {Array.from({ length: steps }).map((_, i) => {
        const yy = -len * 0.5 - i * (len * 0.085);
        return (
          <g key={i}>
            <ellipse cx="-6" cy={yy} rx="3.6" ry="8" transform={`rotate(-24 -6 ${yy})`} fill={grain} />
            <ellipse cx="6" cy={yy} rx="3.6" ry="8" transform={`rotate(24 6 ${yy})`} fill={grain} />
            <line x1="-8" y1={yy - 4} x2="-17" y2={yy - 26} stroke={awn} strokeWidth="1" opacity="0.8" />
            <line x1="8" y1={yy - 4} x2="17" y2={yy - 26} stroke={awn} strokeWidth="1" opacity="0.8" />
          </g>
        );
      })}
    </g>
  );
}

function Sprig({ x, y, rot, len = 90, leaf = "#4C9A5F", leaf2 = "#2F7A47" }: { x: number; y: number; rot: number; len?: number; leaf?: string; leaf2?: string }) {
  const n = 6;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d={`M0 0 Q6 ${-len / 2} 0 ${-len}`} stroke="#3F7A4A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {Array.from({ length: n }).map((_, i) => {
        const yy = -10 - i * ((len - 20) / n);
        const sc = 1 - i * 0.08;
        return (
          <g key={i}>
            <ellipse cx={-11 * sc} cy={yy} rx={9 * sc} ry={5.5 * sc} transform={`rotate(-25 ${-11 * sc} ${yy})`} fill={i % 2 ? leaf : leaf2} />
            <ellipse cx={11 * sc} cy={yy - 5} rx={9 * sc} ry={5.5 * sc} transform={`rotate(25 ${11 * sc} ${yy - 5})`} fill={i % 2 ? leaf2 : leaf} />
          </g>
        );
      })}
      <ellipse cx="0" cy={-len - 5} rx="6" ry="4.4" fill={leaf} />
    </g>
  );
}

function Flower({ x, y, s = 1, r = 0 }: { x: number; y: number; s?: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      {[0, 90, 180, 270].map((a) => (
        <ellipse key={a} cx="0" cy="-9" rx="6" ry="9" transform={`rotate(${a})`} fill="#F7C922" />
      ))}
      <circle r="4" fill="#B8860B" />
    </g>
  );
}

function Pouch({
  uid, body, seal, labelBg, ink, title, sub, children,
}: {
  uid: string; body: [string, string]; seal: string; labelBg: string; ink: string; title: string; sub: string; children?: ReactNode;
}) {
  return (
    <g className="art-main">
      <defs>
        <linearGradient id={`${uid}-pb`} x1="0" x2="1">
          <stop offset="0" stopColor={body[0]} />
          <stop offset="1" stopColor={body[1]} />
        </linearGradient>
        <linearGradient id={`${uid}-ph`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.38" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`${uid}-win`}>
          <rect x="130" y="182" width="140" height="66" rx="20" />
        </clipPath>
      </defs>
      <ellipse cx="200" cy="448" rx="108" ry="11" fill="#000" opacity="0.16" />
      <path d="M112 150 L288 150 C297 240 301 350 291 437 Q200 452 109 437 C99 350 103 240 112 150 Z" fill={`url(#${uid}-pb)`} />
      <path d="M112 150 L288 150 C297 240 301 350 291 437 Q200 452 109 437 C99 350 103 240 112 150 Z" fill="none" stroke="#000" strokeOpacity="0.1" />
      <rect x="112" y="150" width="176" height="18" fill={seal} opacity="0.9" />
      {Array.from({ length: 22 }).map((_, i) => (
        <line key={i} x1={118 + i * 8} y1="152" x2={118 + i * 8} y2="166" stroke="#000" strokeOpacity="0.12" />
      ))}
      <path d="M124 176 C122 260 124 350 130 430 L150 432 C142 350 140 260 142 178Z" fill={`url(#${uid}-ph)`} />
      {/* window */}
      <rect x="130" y="182" width="140" height="66" rx="20" fill="#fff" opacity="0.2" />
      <g clipPath={`url(#${uid}-win)`}>{children}</g>
      <rect x="130" y="182" width="140" height="66" rx="20" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" />
      {/* label */}
      <rect x="124" y="262" width="152" height="130" rx="16" fill={labelBg} />
      <rect x="130" y="268" width="140" height="118" rx="12" fill="none" stroke={ink} strokeOpacity="0.25" strokeDasharray="3 4" />
      <circle cx="200" cy="290" r="10" fill={ink} />
      <path d="M200 296 C192 292 193 283 200 280 C207 283 208 292 200 296Z" fill={labelBg} />
      <text x="200" y="314" textAnchor="middle" fontSize="9" letterSpacing="2.4" fontWeight="700" fill={ink} opacity="0.8">KHALIS KOTHI</text>
      <text x="200" y="344" textAnchor="middle" fontSize="27" fontWeight="700" fill={ink} className="font-display">{title}</text>
      <text x="200" y="364" textAnchor="middle" fontSize="11" letterSpacing="1.2" fill={ink} opacity="0.8">{sub}</text>
      <rect x="168" y="372" width="64" height="2" rx="1" fill={ink} opacity="0.35" />
    </g>
  );
}

function Bottle({
  uid, oil, cap, labelBg, ink, title, sub,
}: {
  uid: string; oil: [string, string]; cap: string; labelBg: string; ink: string; title: string; sub: string;
}) {
  const d = "M178 124 H222 V162 C222 192 262 198 262 244 V424 Q262 444 242 444 H158 Q138 444 138 424 V244 C138 198 178 192 178 162 Z";
  return (
    <g className="art-main">
      <defs>
        <linearGradient id={`${uid}-ol`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={oil[0]} />
          <stop offset="1" stopColor={oil[1]} />
        </linearGradient>
        <clipPath id={`${uid}-bt`}>
          <path d={d} />
        </clipPath>
      </defs>
      <ellipse cx="200" cy="450" rx="92" ry="10" fill="#000" opacity="0.16" />
      <path d={d} fill="#fff" opacity="0.35" />
      <g clipPath={`url(#${uid}-bt)`}>
        <rect x="130" y="176" width="140" height="280" fill={`url(#${uid}-ol)`} />
        <ellipse cx="200" cy="176" rx="30" ry="6" fill={oil[0]} />
        <rect x="150" y="190" width="14" height="240" rx="7" fill="#fff" opacity="0.4" />
        <rect x="244" y="260" width="6" height="170" rx="3" fill="#fff" opacity="0.18" />
      </g>
      <path d={d} fill="none" stroke="#fff" strokeOpacity="0.75" strokeWidth="2.5" />
      <rect x="172" y="96" width="56" height="32" rx="7" fill={cap} />
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1={178 + i * 5.6} y1="100" x2={178 + i * 5.6} y2="124" stroke="#000" strokeOpacity="0.18" />
      ))}
      <rect x="172" y="96" width="56" height="8" rx="4" fill="#fff" opacity="0.25" />
      <rect x="148" y="286" width="104" height="124" rx="12" fill={labelBg} />
      <rect x="153" y="291" width="94" height="114" rx="9" fill="none" stroke={ink} strokeOpacity="0.25" strokeDasharray="3 4" />
      <circle cx="200" cy="314" r="9" fill={ink} />
      <path d="M200 320 C193 316 194 308 200 305 C206 308 207 316 200 320Z" fill={labelBg} />
      <text x="200" y="338" textAnchor="middle" fontSize="8.5" letterSpacing="2.2" fontWeight="700" fill={ink} opacity="0.8">KHALIS KOTHI</text>
      <text x="200" y="366" textAnchor="middle" fontSize="24" fontWeight="700" fill={ink} className="font-display">{title}</text>
      <text x="200" y="384" textAnchor="middle" fontSize="10" letterSpacing="1" fill={ink} opacity="0.8">{sub}</text>
    </g>
  );
}

function Jar({ uid }: { uid: string }) {
  const r = rng(11);
  const items = Array.from({ length: 30 }).map((_, i) => {
    const kind = i % 5;
    return { kind, x: 146 + r() * 108, y: 192 + r() * 214, rot: Math.round(r() * 140 - 70), s: 20 + r() * 8 };
  });
  return (
    <g className="art-main">
      <defs>
        <clipPath id={`${uid}-jar`}>
          <rect x="128" y="166" width="144" height="272" rx="34" />
        </clipPath>
        <linearGradient id={`${uid}-glass`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.4" stopColor="#fff" stopOpacity="0.1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="446" rx="110" ry="11" fill="#000" opacity="0.16" />
      <rect x="128" y="166" width="144" height="272" rx="34" fill="#fff" opacity="0.3" />
      <g clipPath={`url(#${uid}-jar)`}>
        <rect x="128" y="166" width="144" height="272" fill="#8A5A20" opacity="0.35" />
        {items.map((it, i) => {
          if (it.kind === 0 || it.kind === 3) return <Cube key={i} x={it.x} y={it.y} s={it.s + 6} r={it.rot} a="#C98A24" b="#8E5A14" />;
          if (it.kind === 1) return <ellipse key={i} cx={it.x} cy={it.y} rx="10" ry="15" transform={`rotate(${it.rot} ${it.x} ${it.y})`} fill="#D9B27A" stroke="#A9803F" />;
          if (it.kind === 2) return <circle key={i} cx={it.x} cy={it.y} r="8" fill="#5B2D4F" />;
          return <ellipse key={i} cx={it.x} cy={it.y} rx="8" ry="11" transform={`rotate(${it.rot} ${it.x} ${it.y})`} fill="#8BB35A" />;
        })}
      </g>
      <rect x="128" y="166" width="144" height="272" rx="34" fill={`url(#${uid}-glass)`} />
      <rect x="128" y="166" width="144" height="272" rx="34" fill="none" stroke="#fff" strokeOpacity="0.8" strokeWidth="2.5" />
      <rect x="138" y="124" width="124" height="46" rx="10" fill="#4A2F1B" />
      <rect x="138" y="124" width="124" height="12" rx="6" fill="#fff" opacity="0.18" />
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={i} x1={148 + i * 8.5} y1="140" x2={148 + i * 8.5} y2="166" stroke="#000" strokeOpacity="0.2" />
      ))}
      <rect x="146" y="300" width="108" height="100" rx="12" fill="#FFF6E0" />
      <rect x="151" y="305" width="98" height="90" rx="9" fill="none" stroke="#6B3F0E" strokeOpacity="0.3" strokeDasharray="3 4" />
      <text x="200" y="326" textAnchor="middle" fontSize="8.5" letterSpacing="2.2" fontWeight="700" fill="#6B3F0E" opacity="0.85">KHALIS KOTHI</text>
      <text x="200" y="353" textAnchor="middle" fontSize="17" fontWeight="700" fill="#6B3F0E" className="font-display">Gur &amp; Mewa</text>
      <text x="200" y="372" textAnchor="middle" fontSize="10" letterSpacing="1" fill="#6B3F0E" opacity="0.85">WITH DRY FRUITS</text>
    </g>
  );
}

function Cob({ x, y, rot, id }: { x: number; y: number; rot: number; id: string }) {
  const cells: ReactNode[] = [];
  for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 6; col++) {
      cells.push(<rect key={`${row}-${col}`} x={-17 + col * 6 + (row % 2) * 2} y={-64 + row * 8.2} width="5" height="7" rx="2.2" fill={(row + col) % 3 ? "#F4C531" : "#E9A91C"} />);
    }
  }
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <ellipse cx="0" cy="0" rx="22" ry="66" fill="#E9A91C" />
      <clipPath id={id}><ellipse cx="0" cy="0" rx="22" ry="66" /></clipPath>
      <g clipPath={`url(#${id})`}>{cells}</g>
      <path d="M-26 70 C-30 20 -18 0 0 -4 C18 0 30 20 26 70 Z" fill="#6DA45B" />
      <path d="M-4 70 C-16 28 -4 6 6 -2 C22 12 24 40 20 70 Z" fill="#4F8A47" opacity="0.9" />
      <ellipse cx="-9" cy="-30" rx="3" ry="22" fill="#fff" opacity="0.25" />
    </g>
  );
}

function Backdrop({ kind, uid }: { kind: ArtKind; uid: string }) {
  const t = themes[kind];
  return (
    <>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={t.bg[0]} />
          <stop offset="1" stopColor={t.bg[1]} />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="0.5" cy="0.45" r="0.55">
          <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#${uid}-bg)`} />
      <circle cx="200" cy="270" r="190" fill={t.blob} opacity="0.55" />
      <circle cx="200" cy="270" r="190" fill={`url(#${uid}-glow)`} />
      <circle cx="200" cy="270" r="150" fill="none" stroke="#fff" strokeOpacity="0.5" strokeDasharray="2 9" strokeLinecap="round" strokeWidth="3" />
      <path d="M-10 470 Q200 420 410 470 V510 H-10Z" fill={t.dark} opacity="0.1" />
      <ellipse cx="200" cy="452" rx="165" ry="24" fill="#fff" opacity="0.35" />
      <Sparkle x={70} y={110} s={9} />
      <Sparkle x={338} y={150} s={7} d={1} />
      <Sparkle x={310} y={64} s={5} d={2} />
      <Sparkle x={52} y={300} s={6} d={0.6} />
    </>
  );
}

export default function ProductArt({ kind, label }: { kind: ArtKind; label: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const r = rng(7);

  let scene: ReactNode = null;
  switch (kind) {
    case "jaggery":
      scene = (
        <>
          <Pouch uid={uid} body={["#C79A62", "#8F6335"]} seal="#6E4A25" labelBg="#FBF0D8" ink="#5C3A14" title="Gur" sub="PURE JAGGERY">
            <rect x="120" y="176" width="160" height="80" fill="#6B4416" opacity="0.55" />
            <Cube x={150} y={222} s={34} r={-12} a="#D69A2B" b="#A86C16" />
            <Cube x={190} y={215} s={36} r={8} a="#C98A24" b="#8E5A14" />
            <Cube x={232} y={224} s={34} r={-6} a="#DDA33A" b="#A86C16" />
            <Cube x={262} y={210} s={26} r={18} a="#C98A24" b="#8E5A14" />
          </Pouch>
          <Cube x={86} y={440} s={52} r={-14} a="#D69A2B" b="#A86C16" />
          <Cube x={316} y={444} s={58} r={10} a="#C98A24" b="#8E5A14" />
          <Cube x={354} y={462} s={30} r={-22} a="#DDA33A" b="#A86C16" />
          <Cube x={52} y={466} s={28} r={20} a="#C98A24" b="#8E5A14" />
        </>
      );
      break;
    case "sugar":
      scene = (
        <>
          <Pouch uid={uid} body={["#F1E3C0", "#D9BD84"]} seal="#B28D4A" labelBg="#FFF8E8" ink="#7A4F12" title="Shakkar" sub="DESI SUGAR">
            <rect x="120" y="176" width="160" height="80" fill="#C99A47" />
            <Seeds n={160} seed={3} box={[126, 184, 150, 62]} fill="#E8C77C" rx={2.6} ry={2.6} />
            <Seeds n={90} seed={9} box={[126, 184, 150, 62]} fill="#A9742A" rx={2.2} ry={2.2} opacity={0.8} />
          </Pouch>
          <path d="M40 462 Q70 410 108 462Z" fill="#D8B268" />
          <Seeds n={40} seed={21} box={[50, 436, 50, 24]} fill="#F3DDA0" rx={2.2} ry={2.2} />
          <path d="M286 464 Q326 396 372 464Z" fill="#D8B268" />
          <Seeds n={60} seed={31} box={[300, 424, 60, 36]} fill="#F3DDA0" rx={2.4} ry={2.4} />
        </>
      );
      break;
    case "jaggery-fruits":
      scene = (
        <>
          <Jar uid={uid} />
          {[0, 1, 2, 3].map((i) => (
            <ellipse key={i} cx={64 + i * 14} cy={452 + (i % 2) * 8} rx="10" ry="15" transform={`rotate(${-30 + i * 22} ${64 + i * 14} 452)`} fill="#D9B27A" stroke="#A9803F" />
          ))}
          <Cube x={322} y={446} s={50} r={12} a="#C98A24" b="#8E5A14" />
          <circle cx="360" cy="468" r="9" fill="#5B2D4F" />
          <circle cx="344" cy="476" r="8" fill="#5B2D4F" />
          <ellipse cx="296" cy="470" rx="8" ry="11" transform="rotate(30 296 470)" fill="#8BB35A" />
        </>
      );
      break;
    case "barley":
      scene = (
        <>
          <Ear x={78} y={470} len={180} rot={-14} grain="#D9B45A" />
          <Ear x={102} y={474} len={150} rot={-4} grain="#E2C06B" />
          <Ear x={330} y={472} len={170} rot={13} grain="#D9B45A" />
          <Pouch uid={uid} body={["#E4E0B4", "#BFBE86"]} seal="#8E8F58" labelBg="#FBF8E6" ink="#3F5B2A" title="Jau Atta" sub="BARLEY FLOUR">
            <rect x="120" y="176" width="160" height="80" fill="#EFE6C8" />
            <Seeds n={110} seed={5} box={[126, 184, 150, 62]} fill="#fff" rx={3} ry={2} opacity={0.7} />
            <Seeds n={40} seed={15} box={[126, 184, 150, 62]} fill="#D9C89A" rx={3} ry={2} />
          </Pouch>
          <Ear x={352} y={474} len={140} rot={22} grain="#E2C06B" />
        </>
      );
      break;
    case "corn":
      scene = (
        <>
          <Pouch uid={uid} body={["#F6CF4A", "#E2A92A"]} seal="#B9811B" labelBg="#FFF8E0" ink="#7A4E06" title="Makai" sub="CORN FLOUR">
            <rect x="120" y="176" width="160" height="80" fill="#FBE18A" />
            <Seeds n={120} seed={8} box={[126, 184, 150, 62]} fill="#fff" rx={3} ry={2} opacity={0.6} />
            <Seeds n={60} seed={18} box={[126, 184, 150, 62]} fill="#EFC24A" rx={3} ry={2} />
          </Pouch>
          <Cob x={78} y={408} rot={-16} id={`${uid}-c1`} />
          <Cob x={332} y={412} rot={14} id={`${uid}-c2`} />
        </>
      );
      break;
    case "sattu":
      scene = (
        <>
          <Pouch uid={uid} body={["#B9865A", "#8A5C34"]} seal="#6A4426" labelBg="#FBEFD6" ink="#5C3C22" title="Sattu" sub="ROASTED GRAM FLOUR">
            <rect x="120" y="176" width="160" height="80" fill="#C99B62" />
            <Seeds n={130} seed={12} box={[126, 184, 150, 62]} fill="#E7C894" rx={3} ry={2.4} />
            <Seeds n={50} seed={22} box={[126, 184, 150, 62]} fill="#A8773F" rx={2.6} ry={2.2} />
          </Pouch>
          {Array.from({ length: 16 }).map((_, i) => {
            const left = i < 8;
            const cx = left ? 40 + r() * 70 : 292 + r() * 70;
            const cy = 430 + r() * 38;
            return <ellipse key={i} cx={cx} cy={cy} rx="9" ry="7.5" fill={i % 3 ? "#D9A85F" : "#C28C42"} stroke="#9A6A2C" strokeOpacity="0.5" />;
          })}
        </>
      );
      break;
    case "moringa":
      scene = (
        <>
          <Sprig x={72} y={468} rot={-12} len={150} />
          <Sprig x={100} y={470} rot={6} len={110} leaf="#6AB074" leaf2="#3F8A52" />
          <Pouch uid={uid} body={["#3F7A53", "#245338"]} seal="#173A27" labelBg="#EEF6E4" ink="#1F4A2E" title="Moringa" sub="LEAF POWDER">
            <rect x="120" y="176" width="160" height="80" fill="#3E7F2E" />
            <Seeds n={150} seed={14} box={[126, 184, 150, 62]} fill="#7DBB4D" rx={2.8} ry={2.8} />
            <Seeds n={70} seed={24} box={[126, 184, 150, 62]} fill="#2B5A22" rx={2.4} ry={2.4} opacity={0.8} />
          </Pouch>
          <Sprig x={330} y={470} rot={14} len={140} />
          <Sprig x={354} y={472} rot={28} len={96} leaf="#6AB074" leaf2="#3F8A52" />
        </>
      );
      break;
    case "mustard":
      scene = (
        <>
          <Flower x={78} y={210} s={1.5} r={10} />
          <Flower x={330} y={250} s={1.3} r={-12} />
          <Flower x={322} y={140} s={1} r={20} />
          <Flower x={62} y={320} s={1} r={-20} />
          <Bottle uid={uid} oil={["#F1C62C", "#D99A0A"]} cap="#2F6B3A" labelBg="#FFF7D6" ink="#6B4A06" title="Sarson" sub="MUSTARD OIL" />
          <Seeds n={46} seed={41} box={[40, 436, 80, 34]} fill="#C9962A" rx={3.2} ry={3.2} />
          <Seeds n={46} seed={51} box={[286, 436, 80, 34]} fill="#C9962A" rx={3.2} ry={3.2} />
          <Flower x={338} y={442} s={0.9} r={8} />
        </>
      );
      break;
    case "sesame":
      scene = (
        <>
          <Bottle uid={uid} oil={["#D99A2B", "#8E5410"]} cap="#4A2F1B" labelBg="#FBEFD6" ink="#5C3A14" title="Til" sub="SESAME OIL" />
          <Seeds n={90} seed={61} box={[36, 428, 90, 42]} fill="#FFF6E2" rx={4.4} ry={2.4} />
          <Seeds n={90} seed={71} box={[282, 428, 90, 42]} fill="#FFF6E2" rx={4.4} ry={2.4} />
          <Seeds n={22} seed={81} box={[40, 432, 80, 36]} fill="#2B1A0C" rx={3.4} ry={1.9} opacity={0.85} />
        </>
      );
      break;
  }

  return (
    <svg
      viewBox="24 56 352 440"
      role="img"
      aria-label={label}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <Backdrop kind={kind} uid={uid} />
      {scene}
    </svg>
  );
}
