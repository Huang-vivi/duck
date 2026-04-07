import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Member() {
  // 驗證密碼
  function SignUpForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setPasswordMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
      setPasswordMatch(e.target.value === password);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert('密碼不匹配，請重新輸入');
        return;
      }
      // 处理表单提交逻辑
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">請輸入信箱</label>
          <input id="username" type="email" className="form-control" name="username" value={username}
            onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">請輸入新密碼</label>
          <input id="password" type="password" className="form-control" name="password" value={password}
            onChange={handlePasswordChange} required />
        </div>
        <div>
          <label htmlFor="password-confirm">請再次輸入密碼</label>
          <input id="password-confirm" type="password" className="form-control" name="password-confirm" value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required />
          {!passwordMatch && (
            <div className="text-danger">密碼不匹配，請重新輸入</div>
          )}
        </div>

        <button type="submit" className="btn my-button btn-primary submitBtn">快速註冊</button>
      </form>
    )
  }

  // 新聞切換按鈕
  const MemberTabs = () => {
    const [activeTab, setActiveTab] = useState('signup');

    useEffect(() => {
      const activeElement = document.querySelector('.tab.active');
      if (activeElement) {
        const target = activeElement.getAttribute('checkname');
        setActiveTab(target);
      }
    }, []);

    const handleClick = (event, id) => {
      event.stopPropagation();
      event.preventDefault();
      setActiveTab(id);
    };

    return (
      <>
        <ul className="login-tab">
          <li
            className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={(e) => handleClick(e, 'signup')} checkname="signup" >
            <a href="#signup">註冊</a></li>
          <li className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={(e) => handleClick(e, 'login')} checkname="login" >
            <a href="#login">登入</a></li>
        </ul>

        <div className="form-content">
          <div id="signup" className={` ${activeTab === 'signup' ? 'show' : 'collapse'} `}>
            <h2>快速註冊領折扣！</h2>
            <SignUpForm />
          </div>

          <div id="login" className={` ${activeTab === 'login' ? 'active show' : 'collapse'} `}>
            <h2>Welcome Back!</h2>
            <form action="/" method="post">
              <div id="signup-email">
                <label htmlFor="login-username">使用者信箱</label>
                <input id="login-username" type="email" className="form-control" name="username" required />
              </div>
              <div>
                <label htmlFor="login-password">密碼</label>
                <input id="login-password" type="password" className="form-control" name="password" required />
              </div>
              <p className="forgot"><a href="#">Forgot Password?</a></p>
              <button type="reset" className="btn my-button btn-primary ">登入</button>
            </form>
          </div>
        </div>
      </>);
  }

  return (
    <>
      <Header active="member" />
      <main>
        <section >
          <div className="top-class first-header">
            <nav style={{ "--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")" }} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">會員專區</li>
              </ol>
            </nav>
          </div>
          <div className="member">
            <div className="member-info">
              <header className="subTitle bold subTitle-half ">
                <img src="./images/header.png" alt="" />
                <h2>會員權益</h2>
                <h3>MEMBER</h3>
              </header>
              <div className="member-info-mobile">
                <p>
                  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    點我看會員制度
                  </a>
                </p>
                {/* 折疊表格內容省略，與原 HTML 相同 */}
              </div>

              <table className=" member-info-web table text-center align-middle ">
                <thead >
                  <tr className="bold">
                    <th scope="col"></th>
                    <th scope="col"><i className="fa-solid fa-hat-cowboy fa-2xl"></i><br />勇者鴨</th>
                    <th scope="col"><i className="fa-brands fa-pied-piper-hat fa-2xl"></i><br />劍士鴨</th>
                    <th scope="col"><i className="fa-solid fa-hat-wizard fa-2xl"></i><br /> 王者鴨</th>
                  </tr>
                </thead>
                {/* 表格內容省略，與原 HTML 相同 */}
              </table>
            </div>

            <div className="member-login">
              <MemberTabs />
            </div>
          </div>
        </section>
      </main >
      <Footer />
    </>
  )
}
