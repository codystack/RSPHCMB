import React from "react";
// import { Nav, NavItem, NavLink } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
import { Button } from "@mui/material";
import {
  NavLink as NavClick,
  withRouter,
  useLocation,
  useHistory,
} from "react-router-dom";

const NavbarActions = (props) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div>Hello World...</div>
    // <>
    //   {/*Pull towards left */}
    //   <Nav className="mr-auto"></Nav>
    //   {/* Pull towards right */}

    //   <Nav className="ml-0" navbar>
    //     <NavItem className=".site__navbar__items__adjust">
    //       <NavClick
    //         style={{ color: props.textColor }}
    //         to="/"
    //         className="nav__768"
    //       >
    //         Home
    //       </NavClick>
    //     </NavItem>
    //   </Nav>

    //   <Nav className="ml-0" navbar>
    //     <NavItem className=".site__navbar__items__adjust">
    //       <NavClick
    //         style={{ color: props.textColor }}
    //         to="/scholarship/about"
    //         className="nav__768"
    //         activeClassName="selected_navlink"
    //       >
    //         About
    //       </NavClick>
    //     </NavItem>
    //   </Nav>

    //   <Nav className="ml-0" navbar>
    //     <NavItem className=".site__navbar__items__adjust">
    //       <NavClick
    //         style={{ color: props.textColor }}
    //         to="/scholarship/conditions"
    //         className="nav__768"
    //         activeClassName="selected_navlink"
    //       >
    //         Conditions
    //       </NavClick>
    //     </NavItem>
    //   </Nav>

    //   <Nav className="ml-0" navbar>
    //     <NavItem className=".site__navbar__items__adjust">
    //       <NavClick
    //         style={{ color: props.textColor }}
    //         to="/scholarship/how-to-apply"
    //         className="nav__768"
    //         activeClassName="selected_navlink"
    //       >
    //         How to Apply
    //       </NavClick>
    //     </NavItem>
    //   </Nav>

    //   <Nav className="ml-1 mr-2" navbar>
    //     <NavItem className=".site__navbar__items__adjust">
    //       <NavClick
    //         style={{ color: props.textColor }}
    //         to="/scholarship/faqs"
    //         className="nav__768"
    //         activeClassName="selected_navlink"
    //       >
    //         FAQs
    //       </NavClick>
    //     </NavItem>
    //   </Nav>

    //   {/* <Nav className="ml-0" navbar>
    //                         <NavItem className=".site__navbar__items__adjust">
    //                             <NavLink to="/scholarship/login" onClick={() => setIsHideNavbar(true)} className="nav__768">
    //                                 Login
    //                              </NavLink>
    //                         </NavItem>
    //                     </Nav> */}

    //   <Nav className="ml-0">
    //     <NavItem>
    //       <Button
    //         variant="contained"
    //         color="primary"
    //         onClick={() => history.push("/scholarship/login")}
    //         style={{ textTransform: "none" }}
    //       >
    //         Login
    //       </Button>
    //     </NavItem>
    //   </Nav>
    // </>
  );
};

export default withRouter(NavbarActions);
