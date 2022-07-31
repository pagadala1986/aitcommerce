import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const About = (props) => {

    // const [title, setTitle] = useState("AchieversIT training Institute in Bangalore");
    // const [trainer, setTrainer] = useState("Murali");
    const [heading,setHeading] = useState("Popular Products")
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                console.log(res);
                setProducts(res.data)
            });
        return()=>{
            console.log('Side effects are going to be cleanedup here');
        }
    }, [products])
    return (
        <>
            {/* <h1 className="bg-danger p-2 m-1">{title}<button onClick={()=>setTitle("Welcome to ReactJs Training")}>Update Title</button></h1>
            <h1 className="bg-danger p-2 m-1">{trainer}<button onClick={()=>setTrainer("Murali Pagadala")}>Update Trainer</button></h1> */}
            <section className='container'>
                <h1 className='bg-danger mt-2 text-light p-3'>{heading}</h1>
                <div className='row'>
                    {
                        products &&
                        products.map((item) => {
                            return (
                                <div className='col-md-3 p-4' key={item.id}>
                                    <div className="card p-3">
                                        <img className="card-img-top w-100 h200" src={item.image} alt="Card image" />
                                        <div className="card-body">
                                            <h4 className="card-title truncate">{item.title}</h4>
                                            <p className="card-text truncate">{item.description}</p>
                                            <Link to={`../know-more-product/${item.id}`} className='btn btn-secondary'>View More</Link>
                                            <Link to="edit-product" className="btn btn-primary me-4">Edit</Link>
                                            <a href="#" className="btn btn-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )

}

export default About;