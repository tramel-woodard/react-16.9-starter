import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ children }) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={'/'}>React 16.9 Starter</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle Navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                        role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Categories
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to={'/users'}>Users</Link>
                                        <Link className="dropdown-item" to={'/comments'}>Comments</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to={'/todos'}>Todos</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/contact'}>Contact</Link>
                                </li>
                            </ul>
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
