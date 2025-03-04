import { useEffect, useRef } from "react";


const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match the window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Handle window resizing
    window.addEventListener('resize', resizeCanvas);

    const drawGrid = () => {
      if (!ctx) return;
      const rootStyles = getComputedStyle(document.documentElement);
      const lineColor = rootStyles.getPropertyValue('--secondary-color').trim();

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 3;

      // TODO : ENTER CANVAS DRAWING HERE

      // Request the next frame
      requestAnimationFrame(drawGrid);
    };

    // Start the animation
    drawGrid();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
    }, []);
  
    return (
      <>
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </>
    );
}

export default Canvas;