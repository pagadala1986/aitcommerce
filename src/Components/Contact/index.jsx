import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Contact = () =>{
    const [errorMessages,setErrorMessages] = useState({});
    const [isSubmitted,setIsSubmitted] = useState(false);
    
    // dummy database user details
    const userDetails = [
        {
            username:"murali",
            password:'murali123'
        },
        {
            username:"Chaitra",
            password:"chaitra123"
        }
    ];

    const errors = {
        uname: "Please enter Username field",
        pass : "Please enter Password field"
    }
    // handle submit
    const handleSubmit = ($event)=>{
        $event.preventDefault();
        var {uname,pass} = document.forms[0];
        const userData = userDetails.find((user)=>user.username===uname.value);
        console.log(userData);
        // comparing user infor
        if(userData){
            if(userData.password !== pass.value){
                //set error message
                setErrorMessages({name:"pass",message: errors.pass});
            }else{
                setIsSubmitted(true);
            }
            
        }else{
            setErrorMessages({name: uname, message:errors.uname});
        }

        

    }
    const handleErrorMessage = (name) =>{
        name === errorMessages.name && (
            <div className='error'>{errorMessages.message}</div>
        )
    }
    return(
        <section className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" name="uname" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text><br/>
                                {handleErrorMessage('uname')}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="pass" placeholder="Password" />
                                {handleErrorMessage('pass')}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
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
// class Contact extends Component {
//     render() {
//         return (
            // <section className='container'>
            //     <div className='row'>
            //         <div className='col-md-12'>
            //             <Form>
            //                 <Form.Group className="mb-3" controlId="formBasicEmail">
            //                     <Form.Label>Email address</Form.Label>
            //                     <Form.Control type="email" placeholder="Enter email" />
            //                     <Form.Text className="text-muted">
            //                         We'll never share your email with anyone else.
            //                     </Form.Text>
            //                 </Form.Group>

            //                 <Form.Group className="mb-3" controlId="formBasicPassword">
            //                     <Form.Label>Password</Form.Label>
            //                     <Form.Control type="password" placeholder="Password" />
            //                 </Form.Group>
            //                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
            //                     <Form.Check type="checkbox" label="Check me out" />
            //                 </Form.Group>
            //                 <Button variant="danger" type="submit">
            //                     Submit
            //                 </Button>
            //             </Form>
            //         </div>
            //     </div>
            // </section>

//         )
//     }
// }

export default Contact;
