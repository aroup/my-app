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
        {/* <Menu.Item key="datepicker">
          <Link to="/datepicker">DatePicker</Link>
        </Menu.Item> */}
        <Menu.Item key="search">
          <Link to='/search'> BackPackSearch</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        {/* <Menu.Item key="appointments">
          <Link to="/appointment"> Appointments </Link>
        </Menu.Item> */}
      </Menu>
    )
  }
}

export default Header;
