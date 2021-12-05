import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";

const Header = () => {
    const {data: session, status} = useSession();

    const logout = e => {
        e.preventDefault();
        signOut({callbackUrl: '/login'});
    }

    if(status === "loading"){
        return "loading";
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link href="/"><Navbar.Brand href="/">React-Bootstrap</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href="/features"><Nav.Link href="/features">Features</Nav.Link></Link>
                        <Link href="/pricing"><Nav.Link href="/pricing">Pricing</Nav.Link></Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <Link href="/actions/3.1"><NavDropdown.Item href="/actions/3.1">Action</NavDropdown.Item></Link>
                            <Link href="/actions/3.2"><NavDropdown.Item href="/actions/3.2">Another action</NavDropdown.Item></Link>
                            <Link href="/actions/3.3"><NavDropdown.Item href="/actions/3.3">Something</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Link href="/actions/3.4"><NavDropdown.Item href="/actions/3.4">Separated link</NavDropdown.Item></Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link href="/deets"><Nav.Link href="/deets">More deets</Nav.Link></Link>
                        <Link href="/memes"><Nav.Link eventKey={2} href="/memes">
                        Dank memes
                        </Nav.Link></Link>
                        {session && session.user ? (
                            <Link href="/features"><Nav.Link onClick={logout} href="/features">Logout</Nav.Link></Link> )
                            : 
                            (<Link href="/login"><Nav.Link href="/login">Login</Nav.Link></Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
