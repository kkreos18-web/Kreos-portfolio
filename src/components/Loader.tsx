"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function reveal() {
      setTimeout(() => setHidden(true), 500);
    }
    if (document.readyState === "complete") {
      reveal();
      return;
    }
    window.addEventListener("load", reveal);
    return () => window.removeEventListener("load", reveal);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[1000] bg-void flex items-center justify-center transition-opacity duration-700 ${
        hidden ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
      }`}
    >
      <div className="text-center">
        <div className="font-display text-xl tracking-tight">Kreos</div>
        <div className="w-[180px] h-px bg-line mt-5 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-maroon-bright animate-[loadBar_1.4s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
        </div>
      </div>
    </div>
  );
}
