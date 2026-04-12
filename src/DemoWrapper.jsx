import { useState, useRef } from "react";
import { Calendar, Flame, Heart, Users, CreditCard, Star, Bell, Shield, Sparkles, MapPin, Zap, Award, ChevronRight } from "lucide-react";
import App from "./App";
import { demoConfig as C } from "./demo.config";

const icons = { Calendar, Flame, Heart, Users, CreditCard, Star, Bell, Shield, Sparkles, MapPin, Zap, Award };

export default function DemoWrapper() {
  const contentRef = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      overflow: "hidden",
      background: isAdmin ? "#120e0a" : "#f4f1ec",
      fontFamily: "'DM Sans', system-ui, sans-serif",
    }}>

      {/* LEFT SIDEBAR - hidden in admin mode */}
      {!isAdmin && (
        <aside style={{ width: 320, flexShrink: 0, borderRight: "1px solid #e0dbd2", display: "flex", flexDirection: "column", height: "100vh" }}
          className="demo-sidebar-left">
          <div style={{ padding: "28px 24px 20px", borderBottom: "1px solid #e0dbd2" }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: C.accentColor, marginBottom: 14 }}>Prototype Demo</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.accentColor, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: `'${C.displayFont}', serif`, fontSize: 16, fontWeight: 700 }}>{C.logoMark}</div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, fontFamily: `'${C.displayFont}', serif`, color: "#1a1a1a" }}>{C.name.toUpperCase()}</h2>
                <p style={{ fontSize: 13, color: "#888", margin: 0 }}>{C.subtitle}</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px 32px" }}>
            {C.features.map((f, i) => {
              const Icon = icons[f.icon] || Star;
              return (
                <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: i < C.features.length - 1 ? "1px solid #ece8e0" : "none" }}>
                  <Icon size={18} color={C.accentColor} style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, margin: 0, color: "#1a1a1a" }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: "#777", margin: "2px 0 0", lineHeight: 1.4 }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ padding: "14px 24px", borderTop: "1px solid #e0dbd2", fontSize: 12, color: "#aaa" }}>
            BUILT BY LUMI &mdash; LUMICLASS.APP
          </div>
        </aside>
      )}

      {/* CENTER - Phone frame in consumer mode, full browser in admin mode */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 0,
      }}>
        <div style={{
          width: isAdmin ? "100%" : 390,
          height: isAdmin ? "100%" : "min(92vh, 844px)",
          borderRadius: isAdmin ? 0 : 32,
          overflow: "hidden",
          boxShadow: isAdmin ? "none" : "0 20px 80px rgba(0,0,0,.18), 0 2px 12px rgba(0,0,0,.08)",
          background: isAdmin ? "transparent" : "#fff",
          position: "relative",
          transform: "translateZ(0)",
          display: "flex",
          flexDirection: "column",
        }}>
          <div ref={contentRef} style={{ flex: 1, overflow: "auto" }}>
            <App onAdminChange={setIsAdmin} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR - hidden in admin mode */}
      {!isAdmin && (
        <aside style={{ width: 340, flexShrink: 0, borderLeft: "1px solid #e0dbd2", display: "flex", flexDirection: "column", height: "100vh" }}
          className="demo-sidebar-right">
          <div style={{ flex: 1, overflowY: "auto", padding: "28px 24px 32px" }}>
            {C.salesCards.map((card, i) => {
              const Icon = icons[card.icon] || Star;
              return (
                <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "20px 18px", marginBottom: 14, border: "1px solid #e8e4dc" }}>
                  <Icon size={24} color={C.accentColor} style={{ marginBottom: 10 }} />
                  <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 6px", fontFamily: `'${C.displayFont}', serif`, color: "#1a1a1a" }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: "#666", margin: 0, lineHeight: 1.5 }}>{card.desc}</p>
                </div>
              );
            })}

            {/* CTA */}
            <div style={{ background: C.accentColor, borderRadius: 14, padding: "22px 20px", color: "#fff", marginTop: 8 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px", fontFamily: `'${C.displayFont}', serif` }}>Ready to Launch?</h3>
              <p style={{ fontSize: 14, margin: "0 0 16px", opacity: 0.9, lineHeight: 1.5 }}>Get a custom loyalty app built for your studio in under a week.</p>
              <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 8, border: "2px solid rgba(255,255,255,.4)", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                Get Started <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </aside>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .demo-sidebar-left, .demo-sidebar-right { display: none !important; }
        }
        *::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
