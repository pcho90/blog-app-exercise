import React from "react";
import "./Layout.Style.css";
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div className="layout">
    <Header />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
