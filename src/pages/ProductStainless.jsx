import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { fetchProductData, Navtable, renderProducts } from '../components/component.jsx';

export default function ProductStainless() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    document.title = "三杯鴨-不鏽鋼馬克杯";
    const fetchData = async () => {
      const data = await fetchProductData();
      if (data) setProductData(data);
    };
    fetchData();
  }, []);

  const filteredProducts = productData.filter(product => product.texture === "stainless");

  return (
    <>
      <Header active="all-product" />
      <main>
        <section className="all-product-page">
          <header className="subTitle bold first-header">
            <img src="./images/header.png" alt="" />
            <h2>不鏽鋼</h2>
            <h3>STAINLESS</h3>
          </header>
          <div className="top-class">
            <nav style={{ "--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")" }} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/product-allproduct">全部商品</Link></li>
                <li className="breadcrumb-item active" aria-current="page">不鏽鋼</li>
              </ol>
            </nav>
            <div className="filter">
              <ul><li>每頁展示數量 v </li><li>商品排序 v </li></ul>
            </div>
          </div>
          <div className="all-product-main">
            <Navtable active="stainless" tab1="allproduct" tab2="glass" tab3="stainless" tab4="woody" tab5="ceramic" topic="product" tabname="全部商品" tab2name="玻璃" tab3name="不鏽鋼" tab4name="木製" tab5name="瓷器" />
            {renderProducts(filteredProducts)}
          </div>
        </section >
      </main >
      <Footer />
    </>
  )
}
