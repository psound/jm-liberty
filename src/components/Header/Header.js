import React from 'react'
import { IndexLink, Link } from 'react-router'
import Logo from '../../img/logo.png'
import './Header.scss'

let data = require('../../data/data.json')

export const Header = () => (

  <div className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <img src={Logo} className="img-responsive" />
         </div>
         <div className="subheaderbar" >
             <em>{data.quizName}</em>
         </div>
      </div>
  </div>
)

export default Header
