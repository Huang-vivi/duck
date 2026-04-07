import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Navtable } from '../components/component.jsx';

export default function AboutQa() {
        // 當進入此頁面時，動態更改網頁標題
        useEffect(() => {
          document.title = "三杯鴨-常見問題";
        }, []);

        return (
          <>
            <Header active="about-allabout" />
            <main>
              <section >
                <header className="subTitle bold first-header">
                  <img src="./images/header.png" alt="" />
                  <h2>常見問題</h2>
                  <h3>ABOUT QA</h3>
                </header>
                <div className="top-class">
                  <nav style={{
                    "--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")"
                  }}
                    aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item " ><Link to="/about-allabout"> 關於三杯鴨</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">關於三杯鴨</li>
                    </ol>
                  </nav>
                </div>
              <div className="nav-contact">
                  <Navtable active="qa" tab1="allabout" tab2="qa" tab3="contact-us" tab4="privacy" topic="about" tabname="關於三杯鴨" tab2name="購物ＱＡ" tab3name="聯絡我們" tab4name="隱私權政策" noshow5="collapse" />
                <div className="contact-main">
                    <div className="contact-img"> </div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            如何追蹤我的訂單？
                          </button>
                        </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            登錄您的帳號，前往「我的訂單」頁面，選擇您要查看的訂單，點擊「查看詳情」即可查看訂單的最新狀態和物流信息。
                          </div>
                        </div>
                      </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                            如何使用優惠券？
                          </button>
                        </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            在結帳頁面，您會看到一個「優惠券代碼」的輸入框，輸入您獲得的優惠券代碼並點擊「應用」，系統會自動計算並減去相應的優惠金額。
                          </div>
                        </div>
                      </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            配送時間需要多久？
                          </button>
                        </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong> 配送時間根據您的地點和選擇的配送方式而有所不同。</strong>國內標準配送通常需要5-7個工作日，加急配送需要2-3個工作日。國際配送時間則可能會更長一些，具體時間請參考結帳頁面的配送預估。
                          </div>
                        </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              忘記密碼怎麼辦？
                            </button>
                          </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                              在登錄頁面，點擊「忘記密碼？」連結，輸入您註冊時使用的電子郵件地址。我們會發送一封重設密碼的郵件給您，按照郵件中的指示重設密碼即可。如果您在重設密碼過程中遇到任何問題，請隨時聯繫客服尋求幫助。
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section >
            </main >
            <Footer />
          </>);
      }
