import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ children }) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container">
                        <Link className="navbar-brand" to={'/'}>Navbar</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle Navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                        role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Dropdown
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" href="#">Action</Link>
                                        <Link className="dropdown-item" href="#">Another action</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" href="#">Something else here</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                                        Disabled
                                    </Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default Navigation;