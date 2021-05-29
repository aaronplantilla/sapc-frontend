import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Row,
    Col,
    Label,
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardDeck,
    CardSubtitle,
    CardBody,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    TabContent,
    TabPane
} from 'reactstrap';
import {
    BrowserView,
    MobileView,
    isDesktop,
    isMobile,
    isTablet
} from "react-device-detect";
import preSchool from '../../../../assets/img/acads-basic/pre-school.jpg';
import gradeSchool1 from '../../../../assets/img/acads-basic/grade-school-1.jpg';
import gradeSchool2 from '../../../../assets/img/acads-basic/grade-school-2.jpg';
import highSchool1 from '../../../../assets/img/acads-basic/high-school-1.jpg';
import highSchool2 from '../../../../assets/img/acads-basic/high-school-2.jpg';
import highSchool3 from '../../../../assets/img/acads-basic/high-school-3.jpg';
import highSchool4 from '../../../../assets/img/acads-basic/high-school-4.jpg';

const BasicAcads = () => {
    return (
        <>
            <Row className="align-items-center justify-content-center d-flex mt-5" xs="12" md="12" lg="12">
                <Col lg="2" md="2" xs="12" className="text-center text-danger-edit">
                    <h3 className="font-weight-bolder">Goals & Objectives</h3>
                </Col>

                {isDesktop ?
                    <Col lg="1" md="1" xs="1" className="text-center text-danger-edit">
                        <h1 style={{ fontSize: "85px" }}>|</h1>
                    </Col>
                    :
                    <Col className="text-center" xs="12" md="1" lg="1">
                        <h3 className={isDesktop ? "font-weight-bolder text-danger-edit text-left" : "font-weight-bolder text-danger-edit mr-5 ml-5 mt-3 mb-4"} style={{ fontSize: "40px", borderTop: "4px solid" }}></h3>
                    </Col>
                }

                <Col lg="7" md="7" xs="12" className="text-secondary font-weight-bolder">
                    <p className={isDesktop ? "" : "text-justify mx-5"}>
                        In keeping with the goals and objectives of the Department of Education and the vision and mission of the San Antonio de Padua College Foundation of Pila, Laguna Inc, the Basic Education Department hopes to attain the following:
                    </p>
                </Col>
            </Row>

            <Container fluid={true} className="bg-light pb-5">
                <Row className="align-items-center justify-content-center d-flex mt-5 mb-3" xs="12" md="12" lg="12">
                    <Col lg="4" md="4" xs="12">
                        <img src={preSchool} style={{ width: "350px" }} className={isDesktop ? "" : "w-100 mb-5"} />
                    </Col>

                    <Col lg="8" md="8" xs="12" className={isDesktop ? "text-left" : "text-center"}>
                        <h4 className="text-danger-edit font-weight-bolder">Pre-School</h4>
                        <p className="text-secondary mr-2" style={{ fontSize: "14px" }}>
                            <strong>Nursery and Kindergarten programs are committed to:</strong>
                            <br /><br />
                            <ul className="text-left">
                                <li>Implement a curriculum that provides pupils with a variety of holistic developmentally meaningful activities that nurture them to become confident, happy, and lifelong learners.</li>
                                <li>Engage pupils in a variety of fun and stimulating activities that allows children to enjoy, explore, investigate, discover, collaborate, create, and innovate.</li>
                                <li>Emboldens a strong, supportive partnership between home and the school.</li>
                            </ul>
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center justify-content-center d-flex" xs="12" md="12" lg="12">
                    <Col lg="7" md="7" xs="12">
                        <img src={gradeSchool1} style={{ width: "350px" }} className={isDesktop ? "mr-3" : "w-100 mb-3"} />
                        <img src={gradeSchool2} style={{ width: "350px" }} className={isDesktop ? "" : "w-100 mb-5"} />
                    </Col>

                    <Col lg="5" md="5" xs="12" className={isDesktop ? "text-left" : "text-center"}>
                        <h4 className="text-danger-edit font-weight-bolder">Grade School</h4>
                        <p className="text-secondary mr-2" style={{ fontSize: "14px" }}>
                            <strong>The SAPC Grade School is committed to:</strong>
                            <br /><br />
                            <ul className="text-left">
                                <li>Provide an engaging educational program that is age-appropriate that enables learners aged 6 to 11 to move progressively towards independent learning.</li>
                                <li>Implement a curricular approach that blends student-centered approaches with E-Learning, integrating understanding of career pathways in preparation for higher learning.</li>
                                <li>Builds on the discovery of students’ strengths to gain confidence through self-expression and collaboration with fellow students.</li>
                                <li>Promote a strong, supportive partnership between home and the school and the wider community.</li>
                            </ul>
                        </p>
                    </Col>
                </Row>

                <Row className={isDesktop ? "align-items-center justify-content-center d-flex mr-3 pr-2 mt-3" : "align-items-center justify-content-center d-flex mt-3"} xs="12" md="12" lg="12">
                    <Col lg="7" md="7" xs="12" className="text-center">
                        <img src={highSchool4} style={{ width: "350px" }} className={isDesktop ? "mr-3" : "w-100 mb-3"} />
                        <img src={highSchool2} style={{ width: "350px" }} className={isDesktop ? "" : "w-100 mb-5"} />
                    </Col>
                </Row>

                <Row className="align-items-center justify-content-center d-flex mt-3" xs="12" md="12" lg="12">
                    <Col lg="5" md="5" xs="12" className={isDesktop ? "text-left" : "text-center"}>
                        <h4 className="text-danger-edit font-weight-bolder">High School</h4>
                        <p className="text-secondary" style={{ fontSize: "14px" }}>
                            <strong>SAPC High School (Grades 7 – 12) is committed in:</strong>
                            <br /><br />
                            <ul className="text-left">
                                <li>Providing an educational program that develops students’ academic, thinking, and workplace competencies to prepare them for employment, entrepreneurship, middle level skills development, and higher education.</li>
                                <li>Implementing a curriculum that is student-centered, technologically-aided, relevant, collaborative, career-oriented, and global in perspective that allows all students to succeed.</li>
                                <li>Fostering an atmosphere where student feels they belong, respected and accepted by as they nurture creativity and originality to be competent and socially engaged individuals.</li>
                            </ul>
                        </p>
                    </Col>

                    <Col lg="6" md="6" xs="12" className={isDesktop ? "ml-5 pl-4" : "text-center mt-3"}>
                        <img src={highSchool1} style={{ width: "350px" }} className={isDesktop ? "ml-1 mr-3" : "w-100 mb-3"} />
                        <img src={highSchool3} style={{ width: "350px" }} className={isDesktop ? "" : "w-100 mb-5"} />
                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default BasicAcads;
