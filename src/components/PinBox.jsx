'use client';

import React from "react";
import Image from "next/image";
import pinIcon from "../../public/assets/images/section2/pin.png";

export default function PinBox({
  title,
  bgImage,           // string: "/assets/images/section2/xxx.png" OR "xxx.png"
  bgColor = "transparent",
  pinSrc,            // optional: custom pin icon src
  children,
  width = 400,
  height = 360,
  className,
  style,
}) {
  const resolvedBgImage = bgImage
    ? (bgImage.startsWith("/") ? bgImage : `/assets/images/section2/${bgImage}`)
    : null;

  const boxStyle = {
    position: "relative",
    width: width,
    height,
    borderRadius: 12,
    // border: "1px solid rgba(0,0,0,0.08)",
    // boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
    backgroundColor: bgColor,
    backgroundImage: resolvedBgImage ? `url("${resolvedBgImage}")` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    paddingTop: title ? 56 : 24,
    ...style,
  };

  return (
    <div className={className} style={{ position: "absolute" }}>
      {/* Pin icon at top border center */}
      <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
          <Image src={pinIcon} alt="Pin" width={24} height={28} />
      </div>
      {/* Content box */}
      <div style={boxStyle}>

        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: 1,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
