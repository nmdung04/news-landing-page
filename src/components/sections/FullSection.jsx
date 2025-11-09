'use client';

import React from "react";

export default function FullSection({ title, children }) {
  return (
    <section
      className="snap-section"
    >
      <div className="a4-sheet overflow-hidden">
        <header>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 0.5,
              color: "#111",
            }}
          >
            {title}
          </h2>
        </header>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}