'use client';

import React, { useEffect, useRef, useState } from 'react'
import data from '../data/weight.json'

const Weight = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvasSize, setCanvasSize] = useState({ width: 100, height: 100 });

    let maxY = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].weight > maxY) {
            maxY = data[i].weight
        }
    }
    const maxX = data.length

    useEffect(() => {
        const updateCanvasSize = () => {
            const width = window.innerWidth * 0.8;
            const height = window.innerHeight * 0.8;
            setCanvasSize({ width, height });
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        return () => window.removeEventListener('resize', updateCanvasSize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = canvasSize.width;
        canvas.height = canvasSize.height;

        const barWidth = canvas.width / maxX
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let fillStyle = 'green'
        ctx.fillStyle = fillStyle
        let barHeight = 0
        for (let i = 0; i < maxX; i++) {
            fillStyle = fillStyle === 'green' ? 'red' : 'green'
            ctx.fillStyle = fillStyle
            barHeight = data[i].weight * canvas.height / maxY
            ctx.fillRect(barWidth * i, canvas.height - barHeight, barWidth, barHeight);
        }
    }, [canvasSize, maxX, maxY]);

    return (
        <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            style={{ width: '80vw', height: '80vh', border: '1px solid #ccc', display: 'block', margin: '10vw' }}
        />
    );
}

export default Weight