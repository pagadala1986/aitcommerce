import React, { Component } from 'react';

class KnowMoreProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      editProduct:[]
    }
    
  }
  componentDidMount(){
    const pid = window.location.pathname.split("/")[2];
    //let { id } = this.props.match.params;
    if(pid){
    fetch(`https://fakestoreapi.com/products/${pid}`)
          .then(res=>res.json())
          .then(json=>{
            this.setState({editProduct: json})
            console.log(json)
          
          })
    }
    
  }
  render() {
    return (
      <div>KnowMoreProduct</div>
    )
  }
}

export default KnowMoreProduct;
