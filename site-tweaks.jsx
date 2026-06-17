// site-tweaks.jsx — Tweaks panel for Kim Inouye consulting site.
// All controls map to data-* attributes on <html>; CSS in the page does the rest.

function TweakApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-palette", t.palette || "cocoa");
    root.setAttribute("data-bullets", t.bullets === false ? "off" : "on");
    root.setAttribute("data-portrait", t.portrait || "bw");
    root.setAttribute("data-svc", t.svc || "four");
    root.setAttribute("data-clients", t.clients || "strip");
  }, [t.palette, t.bullets, t.portrait, t.svc, t.clients]);

  const PALETTES = [
    { id: "cocoa", label: "Cocoa", sub: "Warm espresso", swatch: ["oklch(0.150 0.018 52)", "oklch(0.300 0.016 60)", "oklch(0.944 0.029 70)"] },
    { id: "linen", label: "Linen", sub: "Creamy paper", swatch: ["oklch(0.170 0.013 92)", "oklch(0.310 0.011 90)", "oklch(0.953 0.026 96)"] },
    { id: "stone", label: "Stone", sub: "Cool neutral", swatch: ["oklch(0.156 0.003 250)", "oklch(0.306 0.004 250)", "oklch(0.950 0.003 250)"] },
  ];

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette" />
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {PALETTES.map((p) => {
          const active = (t.palette || "cocoa") === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setTweak("palette", p.id)}
              style={{
                appearance: "none", display: "grid",
                gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 10,
                padding: "8px 10px", borderRadius: 8,
                border: active ? "1px solid rgba(41,38,27,.45)" : "1px solid rgba(41,38,27,.12)",
                background: active ? "rgba(41,38,27,.06)" : "transparent",
                cursor: "pointer", textAlign: "left", color: "#29261b",
                fontFamily: "inherit", fontSize: 11.5,
              }}
            >
              <span style={{ display: "inline-flex", width: 38, height: 22, borderRadius: 4, overflow: "hidden", border: "0.5px solid rgba(41,38,27,.2)" }}>
                <span style={{ flex: 1, background: p.swatch[0] }} />
                <span style={{ flex: 1, background: p.swatch[1] }} />
                <span style={{ flex: 1, background: p.swatch[2] }} />
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <b style={{ fontWeight: 600, fontSize: 12 }}>{p.label}</b>
                <span style={{ opacity: 0.55, fontSize: 10.5 }}>{p.sub}</span>
              </span>
              <span style={{ fontSize: 11, color: active ? "#29261b" : "rgba(41,38,27,.3)" }}>{active ? "●" : "○"}</span>
            </button>
          );
        })}
      </div>

      <TweakSection label="Services" />
      <TweakRadio
        label="Layout"
        value={t.svc || "four"}
        options={[{ label: "Rows", value: "rows" }, { label: "Stack", value: "stack" }, { label: "4-col", value: "four" }]}
        onChange={(v) => setTweak("svc", v)}
      />
      <TweakToggle
        label="Detail bullets"
        value={t.bullets !== false}
        onChange={(v) => setTweak("bullets", v)}
      />

      <TweakSection label="Portrait" />
      <TweakRadio
        label="Treatment"
        value={t.portrait || "bw"}
        options={[{ label: "Black & white", value: "bw" }, { label: "Soft", value: "soft" }]}
        onChange={(v) => setTweak("portrait", v)}
      />
      <TweakSection label="Clients" />
      <TweakRadio
        label="Layout"
        value={t.clients || "strip"}
        options={[{ label: "Strip", value: "strip" }, { label: "Two-col", value: "twocol" }, { label: "Headline", value: "headline" }]}
        onChange={(v) => setTweak("clients", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-mount")).render(<TweakApp />);
