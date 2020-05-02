import React from "react"
import Nav from './nav';
import Footer from './footer';
import LogoTop from './logotop';


const Layout = ({ title, children }) => {
  return (
    <div>
      <header>
        <LogoTop />
        <Nav />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer title={title} />
      </footer>
    </div>
  )
}

export default Layout
