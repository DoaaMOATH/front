import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
export default class MyNavbar extends Component {
    render() {
        return (
            <div className='container'>
                <Navbar>
                    <Nav>
                        <Nav.Link herf='#'> Home</Nav.Link>
                        <Nav.Link herf='#'> Menu</Nav.Link>
                        <Nav.Link herf='#'> About</Nav.Link>
                    </Nav>

                </Navbar>
            </div>
            /*
            return (
                <div className='container'>
                    <Navbar className='justify-content-end'>
                        <Nav>
                            <Nav.Link herf='#'> resume</Nav.Link>
                            <Nav.Link herf='#'> about</Nav.Link>
                            <Nav.Link herf='#'> portfolio</Nav.Link>
                        </Nav>
    
                    </Navbar>
                    <div className="grid-container">
                        <div className="flex-container">
                            <div className="image-container">
                                <img src="/Users/doaa/Desktop/front/frontend/src/assets/Image/imgF.png" alt="Your Image" />
                            </div>
                            <div className="text-container">
                                <h1>Marina Lakotka</h1>
                                <h2>UI/UX designer</h2>
                                <p>As a designer, I highly value the ability to bring a client’s vision to life, which is very rewarding. There is a huge amount of satisfaction I gain from seeing a piece of work from idea to design, especially when it appears in the user hands. I believe the user-centred solutions are the most valuable future digital resources.</p>
                            </div>
                        </div>
                    </div>
                </div>
                */
        );
    }
}