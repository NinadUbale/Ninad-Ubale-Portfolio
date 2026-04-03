

import { useEffect, useRef, useState } from "react";
import { useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

const FRAME_COUNT = 120; // 000 to 119

export default function ScrollyCanvas({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format: frame_000_delay-0.066s.png
      const frameString = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameString}_delay-0.066s.png`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // All images loaded
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Set initial frame once loaded
  useEffect(() => {
    if (images.length > 0 && images[0]) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = images[0];
      img.onload = () => {
        renderImageToCanvas(ctx, canvas, img);
      };
      // In case the image is already cached and onload didn't fire here
      if (img.complete) {
        renderImageToCanvas(ctx, canvas, img);
      }
    }
  }, [images]);

  useMotionValueEvent(currentIndex, "change", (latestVal) => {
    const index = Math.round(latestVal);
    if (!images[index]) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    renderImageToCanvas(ctx, canvas, images[index]);
  });

  const renderImageToCanvas = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    img: HTMLImageElement
  ) => {
    // Ensure canvas dimensions match its display size exactly to prevent blurriness
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth, renderHeight, x, y;

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas
      renderHeight = canvas.height;
      renderWidth = img.width * (renderHeight / img.height);
      x = (canvas.width - renderWidth) / 2;
      y = 0;
    } else {
      // Image is taller than canvas
      renderWidth = canvas.width;
      renderHeight = img.height * (renderWidth / img.width);
      x = 0;
      y = (canvas.height - renderHeight) / 2;
    }

    // A subtle dark gradient overlay can be added over the image sequence later
    // but the clear canvas fill rect is enough for clearing previous frames
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
  };

  return (
    <div className="sticky top-0 h-screen w-full bg-[#121212] overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
      {/* Optional subtle overlay to blend edges into #121212 better */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </div>
  );
}
