import { Spin, Alert } from 'antd';
import React,{Component} from 'react';
class LoadingBar extends Component{
  render(){
    return(
      <div>
        <Spin tip="Loading...">
          <Alert
            message="BackPackSearch Is Working"
            description="Wait while the magic of async happens!"
            type="info"
          />
        </Spin>
      </div>
    )
  }
}

export default LoadingBar
