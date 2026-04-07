import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { fetchPostData } from '../components/component.jsx';

export default function AllNews() {
                // 當進入此頁面時，動態更改網頁標題
                useEffect(() => {
                    document.title = "三杯鴨-最新消息";
                }, []);

                const [postData, setPostData] = useState([]);

                //讀取json資料
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

                //渲染json資料 函式
                const renderPosts = (posts) => {
                    return (<>
                        {posts.map((post) => (
                            < News
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
                    </>)
                };

                //建立news元件
                const News = ({ postId, url, title, date, type, content, content2 }) => {
                    return (
                        <>
                            <div className="post">
                                <Link to={`/news?q=${postId}`}>
                                    <div className="labelImg">
                                        <img className="postImg" src={`./images/bg${url}.jpeg`}
                                            alt="" />
                                        <p className="postType"> {type} </p>
                                    </div>
                                </Link>
                                <div className="titleTime">
                                    <Link to={`/news?q=${postId}`}>
                                        <h3 className="postTitle">{title}</h3>
                                    </Link>
                                    <p className="postDate"> {date} </p>
                                </div>
                                <p className="postInfo"> {content} </p>
                            </div>
                        </>
                    );
                }

                //新聞切換按鈕
                const NewsTabs = ({ NewsData }) => {
                    const [activeTab, setActiveTab] = useState('最新公告');
                    const handleTabClick = (tab) => {
                        setActiveTab(tab);
                    };

                    // 根據選項按钮显示不同的介绍文本
                    const getTabContent = () => {
                        const filteredPosts = postData.filter(post => post.type === activeTab);

                        if (filteredPosts.length === 0) {
                            return <p>目前尚未有公告！</p>;
                        }
                        switch (activeTab) {
                            case '最新公告':
                                return (
                                    <>
                                        <div className="post-list active" id="最新公告">
                                            {renderPosts(filteredPosts)}
                                        </div >
                                    </>);
                            case '最新優惠':
                                return (<>
                                    <div className="post-list active " id="最新優惠">
                                        {renderPosts(filteredPosts)}
                                    </div>
                                </>);
                        }
                    };

                    return (
                        <>
                            <div className="newsContent">
                                <div className="newsMenu">
                                    <ul className="newsTab">
                                        <li>
                                            <a
                                                className={`news-button ${activeTab === '最新公告' ? 'active' : ''}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleTabClick('最新公告')
                                                }}
                                                href="#"
                                            >
                                                <h3>最新公告<i className={`fa-solid fa-mug-hot fa-lg ${activeTab === '最新公告' ? 'show' : 'collapse'}`} style={{ color: '#FFFADD' }}></i> </h3></a> </li>
                                        <li>
                                            <a
                                                className={`news-button ${activeTab === '最新優惠' ? 'active' : ''}`}
                                                onClick={(e) => {
                                                    e.preventDefault(); handleTabClick('最新優惠')
                                                }}
                                                href="#"
                                            >
                                                <h3>最新優惠<i className={`fa-solid fa-mug-hot fa-lg ${activeTab === '最新優惠' ? 'show' : 'collapse'}`} style={{ color: '#FFFADD' }}></i></h3>
                                                </a> </li>
                                    </ul >
                                </div>
                                {getTabContent(activeTab)}
                            </div>
                        </>
                    )
                }

                return (
                    <>
                        <Header active="all-news" />
                        <main>
                            <section>
                                <header className="subTitle bold first-header">
                                    <img src="./images/header.png" alt="" />
                                    <h2>最新消息</h2>
                                    <h3>NEWS</h3>
                                </header>
                                <div className="top-class">
                                    <nav style={{
                                        "--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")"
                                    }}
                                        aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">最新消息</li>

                                        </ol>
                                    </nav>
                                </div>
                                <NewsTabs NewsData={postData} />
                            </section>
                        </main >
                        <Footer />
                    </>);
}
