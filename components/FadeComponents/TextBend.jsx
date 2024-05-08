import React, { useState, useEffect } from 'react';

export const TextBend = ({children}) => {
  const [matrix, setMatrix] = useState("matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)");

  useEffect(() => {
    const handle = () => {
      const y = window.Y;
      const matrix = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, ${y / 1000}, 1, 0, 0, 0, 0, 1)`;
      setMatrix(matrix);
    }
    window.addEventListener("", handle);
    return () => {
      window.removeEventListener("", handle);
    };
  }, []);

  return (
    <div style={{ transform: matrix }}>
      {children}
    </div>
  );
};
