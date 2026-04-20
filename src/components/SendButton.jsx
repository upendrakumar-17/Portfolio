import { useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MdSend } from "react-icons/md";

gsap.registerPlugin(MotionPathPlugin);

export default function SendButton() {
  const iconRef = useRef(null);

  const handleClick = () => {
    gsap.fromTo(
      iconRef.current,
      {
        opacity: 1,
      },
      {
        duration: 1,
        ease: "power2.inOut",
        motionPath: {
          path: "#motionPath",
          align: "#motionPath",
          alignOrigin: [0.5, 0.5],
        },
      }
    );
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Hidden SVG path */}
      <svg width="300" height="200" style={{ position: "absolute" }}>
        <path
          id="motionPath"
          d="M20,150 C80,20 180,20 260,150 S340,280 400,150 S480,20 560,150 "
          fill="none"
          stroke="transparent"
        />
      </svg>

      <button
        onClick={handleClick}
        style={{
          position: "relative",
          padding: "15px 30px",
          fontSize: "16px",
          overflow: "visible",
        }}
      >
        Send

        <MdSend
          ref={iconRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translate(-50%, -50%)",
          }}
        />
      </button>
    </div>
  );
}