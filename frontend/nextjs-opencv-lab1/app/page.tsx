"use client"
import Image from 'next/image'
import BlankPage from './pages/blank';
import ImageUploadPage from './pages/ImageUploadPage';
import OpenCVPage from './pages/OpenCVPage';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <ImageUploadPage></ImageUploadPage> */}
      <OpenCVPage></OpenCVPage>
      {/* 插入單頁測試 */}
      {/* <BlankPage /> */}
    </main>
  )
}
