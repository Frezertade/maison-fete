import { ImageResponse } from "next/og";

/** LD monogram rendered to PNG (used for apple-touch-icon and /favicon.ico). */
export function monogramImage(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#231814",
          color: "#decca6",
          fontSize: Math.round(size * 0.46),
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          letterSpacing: -2,
        }}
      >
        LD
      </div>
    ),
    { width: size, height: size },
  );
}
