// useCustomPointer.jsx
import { useEffect, useState } from "react";

function useCustomPointer(content) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const pointerStyle = {
    position: "fixed",
    left: position.x,
    top: position.y,
    transform: "translate(-50%, -50%)",
    cursor: "none",
    zIndex: 9999,
  };

  return (
    <div style={pointerStyle}>
      {typeof content === "string" ? <span>{content}</span> : content}
    </div>
  );
}

export default useCustomPointer;
