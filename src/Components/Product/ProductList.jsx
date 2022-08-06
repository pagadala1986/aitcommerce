import React, { Component } from 'react';
import Product from '.';
import {addToCartAction} from '../../store/actions/cartActions';

import { connect } from 'react-redux';

class ProductList extends Component {
    addToCart = (product) => {
        this.props.addToCart(product);
        this.setState({
            inCart:true
        })
    }
    render() {
        return (
            <div className='container'>
                <h2>List of Products</h2>
                <hr />
                <div className='row'>
                    {
                        this.props.products.map((product) => <Product 
                                                                addToCart={this.addToCart} 
                                                                product={product} 
                                                                key={product.id} 
                                                                inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 }/>)
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        products: state.product.products,
        cart: state.cart.cart
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCartAction(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
