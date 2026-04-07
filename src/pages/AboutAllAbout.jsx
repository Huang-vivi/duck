import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Navtable } from '../components/component.jsx';

export default function AboutAllAbout() {
  // 當進入此頁面時，動態更改網頁標題
  useEffect(() => {
    document.title = "三杯鴨-關於三杯鴨";
  }, []);

  return (
    <>
      <Header active="about-allabout" />
      <main>
        <section >
          <header className="subTitle bold first-header">
            <img src="./images/header.png" alt="" />
            <h2>關於三杯鴨</h2>
            <h3>ABOUT US</h3>
          </header>
          <div className="top-class">
            <nav style={{ "--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")" }} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">關於三杯鴨</li>
              </ol>
            </nav>
          </div>
          <div className="nav-contact">
            <Navtable active="allabout" tab1="allabout" tab2="qa" tab3="contact-us" tab4="privacy" topic="about" tabname="關於三杯鴨" tab2name="購物ＱＡ" tab3name="聯絡我們" tab4name="隱私權政策" noshow5="collapse" />
            <div className="contact-main">
              <div className="contact-img"> </div>
              <div className="contact-content">
                <h4>關於三杯鴨</h4>
                <div className="paragraph">
                  <h5>為生活注入儀式感</h5>
                  <p>『每個人都值得擁有好杯鴨！』</p>
                  <p>三杯鴨馬克杯的創立，源自於對生活中小確幸的重視。馬克杯是生活中容易被忽略之物，然而三杯鴨馬克杯期望能陪伴你的日常。無論是溫暖陪伴寒冷的冬天，沁涼你的炎炎夏日，還是成為埋首時的精神支柱，或者親友相聚的歡樂時光，我們都希望能讓你在繁忙的日子中找到片刻的溫馨。</p>
                </div>
                <div className="paragraph">
                  <h5>獨特設計與品質保證</h5>
                  <p>『專注於挑選、設計獨特的鴨子造型馬克杯～』</p>
                  <p>三杯鴨馬克杯以其獨特的鴨子造型脫穎而出，每一款設計都充滿了創意與心意。我們不僅堅持使用無毒安全的材質，更以職人精神，打造出有故事、有溫度的馬克杯。每一隻馬克杯都經過精心挑選和設計，讓你在每一個值得舉杯的時刻，都能感受到三杯鴨的用心與關懷。</p>
                </div>
                <div className="paragraph">
                  <h5>溫暖陪伴每一天</h5>
                  <p>三杯鴨馬克杯希望能成為你日常生活中的暖心陪伴者。無論是寒冷的冬天，還是炎熱的夏日，三杯鴨馬克杯都會陪伴在你身邊，讓你在忙碌的日子中找到片刻的寧靜與溫暖。我們堅持提供最好的品項，讓每一個值得舉杯的時刻都更加美好，陪伴你度過人生的每一個起伏，無論是歡笑還是挑戰。</p>
                </div>
              </div>
            </div>
          </div>
        </section >
      </main >
      <Footer />
    </>
  );
}
