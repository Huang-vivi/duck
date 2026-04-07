import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
// ⚠️ 避免與下面定義的元件撞名，我們把引入的 Product 改名叫 ProductCard
import { fetchProductData, Product as ProductCard } from '../components/component.jsx';

export default function Product() {
    const [productData, setProductData] = useState([]);
    const [searchParams] = useSearchParams();
    const urlId = searchParams.get('q');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProductData();
            if (data) setProductData(data);
        };
        fetchData();
    }, []);

    const product = productData.find(item => item.id === urlId);
    const filteredProducts = productData.filter(group => product && group.texture === product.texture);

    useEffect(() => {
        if (product) document.title = `三杯鴨-${product.name}`;
    }, [product]);

    const renderProductsClass = (products) => {
        if (!product) return <div>Loading...</div>;
        return (
            <>
                {products.map((prod) => (
                    <ProductCard key={prod.name} {...prod} />
                ))}
            </>
        )
    }

    const ProductPage = ({ name, info, content, priceregular, priceshow, url, url2, url3, url4, tag1, tag2, sellinfo }) => {
        const ProductQuantity = () => {
            const [quantity, setQuantity] = useState(1);
            return (
                <div className="add-button">
                    <button className="my-button-s" onClick={() => quantity > 1 && setQuantity(q => q - 1)}>-</button>
                    <span>{quantity}</span>
                    <button className="my-button-s" onClick={() => setQuantity(q => q + 1)}>+</button>
                </div>
            );
        };

        const InfoTab = () => {
            const [activeTab, setActiveTab] = useState('#product-detail');
            const handleClick = (event, href) => {
                event.preventDefault();
                setActiveTab(href);
            };
            return (
                <div className="product-description">
                    <ul className="nav nav-pills nav-fill" >
                        <li className="nav-item" >
                            <a className={`nav-link detail-rule ${activeTab === '#product-detail' ? 'active' : ''}`} onClick={(e) => handleClick(e, '#product-detail')} href="#product-detail">商品介紹</a>
                        </li>
                        <li className="nav-item" >
                            <a className={`nav-link detail-rule ${activeTab === '#product-rule' ? 'active' : ''}`} onClick={(e) => handleClick(e, '#product-rule')} href="#product-rule">銷售說明</a>
                        </li>
                    </ul>
                    <div className="product-detail-rule" >
                        <div className={`text fade ${activeTab === '#product-detail' ? 'show' : 'collapse'}`} id="product-detail">
                            <h2>商品介紹</h2>
                            <p>{content}</p>
                            <div className="small img-center">
                                <img className="img-small" src={`./images/${url}.jpeg`} alt="" />
                                <img className="img-small" src={`./images/${url2}.jpeg`} alt="" />
                                <img className="img-small" src={`./images/${url3}.jpeg`} alt="" />
                                <img className="img-small" src={`./images/${url4}.jpeg`} alt="" />
                            </div>
                        </div>
                        <div className={`text fade ${activeTab === '#product-rule' ? 'show' : 'collapse'}`} id="product-rule">
                            <h2>銷售說明</h2>
                            <p>運費：100元 （滿1500元免運費！）</p>
                            <p>{sellinfo}</p>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <>
                <div className="top-class">
                    <nav style={{ "--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")" }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/product-allproduct">全部商品</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{name}</li>
                        </ol>
                    </nav>
                </div>
                <div className="main-product">
                    <div className="product-top">
                        <div className="product-images">
                            <div className="big">
                                <img className="img-main" src={`./images/${url}.jpeg`} alt="" />
                            </div>
                            <div className="small">
                                <img className="img-small" src={`./images/${url2}.jpeg`} alt="" />
                                <img className="img-small" src={`./images/${url3}.jpeg`} alt="" />
                                <img className="img-small" src={`./images/${url4}.jpeg`} alt="" />
                            </div>
                        </div>
                        <div className="product-infomation">
                            <h1>{name}</h1>
                            <div className="tag-line">
                                <div className="product-label">{tag1}</div >
                                <div className="product-label ">{tag2}</div>
                            </div>
                            <div className="info-line" >{info}</div>
                            <div className="price-line">
                                <div className="priceregular" >$NT{priceregular}</div>
                                <div className="priceshow" >$NT{priceshow}</div>
                            </div>
                            <ProductQuantity />
                            <div className="cart-buy">
                                <button className="my-button-m"><Link to="/cart">立即購買</Link></button>
                                <button className="my-button-m"><Link to="/cart">加入購物車</Link></button>
                            </div>
                        </div>
                    </div>
                    <InfoTab />
                </div>
            </>
        )
    }

    return (
        <>
            <Header active="all-product" />
            <main>
                <section className="all-product-page first-header">
                    {!product ? <div>Loading...</div> : <ProductPage {...product} />}
                    <div className="product-recommand">
                        <header className="subTitle bold first-header">
                            <img src="./images/header.png" alt="" />
                            <h2>類似商品</h2>
                            <h3>RECOMMAND PRODUCT</h3>
                        </header>
                        <div className="recommand-list">
                            <i className="fa-solid fa-square-caret-left fa-2xl" style={{ color: "#22668D" }}></i>
                            <div className="product-list">
                                {renderProductsClass(filteredProducts)}
                            </div>
                            <i className="fa-solid fa-square-caret-right fa-2xl" style={{ color: "#22668D" }}></i>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
