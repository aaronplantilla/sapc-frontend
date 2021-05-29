import React, { useState } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardImg,
    CardText,
    CardDeck,
    CardBody
} from 'reactstrap';
import {
    isDesktop,
    isMobile,
    isTablet
} from "react-device-detect";
import { useHistory } from "react-router-dom";
import landingPageLogo from '../../../assets/img/landingPageLogo.png';
import NavbarMobile from '../LandingPage/NavbarMobile.js';
import NavbarMobileAuth from '../LandingPage/NavbarMobileAuth.js';
import basic1 from '../../../assets/img/basic-1.jpg';
import tertiary1 from '../../../assets/img/tertiary-1.jpg';
import tesda1 from '../../../assets/img/tesda-1.jpg';
import Footer from '../LandingPage/Components/Footer.js';

const AdmissionPage = ({ authenticated }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [navbarMobile, setNavbarMobile] = useState(false);
    const [seeMore, setSeeMore] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDrop = (e) => setDropdownOpen(!dropdownOpen);
    const toggleDropClose = (e) => setDropdownOpen(false);

    const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
    const toggleDrop2 = (e) => setLoginDropdownOpen(!loginDropdownOpen);
    const toggleDropClose2 = (e) => setLoginDropdownOpen(false);

    const [lmsDropdownOpen, setLmsDropdownOpen] = useState(false);
    const toggleDrop3 = (e) => setLmsDropdownOpen(!lmsDropdownOpen);
    const toggleDropClose3 = (e) => setLmsDropdownOpen(false);

    const handleScroll = () => {
        setNavbarMobile(true)
    }

    return (
        <Container fluid={true} className={isDesktop ? "w-100 px-0 landingPage admission-image" : "w-100 px-0 landingPage admission-image-mobile"}>
            <div></div>
            {isDesktop ?
                <Navbar expand="md lg" className="w-100 py-0 navbarClass">
                    {/* <NavbarToggler onClick={toggle} /> */}
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar className="justify-content-between w-100 landingPageNav">
                            <NavItem className="w-100 text-center h-100">
                                <NavLink className="navlinkButton font-weight-bolder px-5" onClick={() => history.push('/')}>HOME</NavLink>
                            </NavItem>
                            <NavItem className="w-100 text-center h-100">
                                <NavLink className="navlinkButton font-weight-bolder px-4" onClick={() => history.push('/about-us')}>ABOUT US</NavLink>
                            </NavItem>
                            <NavItem className="w-100 text-center h-100">
                                <NavLink className="navlinkButton font-weight-bolder px-5" onClick={() => history.push('/academics')}>ACADEMICS</NavLink>
                            </NavItem>
                            <div className="w-100 d-flex justify-content-center">
                                <img src={landingPageLogo} className="landingPageLogo" style={{ width: "10rem" }} />
                            </div>
                            <Dropdown nav isOpen={dropdownOpen} onMouseEnter={toggleDrop} onMouseLeave={toggleDropClose} className="w-100 text-center h-100">
                                <DropdownToggle nav caret className="navlinkButton font-weight-bolder px-5">ADMISSION</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push('/admission-page')}>REQUIREMENTS</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push('/scholarship-page')}>SCHOLARSHIP</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown nav isOpen={lmsDropdownOpen} onMouseEnter={toggleDrop3} onMouseLeave={toggleDropClose3} className="w-100 text-center h-100">
                                <DropdownToggle nav caret className="navlinkButton font-weight-bolder px-5">LMS</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push(window.open("http://52.74.221.30/sapc/?fbclid=IwAR0Cb6NDp56odfRENGOl1Tr47ztbf0Ac38ZyBHCWCfIIyg2-ZcbmTvePYtw", "_blank"))}>LIKHA ONLINE</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push(window.open("https://app.seesaw.me/#/student/login?fbclid=IwAR2GIW7rGIvu4SWjVDB2gmPe7riyw3smZnfGhWYOE-fDhw22Fr_RI3KUXX8", "_blank"))}>SEESAW</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push(window.open("https://www.canva.com/", "_blank"))}>CANVA</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown nav isOpen={loginDropdownOpen} onMouseEnter={toggleDrop2} onMouseLeave={toggleDropClose2} className="w-100 text-center h-100">
                                <DropdownToggle nav caret className="navlinkButton font-weight-bolder px-5">LOGIN</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push(window.open("http://mail.sapc.edu.ph/"))}>UGNAI</DropdownItem>
                                    <DropdownItem divider />
                                    {authenticated ?
                                        <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push('/portal')}>PORTAL</DropdownItem>
                                        :
                                        <DropdownItem className="font-weight-bolder text-danger-edit" onClick={() => history.push('/login')}>SINAG</DropdownItem>
                                    }
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                :
                ""
            }

            {isMobile ?

                navbarMobile ?

                    authenticated ?

                        <NavbarMobileAuth setNavbarMobile={setNavbarMobile} navbarMobile={navbarMobile} />
                        :
                        <NavbarMobile setNavbarMobile={setNavbarMobile} navbarMobile={navbarMobile} />
                    : ""
                : ""}
            {isMobile ? <div onClick={handleScroll} style={{ position: "absolute", top: "10px", right: "10px", zIndex: "9999" }}>
                <div className="bar-menu"></div>
                <div className="bar-menu"></div>
                <div className="bar-menu"></div>
            </div> :
                isTablet ?
                    <div onClick={handleScroll} style={{ position: "absolute", top: "10px", right: "10px", zIndex: "9999" }}>
                        <div className="bar-menu"></div>
                        <div className="bar-menu"></div>
                        <div className="bar-menu"></div>
                    </div>
                    :
                    ""
            }

            <Container className="pt-5 mt-5 mb-5">
                <h3 className={isDesktop ? "font-weight-bolder text-danger-edit mb-5" : "font-weight-bolder text-danger-edit mb-5 text-left"}>ADMISSION REQUIREMENTS</h3>
                <CardDeck>
                    <Card className="shadow">
                        <CardImg style={{ height: "13rem" }} top width="100%" src={basic1} alt="Card image cap" />
                        <CardBody className="text-left py-5 d-flex flex-column align-items-center">
                            <CardText className="mb-auto">
                                <p style={{ fontSize: "15px" }}><strong>For High School / Grade School Students</strong>
                                    <br />
                                    <br />
                                    Applicant should undergo Interview and Assessment
                                    <br />
                                    The following documents are required:
                                    <br />
                                    <br />
                                    <ul className="mr-1">
                                        <li>Original and Photocopy of Form 138 (Grade 6/10 Card if incoming Gr. 7/11)</li>
                                        <li>Original and Photocopy of Form 137 (School Student Permanent Record Gr. 6/10)</li>
                                        <li>Two (2) (2”x2”) picture (Colored with white background and name tag).</li>
                                        <li>Certificate of Good Moral Character signed by School Principal/Guidance Officer with documentary stamp.</li>
                                        <li>National Career Assessment Examination (NCAE) result for Grades 10-12.</li>
                                        <li>Three (3) Photocopies of PSA authenticated Birth Certificate.</li>
                                        <li>Two (2) pieces heavy duty long brown envelope.</li>
                                        <li>Four (4) pieces of BIR Documentary Stamp (for F137 GR12 & Diploma / Grade 10 Certificate of Completion for JHS).</li>
                                    </ul>
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card className="shadow">
                        <CardImg style={{ height: "13rem" }} top width="100%" src={tertiary1} alt="Card image cap" />
                        <CardBody className="text-left py-5 d-flex flex-column align-items-center">
                            <CardText className="mb-auto">
                                <p style={{ fontSize: "15px" }}><strong>For College Students</strong>
                                    <br />
                                    <br />
                                    Applicant should undergo Interview and Assessment
                                    <br />
                                    The following documents are required:
                                    <br />
                                    <br />
                                    <ul className="mr-1">
                                        <li>Original and Photocopy of Form 138 (Grade 12 Senior High School Card)</li>
                                        <li>Original and Photocopy of Form 137 (Senior High School (SHS) Permanent record) with annotation “Eligible to Enter College education”.</li>
                                        <li>Copy of Grades (if College Undergraduate)</li>
                                        <li>Two (3) (2”x2”) picture (Colored with white background and name tag).</li>
                                        <li>Certificate of Good Moral Character signed by School Principal/Guidance Officer with documentary stamp.</li>
                                        <li>Certified photocopy of SHS Diploma with LRN, Track & Strand indicated and/or National Assessment Test (NAT) for Grade 12</li>
                                        <li>Original/Photocopy of National Career Assessment Examination (NCAE) result.</li>
                                        <li>Three (3) Photocopies of PSA authenticated Birth Certificate.</li>
                                        <li>Two (2) pieces heavy duty long brown envelope.</li>
                                        <li>Four (4) pieces of BIR Documentary Stamp (for F137).</li>
                                        <li>For TES Applicants: Certificate of Residency (for Pila, Laguna Residents)</li>
                                    </ul>
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card className="shadow">
                        <CardImg style={{ height: "13rem" }} top width="100%" src={tesda1} alt="Card image cap" />
                        <CardBody className="text-left py-5 d-flex flex-column align-items-center">
                            <p style={{ fontSize: "15px" }}><strong>For TESDA Students</strong>
                                <br />
                                <br />
                                Applicant should schedule an appointment in San Antonio De Padua College
                                <br />
                                The following documents are required:
                                <br />
                                <br />
                                <ul className="mr-1">
                                    <li>Form 137/TOR</li>
                                    <li>PSA copy of Birth Certificate</li>
                                    <li>Photo Copy of Marriage Certificate of Wife if married.</li>
                                    <li>4 pcs 1x1 picture</li>
                                    <li>4 pcs passport size chemical print white background, with name tag and with collar.</li>
                                </ul>
                            </p>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
            <Footer />
        </Container>
    )

}

export default AdmissionPage;