import React, { useState } from 'react';
import {
    Button,
    Row
} from 'reactstrap';
import { useHistory } from "react-router-dom";


const NavbarMobile = ({ setNavbarMobile, navbarMobile }) => {

    const history = useHistory();
    const [admissionDropdown, setAdmissionDropdown] = useState(false);
    const [lmsDropdown, setLmsDropdown] = useState(false);
    const [loginDropdown, setLoginDropdown] = useState(false);

    const admissionButton = admissionDropdown
        ?
        <Button onClick={() => { setAdmissionDropdown(!admissionDropdown); setLmsDropdown(false); setLoginDropdown(false) }} className="text-danger-edit nav-mobile font-weight-bolder">ADMISSION</Button>
        :
        <Button onClick={() => { setAdmissionDropdown(!admissionDropdown); setLmsDropdown(false); setLoginDropdown(false) }} className="text-danger-edit nav-mobile font-weight-bolder mb-4">ADMISSION</Button>

    const lmsButton = lmsDropdown
        ?
        <Button onClick={() => { setLmsDropdown(!lmsDropdown); setAdmissionDropdown(false); setLoginDropdown(false) }} className="text-danger-edit nav-mobile font-weight-bolder">LMS</Button>
        :
        <Button onClick={() => { setLmsDropdown(!lmsDropdown); setAdmissionDropdown(false); setLoginDropdown(false) }} className="text-danger-edit nav-mobile font-weight-bolder mb-4">LMS</Button>

    const loginButton = loginDropdown
        ?
        <Button onClick={() => { setLoginDropdown(!loginDropdown); setAdmissionDropdown(false); setLmsDropdown(false) }} className="text-danger-edit nav-mobile font-weight-bolder">LOGIN</Button>
        :
        <Button onClick={() => { setLoginDropdown(!loginDropdown); setAdmissionDropdown(false); setLmsDropdown(false) }} className="text-danger-edit nav-mobile font-weight-bolder mb-4">LOGIN</Button>


    const admissionContent = <div className="navbar-mobile-admission fade-in text-center">
        <Button onClick={() => history.push('/admission-page')} className="text-light nav-mobile font-weight-bolder mt-2 mb-2">REQUIREMENTS</Button>
        <Button onClick={() => history.push('/scholarship-page')} className="text-light nav-mobile font-weight-bolder mb-2">SCHOLARSHIP</Button>
    </div>

    const lmsContent = <div className="navbar-mobile-lms fade-in text-center">
        <Button onClick={() => history.push(window.open("http://52.74.221.30/sapc/?fbclid=IwAR0Cb6NDp56odfRENGOl1Tr47ztbf0Ac38ZyBHCWCfIIyg2-ZcbmTvePYtw", "_blank"))} className="text-light nav-mobile font-weight-bolder mt-2 mb-2">LIKHA ONLINE</Button>
        <Button onClick={() => history.push(window.open("https://app.seesaw.me/#/student/login?fbclid=IwAR2GIW7rGIvu4SWjVDB2gmPe7riyw3smZnfGhWYOE-fDhw22Fr_RI3KUXX8", "_blank"))} className="text-light nav-mobile font-weight-bolder mb-2">SEESAW</Button>
        <Button onClick={() => history.push(window.open("https://www.canva.com/", "_blank"))} className="text-light nav-mobile font-weight-bolder mb-2">CANVA</Button>
    </div>

    const loginContent = <div className="navbar-mobile-login fade-in text-center">
        <Button onClick={() => history.push(window.open("http://mail.sapc.edu.ph/"))} className="text-light nav-mobile font-weight-bolder mt-2 mb-2">UGNAI</Button>
        <Button onClick={() => history.push('/login')} className="text-light nav-mobile font-weight-bolder mb-2">SINAG</Button>
    </div>

    return (
        <div style={{ height: "100%", position: "fixed", zIndex: "99999999", backgroundColor: "white", width: "100%", overflowY: "hidden", transition: "1s" }} className="fade-in justify-content-center align-items-center d-flex">
            <Button color="danger" onClick={() => setNavbarMobile(!navbarMobile)} style={{ backgroundColor: "white", position: "absolute", top: "10px", right: "10px", fontSize: "2rem" }} className="text-dark border-0 font-weight-bolder">X</Button>
            <Row className="d-flex flex-column justify-content-center align-items-center">
                <Button onClick={() => history.push('/')} className="text-danger-edit nav-mobile font-weight-bolder mb-4">HOME</Button>
                <Button onClick={() => history.push('/about-us')} className="text-danger-edit nav-mobile font-weight-bolder mb-4">ABOUT US</Button>
                <Button onClick={() => history.push('/academics')} className="text-danger-edit nav-mobile font-weight-bolder mb-4">ACADEMICS</Button>
                {admissionButton}
                {admissionDropdown && admissionContent}
                {lmsButton}
                {lmsDropdown && lmsContent}
                {loginButton}
                {loginDropdown && loginContent}
            </Row>
        </div>
    );
}

export default NavbarMobile;