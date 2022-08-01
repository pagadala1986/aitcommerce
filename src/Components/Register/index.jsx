import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName:null,
            email:null,
            password:null,
            errors:{
                fullName: '',
                email: '',
                password: ''
            }
        }

    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    handleChange = (event) =>{
        //event.preventDefault();
        const {name,value} = event.target;
        let errors = this.state.errors;
        // define the email regular expression here
        switch(name){
            case "fullName":
                errors.fullName = value.length<4 ? "Fullname should be minimum of 4 characters" : '';
                break;
            default:
                break;
        }
        this.setState({errors,[name]:value},()=>{
            
        })
    }
    render() {
        const {errors} = this.state;
        return (
            <section className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name="fullName" placeholder="Enter email" onChange={this.handleChange} />
                                {errors.fullName.length>0 &&
                                    <span className="text-danger">{errors.fullName}</span>
                                }
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="danger" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register;