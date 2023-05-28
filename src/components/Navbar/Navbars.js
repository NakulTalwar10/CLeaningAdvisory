import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cleaningAdvisory from '../../img/Screenshot 2023-05-25 221123 copy.png';
import './Navbar.css';
import Footer from '../Footer/Footer';

const Navbars = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const isAdmin = isLoggedIn === 'admin';
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };
  const handleAdmin=()=>{
    navigate('/admin')
  }
  const handleHome=()=>{
    navigate('/')
  }
  const handleLogin=()=>{
    navigate('/login')
  }
  const handleSignup=()=>{
    navigate('/signup')
  }
  const handleAdminControl=()=>{
    navigate('/admincontrol')
  }

  return (
    <div>
      <div className='bg-gray-900'>
        <Navbar className='flex justify-around' expand='lg'>
          <Container fluid>
            <Navbar.Brand>
              <img src={cleaningAdvisory} alt='cleaning' className='image' />
            </Navbar.Brand>
            <Navbar.Brand href='/' className='font-bold text-xl text-[white] hover:text-white'>
              Cleaning Advisory
            </Navbar.Brand>
            <Navbar.Toggle className='bg-[#aaeba8]' aria-controls='navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
              <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                {isAdmin && (
                  <>
                    <Nav.Link onClick={handleAdmin} className='font-bold text-xl text-[white] hover:text-[grey]'>
                      Admin
                    </Nav.Link>
                    
                    <Nav.Link
                      onClick={handleAdminControl}
                      className='font-bold text-xl text-[white] hover:text-[grey]'
                    >
                      Admin Control
                    </Nav.Link>
                  </>
                )}
                {!isAdmin && (
                  <Nav.Link onClick={handleHome} className='font-bold text-xl text-[white] hover:text-[grey]'>
                    Home
                  </Nav.Link>
                )}
              </Nav>
              <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                {!isLoggedIn && (
                  <>
                    <Nav.Link onClick={handleLogin} className='font-bold text-xl text-[#90e078] hover:text-[#0fb51d] mx-3'>
                      Login
                    </Nav.Link>
                    <Nav.Link onClick={handleSignup} className='font-bold text-xl text-[#d66868] hover:text-[#a81818] mx-3'>
                      Sign Up
                    </Nav.Link>
                  </>
                )}
                {isLoggedIn && (
                  <Nav.Link
                    className='font-bold text-xl text-[#f07171] hover:text-[#a91919] mx-3'
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Navbars;
