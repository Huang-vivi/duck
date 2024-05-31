const { useState, useEffect } = React;

const Footer = () => {
  return (
    <footer>
      <a className="logo" href="index.html"><img src="./logo.ico" alt="三杯鴨logo" className="logo" /></a>
      <div className="info">
        <address>ADD.壓箱市鴨香區鴨鳴路181巷12樓</address>
        <p>TEL. 02-2200-0124</p>
        <p>EMAIL. pig20071219@gmail.com</p>
        <p>OPENING HOURS. 10:00-19:00</p>
        <small>© 2024 Duckup Inc.</small>
      </div>
      <div className="sitemap">
        <ul className="menu">
          <li><a href="./about-us.html">品牌故事</a></li>
          <li><a href="./news.html">最新消息</a></li>
          <li><a href="./member.html">會員專區</a></li>
          <li><a href="./contact-us.html">聯絡我們</a></li>
        </ul>
        <ul className="media">
          <li><a href="#"><i className="fa-brands fa-square-facebook fa-2xl" style={{ color: "#FFFADD" }}></i></a></li>
          <li><a href="#service"><i className="fa-brands fa-square-instagram fa-2xl" style={{ color: "#FFFADD" }}></i></a>
          </li>
          <li><a href="#about"><i className="fa-brands fa-square-x-twitter fa-2xl" style={{ color: "#FFFADD" }}></i></a>
          </li>
        </ul>
      </div>
    </footer>

  );
};

const Header = ({ active }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light bold">
      <div className="container-fluid flex-grow-1">
        <a className="navbar-brand" href="./index.html"> <img src="./logo-w.ico" alt="三杯鴨LOGO" width="30"
          height="30" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={` nav-link ${active === 'about-us' ? 'active' : ''}`} href="./about-us.html">關於我們</a>
            </li>
            <li className="nav-item">
              <a className={` nav-link ${active === 'news' ? 'active' : ''}`} href="./news.html">最新消息</a>
            </li>
            <li className="nav-item dropdown">
              <a className={` nav-link dropdown-toggle ${active === 'all-product' ? 'active' : ''}`} href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                找杯趣
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="./product.html">ALL</a></li>
                <li><a className="dropdown-item" href="./product-glass.html">玻璃</a></li>
                <li><a className="dropdown-item" href="./product-stainless.html">不鏽鋼</a></li>
                <li><a className="dropdown-item" href="./product-woody.html">木質</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className={` nav-link ${active === 'member' ? 'active' : ''}`} href="./member.html">會員專區</a>
            </li>
            <li className="nav-item">
              <a className={` nav-link ${active === 'contact-us' ? 'active' : ''}`} href="./contact-us.html">聯絡我們</a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="search navbar-nav d-flex">
        <li className="nav-item"><a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass fa-xl"
          style={{ color: "#22668D" }}></i></a></li>
        <li className="nav-item"><a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping fa-xl"
          style={{ color: "#22668D" }}></i></a></li>
        <li className="nav-item"><a className="nav-link" href="#"><i className="fa-solid fa-user fa-xl"
          style={{ color: "#22668D" }}></i></a></li>
      </ul>
    </nav>
  )
}


// 次目錄active設計
const Navtable = ({ active }) => {
  return (
    <>
      <div className="about-us">
        <div className="subMenu">
          <ul className="nav nav-pills nav-tabs flex-column">
            <li className="nav-item">
              <a className={`nav-link  ${active === 'allproduct' ? 'active' : ''}`}
                href="./product.html"
              >全部商品</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link  ${active === 'glass' ? 'active' : ''}`}
                href="./product-glass.html"
              >玻璃</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${active === 'stainless' ? 'active' : ''}`}
                href="./product-stainless.html" >不鏽鋼</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${active === 'woody' ? 'active' : ''}`}
                href="./product-woody.html" >木製</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${active === 'ceramic' ? 'active' : ''}`}
                href="./product-ceramic.html" >瓷器</a>
            </li>
          </ul>
        </div>
      </div >
    </>)
}


//取得 json資料

async function fetchProductData() {
  try {
    const response = await axios.get('./json/product.json');
    return response.data.productData;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

