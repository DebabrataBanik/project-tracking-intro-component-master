import Navigation from "./components/Navigation"
import { useState } from "react"

function App() {

  const [closeHarburger, setCloseHarburger] = useState(false)
  const toggleNav = () => {
    setCloseHarburger(!closeHarburger)
  }

  return (
    <>
      <div className="design"></div>
      <div className="wrapper">
        <header>
          <div className="logo__container">
            <img src="images/logo.svg" alt="logo" />
          </div>
          <Navigation hamState={closeHarburger} />
          <div
            onClick={toggleNav}
            className="mobile-nav">
            {
              closeHarburger ?
                <img className="close" src="images/icon-close.svg" alt="icon-close" />
                :
                <img className="hamburger" src="images/icon-hamburger.svg" alt="icon-hamburger" />
            }
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