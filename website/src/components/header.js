import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "../components/image"
import logo from "../images/hammock_6_200.png";


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `0.5rem` }}>
    <Link
      style={{
        color: 'white',
        textDecoration: `none`,
        padding: '1px 3px',
      }}
      activeStyle={activeStyles}
      to={props.to}>{props.children}
    </Link>
  </li>
)

const activeStyles = {
  background: 'white',
  // color: 'darkolivegreen',
  color: '#212121',
  // textDecorationLine: 'underline',
}

const Header = ({ siteTitle }) => (
  <div style={{ background: '#2d2d2d', padding: `1rem` }}>
  {/* <div style={{ background: '#0f3e0f', padding: `1rem` }}> */}
    <header
      style={{
        // background: `grey`,
        // marginBottom: `1.5rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textShadow: `none`,
          textDecoration: `none`,
          backgroundImage: `none`,
        }}
      >
        <h3 style={{ display: `inline` }}>{siteTitle}</h3>
        {/* <img src={logo}/> */}
      </Link>
      <ul className="content"
        style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
