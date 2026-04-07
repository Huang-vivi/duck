import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { fetchPostData } from '../components/component.jsx';

export default function News() {
    const [postData, setPostData] = useState([]);

    // 使用 React Router 的 Hook 來獲取 ?q= 的參數
    const [searchParams] = useSearchParams();
    const urlId = searchParams.get('q');

    useEffect(() => {
        document.title = "三杯鴨-最新消息";
        const fetchData = async () => {
            const data = await fetchPostData();
            if (data) {
                const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setPostData(data);
            }
        };
        fetchData();
    }, []);

    const post = postData.find(item => item.postId === urlId);

    const renderPosts = () => {
        if (!post) {
            return <div>Loading...</div>;
        }
        return (
            <NewsDetail key={post.postId} {...post} />
        )
    };

    const NewsDetail = ({ postId, url, title, date, type, content, content2 }) => {
        return (
            <>
                <div className="top-class">
                    <nav style={{ "--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")" }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/all-news">所有消息</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                    </nav>
                </div>
                <div className="post-content">
                    <div className="post-top">
                        <h1>{title}</h1>
                        <div>{date}</div>
                    </div>
                    <div className="post-main">
                        <div>
                            <img className="postImg" src={`./images/bg${url}.jpeg`} alt="" />
                        </div>
                        <p className="postInfo"> {content} </p>
                        <p className="postInfo"> {content2} </p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header active="all-news" />
            <main>
                <section className="news-center" >
                    <header className="subTitle bold first-header">
                        <img src="./images/header.png" alt="" />
                        <h2>最新消息</h2>
                        <h3>NEWS</h3>
                    </header>
                    {renderPosts()}
                </section>
            </main >
            <Footer />
        </>
    )
}
