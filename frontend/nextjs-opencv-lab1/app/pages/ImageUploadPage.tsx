"use client"
import React, { useState } from 'react';

const ImageUploadPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>圖片上傳與顯示</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <div>
          <h2>選擇的圖片：</h2>
          <img src={selectedImage} alt="選擇的圖片" />
        </div>
      )}
    </div>
  );
};

export default ImageUploadPage;
