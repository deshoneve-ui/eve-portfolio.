"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  left: {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  },
  right: {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  },
};

export interface SidebarPanelProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
  width?: string | number;
  className?: string;
  overlayClassName?: string;
}

export function SidebarPanel({
  open,
  onClose,
  children,
  side = "left",
  width = "min(320px, 85vw)",
  className = "",
  overlayClassName = "",
}: SidebarPanelProps) {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const panelWidth = typeof width === "number" ? `${width}px` : width;
  const variants = panelVariants[side];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            role="presentation"
            aria-hidden
            className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm ${overlayClassName}`}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Sidebar panel"
            className={`fixed top-0 z-[101] h-full bg-white shadow-xl dark:bg-[#0b0b0c] ${side === "left" ? "left-0" : "right-0"} ${className}`}
            style={{
              width: panelWidth,
              maxWidth: "100%",
            }}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
