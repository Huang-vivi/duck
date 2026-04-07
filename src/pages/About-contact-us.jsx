import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Navtable } from '../components/component.jsx';

export default function AboutContactUs() {
        // 當進入此頁面時，動態更改網頁標題
        useEffect(() => {
          document.title = "三杯鴨-聯絡我們";
        }, []);

        return (
          <>
            <Header active="about-contact-us" />
            <main>
              <section >
                <header className="subTitle bold first-header">
                  <img src="./images/header.png" alt="" />
                  <h2>聯絡我們</h2>
                  <h3>CONTACT US</h3>
                </header>
                <div className="top-class">
                  <nav style={{
                    "--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")"
                  }}
                    aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item " ><Link to="/about-allabout"> 關於三杯鴨</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">聯絡我們</li>
                    </ol>
                  </nav>
                </div>
                <div class="nav-contact">
                  <Navtable active="contact-us" tab1="allabout" tab2="qa" tab3="contact-us" tab4="privacy"  topic="about" tabname="關於三杯鴨" tab2name="購物ＱＡ" tab3name="聯絡我們" tab4name="隱私權政策" noshow5="collapse" />
                  <div class="contact-main">
                    <div className="contact-img"> </div>
                    <div className="contact-form">
                      <p>歡迎來到三杯鴨！<br />如果您對我們鴨子馬克杯有任何疑問、建議或訂購需求，請隨時與我們聯繫。<br />請填寫下方的聯絡表單三杯鴨將盡快回覆！</p>
                      <form class="smoove form" action="" name="form-contact" id="form-contact" title="聯絡我們表單" method="post">

                        <div>
                          <label htmlFor="username">*姓名</label>
                          <input type="text" className="form-control" name="username" id="username" title="請輸入姓名" placeholder="(必填)請輸入姓名" required />
                        </div>
                        <div>
                          <label htmlFor="usertel">電話</label>
                          <input type="tel" className="form-control" name="usertel" id="usertel" title="請輸入電話" placeholder="請輸入電話" />
                        </div>

                        <div>
                          <label htmlFor="email">*信箱</label>
                          <input type="email" className="form-control" name="email" id="email" title="請輸入信箱" placeholder="(必填)請輸入信箱" required />
                        </div>

                        <div>
                          <label htmlFor="message">*留言</label>
                          <textarea name="message" className="form-control" id="message" placeholder="(必填)請留下訊息，我們將盡快回覆" cols="" rows="3"></textarea>
                          <small>此表單為練習作品，不具有商業行為及搜集資料的功能</small>
                        </div>

                        <button type="submit" class="btn-form my-button submitBtn">
                          <span>送出</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section >
            </main >
            <Footer />
          </>);
      }
