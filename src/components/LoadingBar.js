import { Spin } from 'antd';
import React,{Component} from 'react';
class LoadingBar extends Component{
  render(){
    return(
      <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Spin tip="Loading">
          <br/>
        </Spin>
      </div>
    );
  }
}

export default LoadingBar;
