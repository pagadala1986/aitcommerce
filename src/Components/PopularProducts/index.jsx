import React, { Component } from 'react';
import "./products.css"

class PopularProducts extends Component {
    constructor() {
        super();
        this.state = {
            heading: "Popular Products",
            products: []
        }
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>{
                this.setState({products: json})
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    render() {
        return (
            <>                
                <section className='container'>
                <h1 className='bg-danger mt-2 text-light p-3'>{this.state.heading}</h1>
                    <div className='row'>
                        {
                            this.state.products &&
                            this.state.products.map((item) => {
                                return (
                                    <div className='col-md-3 p-4' key={item.id}>
                                        <div class="card p-3">
                                            <img class="card-img-top w-100 h200" src={item.image} alt="Card image" />
                                            <div class="card-body">
                                                <h4 class="card-title truncate">{item.title}</h4>
                                                <p class="card-text truncate">{item.description}</p>
                                                <a href="#" class="btn btn-primary">View More</a>
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
            </>
        )
    }
}

export default PopularProducts;
