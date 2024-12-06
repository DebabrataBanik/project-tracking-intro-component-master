function App() {
  return (
    <>
      <div className="design"></div>
      <div className="wrapper">
        <header>
          <div className="logo__container">
            <img src="images/logo.svg" alt="logo" />
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#">PRODUCT</a></li>
              <li><a href="#">FEATURES</a></li>
              <li><a href="#">PRICING</a></li>
            </ul>
            <span></span>
            <a href="#" className="login">LOGIN</a>
          </nav>
          <div className="mobile-nav">
            <img className="hamburger" src="images/icon-hamburger.svg" alt="icon-hamburger" />
            <img className="close hide" src="images/icon-close.svg" alt="icon-close" />
          </div>
        </header>
        <main className="container">

          <section className="hero__content">
            <span><span className="new">New</span> Monograph Dashboard</span>
            <h1>powerful insights into your team</h1>
            <p>Project planning and time tracking for agile teams</p>

            <div className="submit__container">
              <button className="submit">Schedule a demo</button>
              <span>to see a preview</span>
            </div>

          </section>

          <div className="hero__illustration">
            <img src="images/illustration-devices.svg" alt="illustration-devices" />
          </div>

        </main>
      </div>
    </>
  )
}

export default App