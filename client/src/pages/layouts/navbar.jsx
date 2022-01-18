import React from "react";
import { useSelector } from "react-redux";
import "../../styles/layout.css"
import 'font-awesome/css/font-awesome.min.css';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useEffect } from "react";
import { getUserInfo } from "../../redux/reducers/auth";
import { useDispatch } from "react-redux";
import { getToken } from "../../api/authenticationService";
import { useHistory } from "react-router-dom";

export default function NavigationBar() {
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        if (getToken() !== null) {
            dispatch(getUserInfo())
        }
    }, []);

    const auth = useSelector(state => state.auth)

    const onLogoutClicked = () => {
        localStorage.clear();
    }

    return (
        <div className="nav1">
            <Navbar expand="lg" className="navbar navbar-dark pb-3">
                <Container fluid>
                    <Navbar.Brand href="/" className="title text-white">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        {/* LEFT ELEMENTS */}
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link className="title text-white" href="/">Home</Nav.Link> */}
                            <NavDropdown title="Books" id="navbarScrollingDropdown" className="title text-white">
                                <NavDropdown.Item >Books</NavDropdown.Item>
                                <NavDropdown.Item >Articles</NavDropdown.Item>
                                <NavDropdown.Item >Journals</NavDropdown.Item>
                            </NavDropdown>
                            {/* <NavDropdown title="Something" id="navbarScrollingDropdown" className="title text-white">
                                <NavDropdown.Item href="#">Categories</NavDropdown.Item>
                                <NavDropdown.Item href="#">Sub-categories</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>

                        {/* RIGHT ELEMENTS */}
                        {Object.keys(auth.userInfo).length === 0 ?
                            // Not yet login
                            <div class="d-flex align-items-center">
                                <button type="button" class="btn btn-link px-3 me-2" onclick="location.href='/login'">
                                    <a href="/login" className="text-white">Login</a>
                                </button>
                                <button type="button" class="btn btn-primary me-3">
                                    <a href="" className="text-white">Sign up for free</a>
                                </button>
                            </div>
                            :
                            // Logged in
                            <div class="d-flex align-items-center">
                                {/* <NavDropdown
                                    title={
                                        <span>
                                            <i className='fa fa-shopping-cart'></i>
                                        </span>
                                    }
                                    id='collasible-nav-dropdown'>
                                    <NavDropdown.Item href='#'>Action 1</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>Action 2</NavDropdown.Item>
                                </NavDropdown> */}
                                <NavDropdown
                                    title={
                                        <span className="light">
                                            <i className="fa fa-bell" />
                                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                        </span>
                                    }
                                    id='collasible-nav-dropdown 2'>
                                    <NavDropdown.Item href='#'>Check notification</NavDropdown.Item>
                                    {/* <NavDropdown.Item href='#'>Action 2</NavDropdown.Item> */}

                                </NavDropdown>
                                <NavDropdown
                                    title={
                                        <span>
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xHgTTH_-cVD9Yb3AgK2tJNyLXscPmyXVbAWkHMZCyv3GN6KU-XvqLrF4EtvVznDIXgs&usqp=CAU"
                                                class="rounded-circle"
                                                height="25"
                                                alt="Black and White Portrait of a Man"
                                                loading="lazy" />
                                        </span>
                                    }
                                    id='collasible-nav-dropdown'>
                                    <NavDropdown.Item>{auth.userInfo.userName}</NavDropdown.Item>
                                    <hr />
                                    <NavDropdown.Item href='/user-profile'>User Profile</NavDropdown.Item>
                                    <NavDropdown.Item href='/' onClick={() => onLogoutClicked()}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}