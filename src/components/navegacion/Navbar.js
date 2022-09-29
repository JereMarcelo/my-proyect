import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'

const NavbarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Link to='/'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/595/983/small/04012019-25.jpg" width='70'/>
            </Link>
            <Navbar.Brand as={Link} to="/" > </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/> 
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
                <Nav.Link as={Link} to="/items">Items</Nav.Link>             
            </Nav>
            </Navbar.Collapse>
        </Container>
        <div>
            <CartWidget/>
        </div>
        </Navbar>  
       
        <section>
            <Outlet></Outlet>
        </section>

       </> 
    )
}
export default NavbarExample