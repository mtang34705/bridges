'use client';

import { useEffect, useRef } from 'react';
import data from '../data/weight.json';

const Weight = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const draw = () => {
            const { width, height } = canvas.getBoundingClientRect();
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            const drawingWidth = Math.max(1, Math.floor(width));
            const drawingHeight = Math.max(1, Math.floor(height));

            canvas.width = Math.floor(drawingWidth * pixelRatio);
            canvas.height = Math.floor(drawingHeight * pixelRatio);
            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            ctx.clearRect(0, 0, drawingWidth, drawingHeight);

            if (data.length === 0) return;

            const weights = data.map((item) => item.weight).filter(Number.isFinite);
            const maxY = Math.max(...weights, 0);
            if (maxY === 0) return;

            const barWidth = drawingWidth / data.length;

            data.forEach((item, index) => {
                if (!Number.isFinite(item.weight)) return;
                const barHeight = (item.weight / maxY) * drawingHeight;
                ctx.fillStyle = index % 2 === 0 ? 'green' : 'red';
                ctx.fillRect(barWidth * index, drawingHeight - barHeight, barWidth, barHeight);
            });
        };

        draw();
        const resizeObserver = new ResizeObserver(draw);
        resizeObserver.observe(canvas);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-label="Weight measurements by date"
            style={{ width: '80vw', height: '80vh', border: '1px solid #ccc', boxSizing: 'border-box', display: 'block', margin: '10vh auto' }}
        />
    );
};

export default Weight;