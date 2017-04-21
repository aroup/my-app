import React,{Component} from 'react';
// import {Card} from 'antd';
import '../styles/card.css'
import { Tag , Button} from 'antd';

// class Result extends Component {
//   render(){
//     return (
//
//         <Card style={{ width: 200 }} bodyStyle={{ padding: 10 }}>
//            <div className="custom-image">
//              <img alt="example" width="100%" src={this.props.images[0]} />
//            </div>
//            <div className="custom-card">
//              <p>{this.props.title}</p>
//              <p>{this.props.price}</p>
//            </div>
//          </Card>
//       </div>
//
//     )
//   }
// }

class Result extends Component {
  handleOnClick=()=>{
        this.props.actions.addCart({
          title: this.props.title,
          price: this.props.price
        });
  }
  render(){
    var price = this.props.price/100;
    return (
      <div className="floating-box">
        <div>
          <img alt="example" width="250" height="250" src={this.props.images[0]}/>
        </div>
        <b>{this.props.title}</b>
        <br/>
        <Tag color="#f50">${price}</Tag>
        <Button type="primary" onClick={this.handleOnClick}>Add To Cart!</Button>
        {/* <p> {this.props.asin}</p> */}
    </div>
    )
  }
}


export default Result;
