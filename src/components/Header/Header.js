import React from 'react'
import { IndexLink, Link } from 'react-router'
import Logo from '../../img/logo.png'
import './Header.scss'

let data = require('../../routes/Home/assets/data.json')


class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
        //console.log('header props', this)
    }

render() {
    return(
      <div className="navbar" ref={'header'} >
          <div className="container">
              <img src={Logo} className="img-responsive" />
          </div>
      </div>)
    }
}

export default Header
