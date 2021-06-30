import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
const Header = () => {
    return (
        <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
            <Navbar.Brand href="/">GoShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="/cart" style={{marginLeft:"10px"}}><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                <Nav.Link href="/login" style={{marginLeft:"10px"}}><i className='fas fa-user'></i> Sign In</Nav.Link>
                
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default Header
