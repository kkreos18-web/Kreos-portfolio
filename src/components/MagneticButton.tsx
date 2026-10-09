"use client";

import { useRef } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

export default function MagneticButton({
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left - r.width / 2;
    const my = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${mx * 0.28}px, ${my * 0.35}px)`;
  }
  function handleLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  const base =
    "inline-flex items-center justify-center py-[15px] px-[30px] text-[13px] tracking-wider uppercase rounded-[2px] transition-[background,box-shadow,border-color,color] duration-500 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-maroon text-ivory hover:bg-maroon-bright hover:shadow-glow"
      : "border border-line text-ivory hover:border-maroon-bright hover:text-maroon-bright";

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
