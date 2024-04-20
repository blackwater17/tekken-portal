import React, { useEffect, useRef } from 'react';

const Hexagon = ({ stats }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Define hexagon dimensions and center position
    const hexSize = width * 0.4;
    const centerX = width / 2;
    const centerY = height / 2;

    // Draw default hexagon
    ctx.beginPath();
    ctx.moveTo(centerX + hexSize * Math.cos(0), centerY + hexSize * Math.sin(0));
    for (let i = 1; i <= 6; i++) {
      const angle = (i * Math.PI) / 3;
      const x = centerX + hexSize * Math.cos(angle);
      const y = centerY + hexSize * Math.sin(angle);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = '#00f';
    ctx.fill();

    // Draw custom hexagon with adjusted corners
    ctx.beginPath();
    ctx.moveTo(centerX + hexSize * Math.cos(0), centerY + hexSize * Math.sin(0));
    const statKeys = Object.keys(stats);
    const numStats = statKeys.length;
    const statAngle = (2 * Math.PI) / numStats;
    const statRadius = hexSize * 0.8;
    for (let i = 0; i < numStats; i++) {
      const statValue = stats[statKeys[i]];
      const normalizedStatValue = statValue / 100;
      const angle = i * statAngle - Math.PI / 2;
      const x = centerX + statRadius * normalizedStatValue * Math.cos(angle);
      const y = centerY + statRadius * normalizedStatValue * Math.sin(angle);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f00');
    gradient.addColorStop(1, '#ff0');
    ctx.fillStyle = gradient;
    ctx.fill();
  }, [stats]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default Hexagon;
