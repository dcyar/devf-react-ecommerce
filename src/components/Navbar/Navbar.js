import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Navbar as Navbars,Container  } from "react-bootstrap";
const Navbar = () => {
    
  return (
    <>
      <Navbars bg="dark" variant="dark">
        <Container>
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
        </Container>
      </Navbars>
    </>
  );
};

export default Navbar;
