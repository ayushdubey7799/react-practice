import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    let inactivityTimer;

    const handleMouseMove = (event) => {
      const cursorX = event.clientX;
      const cursorY = event.clientY;
      setCursorPosition({ x: cursorX, y: cursorY });
      
      // Clear the previous timer and set a new one
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setInactive(true);
        logCursorPosition();
      }, 5000);
    };

    const logCursorPosition = () => {
      if (inactive) {
        console.log(`Cursor X: ${cursorPosition.x}, Y: ${cursorPosition.y}`);
        setInactive(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(inactivityTimer);
    };
  }, [cursorPosition, inactive]);

  return (
    <div>
      <p>Cursor Position:</p>
      <p>X: {cursorPosition.x}</p>
      <p>Y: {cursorPosition.y}</p>
    </div>
  );
};

export default Cursor;
