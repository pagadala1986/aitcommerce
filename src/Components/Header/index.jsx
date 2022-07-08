import "./header.css"
let Header = () => {

    return (
        <header className="container-fluid header bg-dark">
            <div>
                <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo"/>
            </div>
            <nav>
                <ul className="row mt-4">
                    <li className="col-md-2">
                        <a className="text-light">Home</a>
                    </li>
                    <li className="col-md-2">
                        <a className="text-light">About</a>
                    </li>
                    <li className="col-md-2">
                        <a className="text-light">Products</a>
                    </li>
                    <li className="col-md-2">
                        <a className="text-light">Blog</a>
                    </li>
                    <li className="col-md-2">
                        <a className="text-light">Offers</a>
                    </li>
                    <li className="col-md-2">
                        <a className="text-light">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;