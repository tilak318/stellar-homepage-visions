import React, { useEffect, useState } from 'react';

const AnimatedGradientBackground = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `linear-gradient(${angle}deg, #a855f7 0%, #ffffff 50%, #a855f7 100%)`,
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
      }}
    />
  );
};

export default AnimatedGradientBackground; 