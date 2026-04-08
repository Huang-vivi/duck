import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Navtable = ({ active, tab1, tab2, tab3, tab4, tab5, topic, tabname, tab2name, tab3name, tab4name, tab5name, noshow2, noshow3, noshow4, noshow1, noshow5 }) => {
  return (
    <>
      <div className="subMenu">
        <ul className="nav nav-pills nav-tabs flex-column">
          <li className="nav-item">
            <Link className={`nav-link ${noshow1}  ${active === tab1 ? 'active' : ''}`}
              to={`/${topic}-${tab1}`}
            >{tabname}</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${noshow2} ${active === tab2 ? 'active' : ''}`}
              to={`/${topic}-${tab2}`}
            >{tab2name}</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${noshow3}  ${active === tab3 ? 'active' : ''}`}
              to={`/${topic}-${tab3}`}  >{tab3name}</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${noshow4} ${active === tab4 ? 'active' : ''}`}
              to={`/${topic}-${tab4}`}  >{tab4name}</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${noshow5} ${active === tab5 ? 'active' : ''}`}
              to={`/${topic}-${tab5}`} >{tab5name}</Link>
          </li>
        </ul>
      </div>

    </>)
}


//取得 json-product資料
export async function fetchProductData() {
  try {
    // const response = await axios.get('./json/product.json');
    const response = await axios.get('https://huang-vivi.github.io/duck/json/product.json');
    return response.data.productData;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

//取得 json-post資料

export async function fetchPostData() {
  try {
    // const response = await axios.get('./json/post.json');
    const response = await axios.get('https://huang-vivi.github.io/duck/json/post.json');
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}


//Product-首頁小卡-product元件
export const Product = ({ name, info, url, id }) => {
  return (
    <>
      <div className="product">

        <img className="productImg" src={`/duck/images/${url}.jpeg`} alt="" />
        <h3 className="productName">{name}</h3>
        <p className="productInfo">
          {info}
        </p>
        <div className="cta">
          <Link to={`/product?q=${id}`}> Shop Now <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#FFFADD" }}></i></Link>
        </div>

      </div>

    </>
  );
}


//Product-商品頁小卡-ProductCardS 卡片元件
export const ProductCardS = ({ id, name, priceregular, priceshow, url, url2, tag1, tag2 }) => {
  const [isFavorite, setIsFavorite] = useState(false); // 狀態來追蹤愛心是否被點擊
  const handleFavoriteClick = (event) => {
    event.preventDefault();
    setIsFavorite(!isFavorite); // 切換狀態
  };

  return (
    <div className="product-s">
      <Link to={`/product?q=${id}`}>
        <div className="change-img">
          <img className="productImg" src={`/duck/images/${url2}.jpeg`} alt="" />
          <img className="productImg" src={`/duck/images/${url}.jpeg`} alt="" />
          <div className="add-list">
            <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart fa-xl`} style={{ color: "#E39529", "fontSize": "2em" }} onClick={handleFavoriteClick}> </i>
          </div>
        </div>
        <div className="name-tag">
          <h3 className="productName">{name}</h3>
          <div className="product-middle">
            <div className="label-group">
              <span className="product-label">{tag1}</span>
              <span className="product-label product-label2">{tag2}</span>
            </div>
            <div className="product-price-show">NT${priceshow}</div>
          </div>
        </div>
        <div className="add-cart">Add to Cart<i className="fa-solid fa-cart-shopping fa-l" style={{ "color": "#FFFADD" }} > </i>
        </div>
      </Link>
    </div>
  )
}



//Product-商品頁小卡-渲染json資料 函式
export const renderProducts = (products) => {
  return (<>
    <div className="product-list all-product">

      {products.map((product) => (
        <ProductCardS
          key={product.id}
          id={product.id}
          name={product.name}
          info={product.info}
          url={product.url}
          url2={product.url2}
          tag1={product.tag1}
          tag2={product.tag2}
          priceregular={product.priceregular}
          priceshow={product.priceshow} />
      ))}
    </div >
  </>)
};
