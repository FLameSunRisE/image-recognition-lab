# OpenCV 魔術棒邊緣檢測(nextjs-opencv-lab1)

本專案使用 OpenCV 庫實現了魔術棒邊緣檢測的功能。以下是該功能的介紹。

![demo](./doc/img/demo.png)

## 功能

魔術棒邊緣檢測是一種基於圖像處理的技術，用於檢測圖像中的邊緣。它將圖像轉換為灰度圖，然後根據一組預定的參數進行邊緣檢測，並將檢測到的邊緣顯示在圖像上。

## 主要功能

- 讀取圖像：從文件中讀取圖像並顯示在畫布上。
- 灰度轉換：將彩色圖像轉換為灰度圖像，以便更好地進行邊緣檢測。
- 魔術棒邊緣檢測：使用魔術棒算法檢測圖像中的邊緣。
- 邊緣顯示：將檢測到的邊緣顯示在圖像上，以便進行視覺化分析和評估。

## 使用方法

- 選擇一張圖像：點擊文件選擇按鈕，選擇一張圖像文件。
- 按下開始按鈕：開始處理選定的圖像。
- 檢視結果：在畫布上顯示原始圖像和檢測到的邊緣。

## 參數設定

魔術棒邊緣檢測的效果和精確度受到一組參數的影響。可以通過調整這些參數來改變邊緣檢測的結果。

- 閥值 1：第一個閥值，用於邊緣檢測的高閾值。
- 閥值 2：第二個閥值，用於邊緣檢測的低閾值。
- 適用大小：應用於邊緣檢測的鄰域大小。
- L2 梯度：是否使用 L2 梯度計算邊緣檢測。
  藉由調整這些參數，你可以適應不同的圖像和應用場景，以獲得最佳的邊緣檢測結果。

## 安裝與使用

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
