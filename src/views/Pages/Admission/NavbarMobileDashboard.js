import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';
import { useHistory } from "react-router-dom";


const NavbarMobileDashboard = ({setNavbarMobile, navbarMobile, toggle, toggleLogOut, toggleApplication}) => {


    const history = useHistory();

    return (
        <div style={{height: "100%", position: "fixed", zIndex: "999999", backgroundColor: "white", overflowY: "hidden", transition: "1s"}} className="w-100 fade-in justify-content-center align-items-center d-flex">
        <Button color="danger" onClick={() => setNavbarMobile(false)} style={{ backgroundColor: "white", position: "absolute", top: "10px", right: "10px", fontSize: "2rem"}} className="text-dark border-0 font-weight-bolder">X</Button>
            <Row className="flex-column">
            <Button onClick={toggleApplication} className="text-danger-edit nav-mobile font-weight-bolder mb-3">APPLICATION</Button>
                <Button onClick={toggle} className="text-danger-edit nav-mobile font-weight-bolder mb-3">ADMISSION</Button>
                <Button onClick={toggleLogOut} className="text-danger-edit nav-mobile font-weight-bolder mb-3">LOGOUT</Button>
            </Row>
        </div>
    );
}

export default NavbarMobileDashboard;