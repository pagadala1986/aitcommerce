import React, { Component } from 'react';
import pageNotfound from "../../assets/404.jpg"

class PageNotFound extends Component {
  render() {
    return (
        <>
            <div className='w-75 mx-auto'>
                <img src={pageNotfound} alt="Page not found" />
            </div>
            
        </>
    )
  }
}

export default PageNotFound;


