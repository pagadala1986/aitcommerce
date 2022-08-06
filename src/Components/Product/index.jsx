import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: this.props.inCart
    }
  }
  addToCart = (e) => {
    e.preventDefault();
    this.props.addToCart(this.props.product)
  }
  render() {
    const { product } = this.props;
    return (
      <div className='col-md-3'>
        <div className="card">
          <img className="card-img-top" src={product.image} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price}</p>
            {
              this.state.inCart ? (<span className='btn btn-success'>Added to Cart</span>) : (<a href="#" className="btn btn-primary" onClick={this.addToCart}>Add To Cart</a>)
            }

          </div>
        </div>
      </div>
    )
  }
}

export default Product;
