import React, { Component } from 'react';

class KnowMoreProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      editProduct:[],
      singleItem:"test"
    }
    //this.changeItem = this.changeItem.bind();
  }
  // getDerivedStateFromProps(props,state){
  //   return {singleItem:props.prod}
  // }
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
  changeItem = (name,$event) =>{
    //alert(name);
    console.log($event);
    this.setState({singleItem:{id:1,name:"test",desc:"test description"}});
  }
  shouldComponentUpdate(){
    return true
  }
  render() {
    return (
      <>
        <div>KnowMoreProduct</div>
        <button onClick={() => this.changeItem("testing")}>Update Single Item</button>
        {
          this.state.singleItem?.desc
        }
      </>
      
    )
  }
}

export default KnowMoreProduct;
