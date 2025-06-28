import React, { useEffect, useRef } from "react";

export default function GlassCursor({ size = 40 }) {
  const glassRef = useRef(null);

  useEffect(() => {
    const glass = glassRef.current;

    // Hide the default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      glass.style.left = `${e.clientX - size / 2}px`;
      glass.style.top = `${e.clientY - size / 2}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up on unmount
    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return (
    <div
      ref={glassRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        background: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(8px) contrast(1.2) brightness(1.05) saturate(1.1)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        transition: "background 0.2s",
        userSelect: "none",
      }}
    />
  );
}