import React, { useRef, useEffect } from "react";

const Thread = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const lines = 40; // number of threads
    let time = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < lines; i++) {
        const offset = i * 8;

        ctx.beginPath();

        for (let x = 0; x < width; x += 2) {
          const wave1 = Math.sin((x * 0.01) + time + i * 0.15);
          const wave2 = Math.sin((x * 0.02) - time * 0.7);

          const y =
            height / 2 +
            wave1 * 80 +   // main curve
            wave2 * 40 +   // secondary curve
            offset - lines * 4;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // glow effect
        ctx.strokeStyle = `rgba(255,255,255,${0.05 + i / lines})`;
        ctx.lineWidth = 1.2;

        ctx.shadowBlur = 8;
        ctx.shadowColor = "white";

        ctx.stroke();
      }

      time += 0.02;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
        background: "black",
      }}
    />
  );
};

export default Thread;