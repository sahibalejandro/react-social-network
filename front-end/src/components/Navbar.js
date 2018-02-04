import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
                <div className="container">
                    <div className="navbar-brand">Social Network</div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;
