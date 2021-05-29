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
import technical from '../../../../assets/img/acads-tech/technical.png';
import technical2 from '../../../../assets/img/acads-tech/technical-2.png';

const TechnicalAcads = () => {
    return (
        <Container fluid={true}>
            <Row className={isDesktop ? "align-items-center justify-content-center d-flex mb-5 ml-3" : "align-items-center justify-content-center d-flex mb-5 ml-1 mr-1"} lg="12" md="12" xs="12">
                <Col lg="7" md="7" xs="12" className="text-justify mt-5">
                    <h4 className={isDesktop ? "text-danger-edit font-weight-bolder" : "text-danger-edit font-weight-bolder text-center"}>Technical Education and Skills Development</h4>
                    <p className="text-secondary mr-2" style={{ fontSize: "14px" }}>
                        <br />
                        The TESDA programs of SAPC aims provide middle level skills development trainings that seeks to produce graduates who are:
                        <ol>
                            <li className="list-number">Highly skilled and competent workers demanded by industry.</li>
                            <li className="list-number">Certified according to competency assessment standards.</li>
                            <li className="list-number">Displays desirable work attitude and integrates stewardship, accountability, and excellence in the exercise of their function.</li>
                        </ol>
                    </p>

                    <p className="text-secondary" style={{ fontSize: "15px" }}>
                        <Row className={isDesktop ? "" : "text-left"}>
                            <Col md="6">
                                <strong>TRAINING CENTER</strong>
                                <br /><br />
                                <ul>
                                    <li>Bread and Pastry Production NC II</li>
                                    <li>Caregiving NC II</li>
                                    <li>Cookery NC II</li>
                                    <li>Housekeeping NC II</li>
                                    <li>Food and Beverage Services NC II</li>
                                    <li>Shielded Metal Arc Welding (SMAW) NC I</li>
                                    <li>Shielded Metal Arc Welding (SMAW) NC II</li>
                                </ul>
                            </Col>
                            <Col md="6">
                                <strong>ACCREDITED COMPETENCY ASSESSMENT CENTER</strong>
                                <br /><br />
                                <ul>
                                    <li>Bread and Pastry Production NC II</li>
                                    <li>Caregiving NC II</li>
                                    <li>Cookery NC II</li>
                                    <li>Housekeeping NC II</li>
                                    <li>Food and Beverage Services NC II</li>
                                    <li>Shielded Metal Arc Welding (SMAW) NC I</li>
                                    <li>Shielded Metal Arc Welding (SMAW) NC II</li>
                                </ul>
                            </Col>
                        </Row>

                    </p>
                </Col>

                <Col md="5">
                    {isDesktop ?
                        <Container className="acads-tertiary-cont">
                            <img src={technical2} style={{ width: "500px" }} className="tertiary-image back-image-tech" />
                            <img src={technical} style={{ width: "470px" }} className="tertiary-image front-image-tech" />
                        </Container>
                        :
                        <Container>
                            <img src={technical2} style={{ width: "500px" }} className="w-100 mb-3" />
                            <img src={technical} style={{ width: "500px" }} className="w-100" />
                        </Container>

                    }
                </Col>
            </Row>
        </Container>
    );

}

export default TechnicalAcads;
