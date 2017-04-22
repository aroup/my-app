import { Menu } from 'antd';
import React,{Component} from 'react';
import { Link} from 'react-router';


class Header extends Component {
  render(){
    return (
      <Menu mode="horizontal">
        <Menu.Item key="Software">
          <h3> React Redux SPA </h3>
        </Menu.Item>
        <Menu.Item key="search">
          <Link to='/my-app'> BackPackSearch</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
