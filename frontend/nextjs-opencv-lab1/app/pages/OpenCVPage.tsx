import React, { useEffect, useRef, useState } from 'react';
import cv, { Mat } from 'opencv.js';

const OpenCVPage = () => {
  const canvasRefBefore = useRef<HTMLCanvasElement>(null);
  const canvasRefAfter = useRef<HTMLCanvasElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadOpenCv = async () => {
      const script = document.createElement('script');
      script.src = '/opencv/opencv.js';
      script.async = true;
      script.onload = () => {
        const cv = (window as any).cv;
        handleImageProcessing(cv);
      };
      document.body.appendChild(script);
    };

    loadOpenCv();
  }, []);

  const handleImageProcessing = async () => {
    console.log(cv);
    if (!selectedImage || !cv) {
      console.error('OpenCV.js is not loaded or selectedImage is not available');
      return;
    }
  
    const imageElement = new Image();
    imageElement.src = selectedImage;
    await imageElement.decode();
  
    const canvasBefore = canvasRefBefore.current;
    const canvasAfter = canvasRefAfter.current;
    const contextBefore = canvasBefore.getContext('2d');
    const contextAfter = canvasAfter.getContext('2d');
  
    // 清空畫布
    contextBefore.clearRect(0, 0, canvasBefore.width, canvasBefore.height);
    contextAfter.clearRect(0, 0, canvasAfter.width, canvasAfter.height);
  
    // 調整畫布尺寸為與原始圖片相同
    canvasBefore.width = imageElement.width;
    canvasBefore.height = imageElement.height;
    canvasAfter.width = imageElement.width;
    canvasAfter.height = imageElement.height;
  
    // 在左邊的畫布上繪製原始圖片
    contextBefore.drawImage(imageElement, 0, 0, canvasBefore.width, canvasBefore.height);
  
    const image = cv.imread(canvasBefore);
  
    cv.cvtColor(image, image, cv.COLOR_RGBA2GRAY);
  
    // 魔術棒的參數設定
    const threshold1 = 30;
    const threshold2 = 150;
    const apertureSize = 3;
    const l2gradient = true;
  
    // 使用魔術棒檢測邊緣
    const edges = new cv.Mat();
    cv.Canny(image, edges, threshold1, threshold2, apertureSize, l2gradient);
  
    // 在右邊的畫布上繪製邊緣圖片
    cv.imshow(canvasAfter, edges);
  
    image.delete();
    edges.delete();
  };
  

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRefBefore.current;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setSelectedImage(img.src);
      };
      img.src = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
<div className="container mx-auto px-4 py-8">
  <h1 className="text-2xl font-bold mb-4">OpenCV 頁面</h1>
  <button
    onClick={handleImageProcessing}
    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
  >
    處理影像
  </button>
  <div className="flex mt-8">
    <div className="w-1/2 border border-gray-300 rounded-lg overflow-hidden">
      <canvas className="w-full" ref={canvasRefBefore} />
    </div>
    <div className="w-1/2 ml-4 border border-gray-300 rounded-lg overflow-hidden">
      <canvas className="w-full" ref={canvasRefAfter} />
    </div>
  </div>
  <div className="h-40 bg-gray-200 flex items-center justify-center mt-8">
    <label className="bg-white px-4 py-2 rounded-lg shadow-lg cursor-pointer">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <p className="text-gray-500">Select an image</p>
    </label>
  </div>
</div>
  );
};

export default OpenCVPage;
