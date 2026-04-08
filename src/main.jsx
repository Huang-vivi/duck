import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Member from './pages/Member.jsx';
import AboutAllAbout from './pages/AboutAllAbout.jsx';
import AboutContactUs from './pages/About-contact-us.jsx';
import AboutQa from './pages/About-qa.jsx';
import AboutPrivacy from './pages/about-privacy.jsx';
import News from './pages/News.jsx';
import AllNews from './pages/All-news.jsx';
import Product from './pages/Product.jsx';
import ProductGlass from './pages/ProductGlass.jsx';
import ProductStainless from './pages/ProductStainless.jsx';
import ProductCeramic from './pages/ProductCeramic.jsx';
import ProductWoody from './pages/ProductWoody.jsx';

// 這裡取代了原本寫在 HTML 底部的 ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/duck">
      <Routes>
        {/* 當網址是 / 時，顯示 App (首頁) 元件 */}
        <Route path="/" element={<App />} />
        {/* 當網址是 /member 時，顯示會員專區 */}
        <Route path="/member" element={<Member />} />
        {/* 當網址是 /about-allabout 時，顯示關於我們 */}
        <Route path="/about-allabout" element={<AboutAllAbout />} />
        <Route path="/about-contact-us" element={<AboutContactUs />} />
        <Route path="/about-qa" element={<AboutQa />} />
        <Route path="/about-privacy" element={<AboutPrivacy />} />
        {/* 最新消息內頁 */}
        <Route path="/news" element={<News />} />
        {/* 所有消息頁面 */}
        <Route path="/all-news" element={<AllNews />} />
        {/* 商品內頁 */}
        <Route path="/product" element={<Product />} />
        {/* 各材質商品分類頁 */}
        <Route path="/product-glass" element={<ProductGlass />} />
        <Route path="/product-stainless" element={<ProductStainless />} />
        <Route path="/product-ceramic" element={<ProductCeramic />} />
        <Route path="/product-woody" element={<ProductWoody />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
