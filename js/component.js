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
          <li><a href="./all-news.html">最新消息</a></li>
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
              <a className={` nav-link ${active === 'all-news' ? 'active' : ''}`} href="./all-news.html">最新消息</a>
            </li>
            <li className="nav-item dropdown">
              <a className={` nav-link dropdown-toggle ${active === 'all-product' ? 'active' : ''}`} href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                找杯趣
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="./all-product.html">ALL</a></li>
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
          <ul className="search navbar-nav d-flex">
            <li className="nav-item"><a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass fa-xl"
              style={{ color: "#22668D" }}></i></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping fa-xl"
              style={{ color: "#22668D" }}></i></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><i className="fa-solid fa-user fa-xl"
              style={{ color: "#22668D" }}></i></a></li>
          </ul>
        </div>

      </div>

    </nav>
  )
}

const Navtable = ({ active }) => {
  return (
    <>
      <div className="about-us">
        <div className="subMenu">
          <ul className="nav nav-pills nav-tabs flex-column">
            <li className="nav-item">
              <a className={`nav-link  ${active === 'allproduct' ? 'active' : ''}`}
                href="./all-product.html"
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


//取得 json-product資料

async function fetchProductData() {
  try {
    const response = await axios.get('./json/product.json');
    return response.data.productData;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

//取得 json-post資料

async function fetchPostData() {
  try {
    const response = await axios.get('./json/post.json');
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}


//Product-首頁小卡-product元件
const Product = ({ name, info, url, id }) => {
  return (
    <>
      <div className="product">

          <img className="productImg" src={`./images/${url}.jpeg`} alt="" />
          <h3 className="productName">{name}</h3>
          <p className="productInfo">
            {info}
          </p>
          <div className="cta">
            <a href={`product.html?q=${id}`}> 點我逛逛 <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#FFFFFF" }}></i></a>
          </div>

      </div>

    </>
  );
}


//Product-商品頁小卡-渲染json資料 函式
const renderProducts = (products) => {
  return (<>
    <div className="product-list all-product">

      {products.map((product) => (
        <ProductCardS
          key={product.id}
          id={product.id}
          name={product.name}
          info={product.info}
          url={product.url}
          tag1={product.tag1}
          tag2={product.tag2}
          priceregular={product.priceregular}
          priceshow={product.priceshow} />
      ))}
    </div >
  </>)
};

//Product-商品頁小卡-ProductCardS 卡片元件
const ProductCardS = ({ id, name, priceregular, priceshow, url, tag1, tag2 }) => {
  const [isFavorite, setIsFavorite] = useState(false); // 狀態來追蹤愛心是否被點擊
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite); // 切換狀態
  };

  return (
    <div className="product-s">
      <a href={`product.html?q=${id}`}>
        <img className="productImg" src={`./images/${url}.jpeg`} alt="" />
        <h3 className="productName">{name}</h3>
        <div className="product-middle">
          <span className="product-label">{tag1}</span>
          <span className="product-label">{tag2}</span>
        </div>
        <div className="product-bottom">

          <div className="product-price-show">NT${priceshow}</div>
          <div className="product-icon">
            <div className="add-list">
              <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart fa-xl`} style={{ color: "#22668D", "font-size": "2em" }} onClick={handleFavoriteClick}> </i>
            </div>
            <div className="add-cart"><i className="fa-solid fa-cart-shopping fa-l" style={{ "color": "#FFFADD" }} > </i>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

