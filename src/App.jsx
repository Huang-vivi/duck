import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import { fetchProductData, fetchPostData, Product } from './components/component.jsx';
import Footer from './components/Footer.jsx';
import { Link } from 'react-router-dom';

export default function App() {
    const [productData, setProductData] = useState([]);
    const [selectedMaterial, setSelectedMaterial] = useState('');
    const [currentStartIndex1, setCurrentStartIndex1] = useState(0);
    const [currentStartIndex2, setCurrentStartIndex2] = useState(0);
    const [postData, setPostData] = useState([]);

    // 讀取 json 資料
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProductData();
            if (data) {
                setProductData(data);
            }
        };

        fetchData();
    }, []);

    const [color, setColor] = useState('');
    const [texture, setTexture] = useState('');
    const [price, setPrice] = useState('');
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [info, setInfo] = useState('');
    const [url, setUrl] = useState('');
    const [result, setResult] = useState({
        "id": "1",
        "texture": "glass",
        "priceshow": "99",
        "price": "low",
        "color": "white",
        "tag1": "Handmade",
        "tag2": "Limited",
        "name": "Duck Shaped Mug",
        "info": "This duck-shaped mug looks like a cute little duck, featuring a charming appearance and unique design!",
        "url": "product1"
    });

    //篩選產品函式
    const filterProducts = () => {
        const filteredRandomProducts = productData.filter(product => {
            const matchColor = color === "" || color === "all" || product.color === color ||
                (color === "red" && (product.color === "紅色" || product.color === "紅")) ||
                (color === "blue" && (product.color === "藍色" || product.color === "藍")) ||
                (color === "green" && (product.color === "綠色" || product.color === "綠")) ||
                (color === "white" && (product.color === "白色" || product.color === "白"));

            const matchTexture = texture === "" || texture === "all" || product.texture === texture ||
                (texture === "glass" && product.texture === "玻璃") ||
                (texture === "stainless" && product.texture === "不鏽鋼") ||
                (texture === "ceramic" && (product.texture === "陶瓷" || product.texture === "瓷器")) ||
                (texture === "woody" && (product.texture === "木質" || product.texture === "木製"));

            const matchPrice = price === "" || price === "all" || product.price === price ||
                (price === "low" && product.price === "低") ||
                (price === "medium" && product.price === "中") ||
                (price === "high" && product.price === "高");

            return matchColor && matchTexture && matchPrice;
        });

        if (filteredRandomProducts.length > 0) {
            const randomProduct = filteredRandomProducts[Math.floor(Math.random() * filteredRandomProducts.length)];
            setResult(randomProduct)
        } else {
            setResult(null);
        }
    };

    // 跑馬燈無限巡迴 (修正：改用 useEffect 操作 DOM)
    useEffect(() => {
        const marqueeInner = document.querySelector('.marquee-inner');
        if (marqueeInner) {
            const images = marqueeInner.querySelectorAll('img');
            const totalWidth = Array.from(images).reduce((acc, img) => acc + img.offsetWidth, 0);
            marqueeInner.style.animationDuration = `${totalWidth / 100}px`;
        }
    }, []);

    // 響應式：依螢幕大小顯示商品數 (修正：加入 useState 並監聽 resize 事件，修復了重複判斷的 Bug)
    const [numVisibleProducts, setNumVisibleProducts] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 640) {
                setNumVisibleProducts(1);
            } else if (screenWidth <= 820) {
                setNumVisibleProducts(3);
            } else {
                setNumVisibleProducts(4);
            }
        };

        handleResize(); // 第一次渲染時設定
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //渲染json資料 函式
    const renderProducts = (products, currentStartIndex) => {
        return (
            <div className="product-list">
                {products.slice(currentStartIndex, currentStartIndex + numVisibleProducts).map((product) => (
                    <Product id={product.id} key={product.name} name={product.name} info={product.info} url={product.url} />
                ))}
            </div>
        )
    };

    //材質切換按鈕
    const TextureTabs = ({ textureData }) => {
        const [activeTab, setActiveTab] = useState('glass');
        const [currentStartIndexGlass, setCurrentStartIndexGlass] = useState(0);
        const [currentStartIndexWoody, setCurrentStartIndexWoody] = useState(0);
        const [currentStartIndexStainless, setCurrentStartIndexStainless] = useState(0);
        const [currentStartIndexCeramic, setCurrentStartIndexCeramic] = useState(0);

        const handleTabClick = (tab) => {
            setActiveTab(tab);
        }

        //上一頁 下一頁 設計
        const NextProduct = ({ currentStartIndex, setCurrentStartIndex, filteredProductTab }) => {
            const handlePrevClick = () => {
                if (currentStartIndex > 0) {
                    setCurrentStartIndex(currentStartIndex - 1);
                }
            };
            const handleNextClick = () => {
                if (currentStartIndex < filteredProductTab.length - numVisibleProducts) {
                    setCurrentStartIndex(currentStartIndex + 1);
                }
            };

            return (
                <div className="pre-next">
                    <button className="pre" onClick={handlePrevClick} disabled={currentStartIndex === 0}>
                        <i className="fa-solid fa-square-caret-left fa-2xl" style={{ color: "#22668d" }}></i>
                    </button>
                    {renderProducts(filteredProductTab, currentStartIndex)}
                    <button className="next" onClick={handleNextClick} disabled={currentStartIndex >= filteredProductTab.length - numVisibleProducts}>
                        <i className="fa-solid fa-square-caret-right fa-2xl" style={{ color: "#22668d" }}></i>
                    </button>
                </div >
            );
        };

        // 根据选项卡按钮显示不同的介绍文本
        const getTabContent = () => {
            const filteredProducts = textureData.filter(product => {
                return product.texture === activeTab ||
                    (activeTab === 'glass' && product.texture === '玻璃') ||
                    (activeTab === 'stainless' && product.texture === '不鏽鋼') ||
                    (activeTab === 'ceramic' && (product.texture === '陶瓷' || product.texture === '瓷器')) ||
                    (activeTab === 'woody' && (product.texture === '木質' || product.texture === '木製'));
            });

            if (filteredProducts.length === 0) {
                return <p>No products available for this material.</p>;
            }
            switch (activeTab) {
                case 'glass':
                    return (
                        <>
                            <div className="texture-content active" id="glass">
                                <div className="texture-info">
                                    <p>Elegant transparent appearance, allowing you to intuitively appreciate the color of your beverage.</p>
                                    <Link to="/product-glass">Shop Now</Link>
                                </div>

                                <NextProduct currentStartIndex={currentStartIndexGlass} setCurrentStartIndex={setCurrentStartIndexGlass} filteredProductTab={filteredProducts} />
                            </div >
                        </>);
                case 'stainless':
                    return (<>
                        <div className="texture-content active " id="stainless">
                            <div className="texture-info">
                                <p>Stainless steel mugs are durable, offer excellent insulation, and are easy to clean without retaining odors.</p>
                                <Link to="/product-stainless">Shop Now</Link>
                            </div>

                            <NextProduct currentStartIndex={currentStartIndexStainless} setCurrentStartIndex={setCurrentStartIndexStainless} filteredProductTab={filteredProducts} />
                        </div>
                    </>);
                case 'ceramic':
                    return (<>
                        <div className="texture-content active" id="ceramic">
                            <div className="texture-info">
                                <p>Ceramic mugs retain heat well and are easy to clean, making them perfect for daily use.</p>
                                <Link to="/product-ceramic">Shop Now</Link>
                            </div>
                            <NextProduct currentStartIndex={currentStartIndexCeramic} setCurrentStartIndex={setCurrentStartIndexCeramic} filteredProductTab={filteredProducts} />
                        </div>
                    </>);
                case 'woody':
                    return (<>
                        <div className="texture-content active" id="woody">
                            <div className="texture-info">
                                <p>Wooden mugs are known for their rustic appearance and warm touch, offering a natural aroma.</p>
                                <Link to="/product-woody">Shop Now</Link>
                            </div>
                            <NextProduct currentStartIndex={currentStartIndexWoody} setCurrentStartIndex={setCurrentStartIndexWoody} filteredProductTab={filteredProducts} />
                        </div >
                    </>);
            }
        };

        return (
            <>
                <div className="textMenu">
                    <ul className="texture">
                        <li>
                            {/* 修正：正確傳遞參數 e，避免使用全域變數 event 報錯 */}
                            <a
                                className={`texture-button ${activeTab === 'glass' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleTabClick('glass')
                                }}
                                href="#"
                            >
                                <h3>Glass</h3>
                                <i className={`fa-solid fa-mug-hot fa-lg ${activeTab === 'glass' ? 'show' : 'collapse'}`} style={{ color: '#FFFADD' }}></i>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`texture-button ${activeTab === 'woody' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault(); handleTabClick('woody')
                                }}
                                href="#"
                            >
                                <h3>Wood</h3>
                                <i className={`fa-solid fa-mug-hot fa-lg ${activeTab === 'woody' ? 'show' : 'collapse'}`} style={{ color: "#FFFADD" }}></i>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`texture-button ${activeTab === 'ceramic' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault(); handleTabClick('ceramic')
                                }}
                                href="#"
                            >
                                <h3>Ceramic</h3>
                                <i className={`fa-solid fa-mug-hot fa-lg ${activeTab === 'ceramic' ? 'show' : 'collapse'}`} style={{ color: "#FFFADD" }}></i>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`texture-button ${activeTab === 'stainless' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault(); handleTabClick('stainless')
                                }}
                                href="#"
                            >
                                <h3>Stainless</h3>
                                <i className={`fa-solid fa-mug-hot fa-lg ${activeTab === 'stainless' ? 'show' : 'collapse'}`} style={{ color: "#FFFADD" }}></i>
                            </a>
                        </li>
                    </ul >
                </div>
                <div className="textureList">
                    {getTabContent(activeTab)}
                </div>
            </>
        )
    }

    // 次目錄active設計
    const Navbar = () => {
        const [activeItem, setActiveItem] = useState('#about-quackmug');

        useEffect(() => {
            const activeElement = document.querySelector('.nav-link.active');
            if (activeElement) {
                const target = activeElement.getAttribute('href');
                setActiveItem(target);
            }
        }, []);

        const handleClick = (e, href) => {
            e.stopPropagation();
            e.preventDefault();
            setActiveItem(href);
        };

        return (
            <>
                <div className="about-us">
                    <div className="subMenu">
                        <ul className="nav nav-pills nav-tabs flex-column">
                            <li className="nav-item">
                                <a className={`nav-link ${activeItem === '#about-quackmug' ? 'active' : ''}`}
                                    onClick={(e) => handleClick(e, '#about-quackmug')} href="#about-quackmug"
                                >About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeItem === '#about-pay' ? 'active' : ''}`}
                                    onClick={(e) => handleClick(e, '#about-pay')} href="#about-pay" >Payment</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeItem === '#about-delivery-fee' ? 'active' : ''}`}
                                    onClick={(e) => handleClick(e, '#about-delivery-fee')} href="#about-delivery-fee" >Shipping</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeItem === '#about-return' ? 'active' : ''}`}
                                    onClick={(e) => handleClick(e, '#about-return')} href="#about-return" >Returns</a>
                            </li>
                        </ul>
                    </div>
                    <div className="about-info ">
                        <div className={` container fade ${activeItem === '#about-quackmug' ? 'show' : 'collapse'}`} id="about-quackmug" role="tabpanel"
                            aria-labelledby="about-quackmug">
                        <div><img src="/duck/images/bg1.jpeg" alt="" /></div>
                            <h4>About Quackmug</h4>
                            <p>"Everyone deserves a good mug. Restart your wonderful daily life rituals with a cup."</p>
                            <p> Mugs are often overlooked in life, but Quackmug hopes to accompany your daily routine. Whether providing warmth in the cold winter, refreshing you in the hot summer, offering spiritual support while you work, or joining the joyous moments gathered with family and friends, we hope you find a moment of coziness in your busy days! </p>
                            <p> Quackmug focuses on selecting and designing unique duck-shaped mugs. We insist on non-toxic and safe materials and craft mugs with stories using an artisan spirit. Accompanying you through life's ups and downs, whether laughing or facing challenges, we insist on providing the best items to make every toast-worthy moment even better.
                            </p>
                        </div>
                        <div className={`container fade  ${activeItem === '#about-pay' ? 'show' : 'collapse'}`} id="about-pay" role="tabpanel" aria-labelledby="about-pay">
                        <div><img src="/duck/images/bg1.jpeg" alt="" /></div>
                            <h4>Payment Methods</h4>
                            <ul>
                                <li>Credit Card: Instant online payment. The transaction process uses SSL encryption to protect your personal privacy data.</li>
                                <li>LINE Pay: No need to enter credit card info, just enter your exclusive password to make payment, saving you time.</li>
                                <li>Apple Pay: Please prepare Apple Pay Wallet on your mobile device first. The transaction is encrypted throughout the process.</li>
                            </ul>
                        </div>

                        <div className={` container fade  ${activeItem === '#about-delivery-fee' ? 'show' : 'collapse'}`} id="about-delivery-fee" role="tabpanel"
                            aria-labelledby="about-delivery-fee">
                        <div><img src="/duck/images/bg1.jpeg" alt="" /></div>
                            <h4>Shipping Policy</h4>
                            <p>Quackmug uses courier delivery. The shipping fee is 120 NTD, and orders over 2000 NTD enjoy free shipping.</p>
                            <p>Delivery area is limited to the main island of Taiwan. Since the products are fragile, please record the unboxing process to protect the rights of both parties.</p>
                        </div>
                        <div className={` container fade  ${activeItem === '#about-return' ? 'show' : 'collapse'}`} id="about-return" role="tabpanel"
                            aria-labelledby="about-return">
                        <div><img src="/duck/images/bg1.jpeg" alt="" /></div>
                            <h4>Return Policy</h4>
                            <h5>Appreciation Period</h5>
                            <p>In accordance with consumer protection laws, you have a 7-day appreciation period starting from the arrival of the product. This is not a trial period.</p>
                            <h5>Return Notice</h5>
                            <p>If you need to return a product, please contact customer service within 7 days and provide "Name", "Order Number", "Contact Number", and "Reason/Photos".</p>
                            <p>Returned products must be unopened, unused, and retain the complete original packaging.</p>
                            <p><strong>Return Customer Service Line: 02-2200-0123.</strong></p>
                            <h5>Return Process</h5>
                            <p>Contact Customer Service → Confirm Eligibility → Prepare Product & Invoice → Provide Pickup Info → Logistics Will Collect.</p>
                        </div>
                    </div>
                </div >
            </>)
    }

    //讀取新聞的 json資料
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPostData();
            if (data) {
                const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setPostData(data);
            }
        };
        fetchData();
    }, []);

    // 兼容中文或英文的 JSON 資料
    const filteredNewsPosts = postData.filter(post => post.type === "最新公告" || post.type === "Announcement");
    const filteredSalesPosts = postData.filter(post => post.type === "最新優惠" || post.type === "Sale");

    //渲染json資料 最新優惠 函式
    const renderSalesPosts = (posts) => {
        const NextSalesPost = () => {
            const handlePrevClick = () => {
                if (currentStartIndex1 > 0) {
                    setCurrentStartIndex1(currentStartIndex1 - 1);
                }
            };
            const handleNextClick = () => {
                if (currentStartIndex1 < filteredNewsPosts.length - 4) {
                    setCurrentStartIndex1(currentStartIndex1 + 1);
                }
            };
            return (
                <div className="pre-next">
                    <button className="pre" onClick={handlePrevClick} disabled={currentStartIndex1 === 0}>
                        <i className="fa-solid fa-square-caret-left fa-2xl" style={{ color: "#22668d" }}></i>
                    </button>
                    <Link to="/all-news">View All</Link>
                    <button className="next" onClick={handleNextClick} disabled={currentStartIndex1 >= filteredNewsPosts.length - 4}>
                        <i className="fa-solid fa-square-caret-right fa-2xl" style={{ color: "#22668d" }}></i>
                    </button>
                </div >
            );
        }

        return (
            <div className="sales-box">
                <div className="articleList">
                    {posts.slice(currentStartIndex1, currentStartIndex1 + 4).map((post) => (
                        < SalesBox
                            key={post.postId}
                            postId={post.postId}
                            url={post.url}
                            title={post.title}
                            date={post.date}
                            type={post.type}
                            content={post.content}
                            content2={post.content2}
                        />
                    ))}
                </div>
                < NextSalesPost />
            </div>
        )
    };

    //優惠公告物件
    const SalesBox = ({ postId, url, title, date, type, content, content2 }) => {
        return (
            <article className="sale">
                <div className="text">
                    <div className="time">
                        <time>{date}</time>
                    </div>
                    <h4>{title}</h4>
                </div>
                <Link to={`/news?q=${postId}`}> Read More </Link>
            </article>
        )
    }

    //渲染json資料 最新公告 函式
    const renderNewsPosts = (posts) => {
        return (
            <>
                {posts.slice(currentStartIndex2, currentStartIndex2 + 1).map((post) => (
                    < NewsBox
                        key={post.postId}
                        postId={post.postId}
                        url={post.url}
                        title={post.title}
                        date={post.date}
                        type={post.type}
                        content={post.content}
                        content2={post.content2}
                    />
                ))}
            </>
        )
    };

    //最新公告物件
    const NewsBox = ({ postId, url, title, date, type, content, content2 }) => {
        const NextNewsPost = () => {
            const handlePrevClick = () => {
                if (currentStartIndex2 > 0) {
                    setCurrentStartIndex2(currentStartIndex2 - 1);
                }
            };
            const handleNextClick = () => {
                if (currentStartIndex2 < filteredNewsPosts.length - 1) {
                    setCurrentStartIndex2(currentStartIndex2 + 1);
                }
            };
            return (
                <div className="pre-next">
                    <button className="pre" onClick={handlePrevClick} disabled={currentStartIndex2 === 0}>
                        <i className="fa-solid fa-square-caret-left fa-2xl" style={{ color: "#FFCC70" }}></i>
                    </button>
                    <Link to="/all-news">View All</Link>
                    <button className="next" onClick={handleNextClick} disabled={currentStartIndex2 >= filteredNewsPosts.length - 1}>
                        <i className="fa-solid fa-square-caret-right fa-2xl" style={{ color: "#FFCC70" }}></i>
                    </button>
                </div >
            );
        }

        return (
            <div className="news-box">
                <div className="articleList">
                    <article className="news-content">
                        <time>{date}</time>
                        <h4>{title}</h4>
                        <p>{content}</p>
                        <Link to={`/news?q=${postId}`}> Read More </Link>
                    </article>
                </div>
                < NextNewsPost />
            </div >
        )
    }

    return (
        <>
            <Header active="home" />
            <main>
                <section id="banner">
                    <div className="slogan">
                        <div className="slogan-left"><img src="/duck/images/solgan2.svg" alt="" /></div>
                        <div className="slogan-right"><img className="img1" src="/duck/images/rotate2.svg" alt="" /></div>
                    </div>
                    <div className="marquee">
                        <div className="a1">
                            <img src="/duck/images/bg.jpeg" alt="" />
                            <img src="/duck/images/bg1.jpeg" alt="" />
                            <img src="/duck/images/bg3.jpeg" alt="" />
                            <img src="/duck/images/bg4.jpeg" alt="" />
                            <img src="/duck/images/bg5.jpeg" alt="" />
                            <img src="/duck/images/bg.jpeg" alt="" />
                            <img src="/duck/images/bg1.jpeg" alt="" />
                            <img src="/duck/images/bg3.jpeg" alt="" />
                            <img src="/duck/images/bg4.jpeg" alt="" />
                            <img src="/duck/images/bg5.jpeg" alt="" />
                        </div>
                    </div>
                </section>

                <section id="category">
                    <header className="subTitle bold">
                        <img src="/duck/images/header.png" alt="" />
                        <h2>Featured Categories</h2>
                        <h3>ALL PRODUCT</h3>
                    </header>
                    <TextureTabs textureData={productData} />
                </section>

                <section id="service" className="service">
                    <div className="surprise">
                        <div className="picker">
                            <header className="subTitle bold">
                                <img src="/duck/images/header.png" alt="" />
                                <h2>Find Your Mug</h2>
                                <h3>SURPRISE</h3>
                            </header>
                            <div className="filters">
                                <select id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                                    <option value="">Color</option>
                                    <option value="all">Any</option>
                                    <option value="red">Red</option>
                                    <option value="blue">Blue</option>
                                    <option value="green">Green</option>
                                    <option value="white">White</option>
                                </select>
                                <select id="texture" value={texture} onChange={(e) => setTexture(e.target.value)}>
                                    <option value="">Material</option>
                                    <option value="all">Any</option>
                                    <option value="glass">Glass</option>
                                    <option value="stainless">Stainless Steel</option>
                                    <option value="ceramic">Ceramic</option>
                                    <option value="woody">Wood</option>
                                </select>
                                <select id="price" value={price} onChange={(e) => setPrice(e.target.value)}>
                                    <option value="">Budget</option>
                                    <option value="all">Any</option>
                                    <option value="low">Under $100</option>
                                    <option value="medium">$101 - $300</option>
                                    <option value="high">Over $300</option>
                                </select>
                            </div>
                            <button className="my-button" onClick={filterProducts}>Random Mug</button>
                        </div>

                        <div className="product-w">
                            <div className="icon">
                                <i className="fa-regular fa-heart fa-lg" style={{ color: "#355282" }}></i>
                                <i className="fa-solid fa-heart fa-lg" style={{ color: "#355282" }}></i>
                            </div>
                            {result ? (
                                <div className="product">
                                    <div className="image"> <img src={`/duck/images/${result.url}.jpeg`} alt="" />
                                    </div>
                                    <div className="product-text">
                                        <span className="product-label">{result.tag1}</span>
                                        <span className="product-label">{result.tag2}</span>
                                        <div className="name-price">
                                            <h4 className="product-name">{result.name}</h4>
                                            <p className="product-price">${result.priceshow}</p>
                                        </div>
                                        <p className="product-info">{result.info}</p>
                                        <div className="cta">
                                            <Link to={`/product?q=${result.id}`}> Shop Now <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#FFFADD" }}></i></Link>
                                        </div>
                                    </div>
                                </div>)
                                : (
                                    <p>Try other filters! </p>
                                )}
                        </div>
                    </div>
                </section >

                <section id="news-campaign">
                    <div id="news">
                        <header className="subTitle-half bold">
                            <img src="/duck/images/header.png" alt="" />
                            <h2 style={{ color: "#FFFADD" }}>Latest News</h2>
                            <h3>NEWS</h3>
                        </header>
                        {renderNewsPosts(filteredNewsPosts)}
                    </div>
                    <div id="campaign">
                        <header className="subTitle-half bold">
                            <img src="/duck/images/header.png" alt="" />
                            <h2>Weekly Sale</h2>
                            <h3 style={{ color: "#22668D" }}>SALE </h3>
                        </header>
                        {renderSalesPosts(filteredSalesPosts)}
                    </div>
                </section>

                <section id="about">
                    <header className="subTitle bold" style={{ marginTop: "150px" }}>
                        <img src="/duck/images/header.png" alt="" />
                        <h2>About Quackmug</h2>
                        <h3>ABOUT US</h3>
                    </header>
                    < Navbar />
                </section >
            </main >
            <Footer />
        </ >
    )
}
