import React from "react"
import Nav from './nav';
import Footer from './footer';


const Layout = ({ title, children }) => {
  return (
    <div>
      <header>
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
