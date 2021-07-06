import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand >Drinks </Navbar.Brand>
                <Link to="/">Home</Link>
                <Link to="fav">Favorite</Link>
            </Navbar>
        )
    }
}
export default Header;