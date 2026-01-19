import { useEffect } from "react";

function NoCarb() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>No Carbs</h1>
      <p style={{ color: "#888", marginBottom: "1.5rem" }}>Eladheart on a diet</p>
      <div className="no-carb-gif" style={{ width: "340px", maxWidth: "100%", margin: "0 auto" }}>
        <div
          className="tenor-gif-embed"
          data-postid="4652349"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="100%"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default NoCarb;
