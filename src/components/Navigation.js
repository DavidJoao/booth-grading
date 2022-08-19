import { Link } from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'

function Navigation(){
    return(
        <div id='beginning' style={{width:'100%', display:"flex", justifyContent:'center', alignItems:'center'}}>
            <Navbar bg="dark" variant="dark" style={{width:'100%'}} justify>
                <Nav className="me-auto" style={{width:'100%', display:'flex', justifyContent:'space-around'}}>
                    <Link className='nav-link' to='/' >About Us</Link>
                    <Link className='nav-link' to="/work">Our Work</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation