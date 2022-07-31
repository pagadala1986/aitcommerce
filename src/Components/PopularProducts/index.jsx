import React, { Component } from 'react';
import "./products.css"
import axios from 'axios';
import { Link } from "react-router-dom";

class PopularProducts extends Component {
    intervalID = 0;
    constructor() {
        super();
        this.state = {
            heading: "Popular Products",
            products: []
        }
    }
    welcome = () => {        
        console.log(`Welcome to ReactJs Training!`);
    }

    componentDidMount(){
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then((json)=>{
        //         this.setState({products: json})
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //     })

        axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            console.log(res);
            this.setState({products: res.data});
            //this.state.products = res.data;
        });

        // implementing setInterval method
        this.intervalID = setInterval(() => this.welcome(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    render() {
        return (             
            <section className='container'>
                <h1 className='bg-danger mt-2 text-light p-3'>{this.state.heading}</h1>
                    <div className='row'>
                        {
                            this.state.products &&
                            this.state.products.map((item) => {
                                return (
                                    <div className='col-md-3 p-4' key={item.id}>
                                        <div className="card p-3">
                                            <img className="card-img-top w-100 h200" src={item.image} alt="Card image" />
                                            <div className="card-body">
                                                <h4 className="card-title truncate">{item.title}</h4>
                                                <p className="card-text truncate">{item.description}</p>
                                                <Link to={`know-more-product/${item.id}`} className='btn btn-secondary'>View More</Link>
                                                <Link to="edit-product" className="btn btn-primary me-4">Edit</Link>
                                                <a href="#" className="btn btn-danger">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        {/* {(this.state.products && this.state.products.length==0 )  {
                            
                            <span className='text-danger'>There is No Products to Display!</span>
                        
                        }} */}
                        

                    </div>
                </section>
        )
    }
}

export default PopularProducts;
