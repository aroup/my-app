import React, { Component } from 'react';
import Result from './Result';
// import {Row} from 'antd'
class ResultList extends Component{
  render(){
    var {results} = this.props;
    var Listed=results.map((result)=>{
      let title= '';
      let price= 0;
      if(result._source.title){
        title = result._source.title
      }
      if(result._source.price){
        price = result._source.price
      }
      return (
          <Result actions={this.props.actions} key={result._id} title={title} images={result._source.images} price={price} asin={result._source.asin}/>
      )
    })
    return(
      <div>
        {Listed}
      </div>
    )
  }
}

export default ResultList;
