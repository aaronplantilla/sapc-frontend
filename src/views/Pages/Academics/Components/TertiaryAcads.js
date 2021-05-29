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
import back from '../../../../assets/img/acads-tertiary/back.jpg';
import hospitality from '../../../../assets/img/acads-tertiary/hospitality.jpg';
import businessAd1 from '../../../../assets/img/acads-tertiary/business-ad.jpg';
import businessAd2 from '../../../../assets/img/acads-tertiary/business-ad-2.jpg';
import psych from '../../../../assets/img/acads-tertiary/psych.jpg';
import officeAd from '../../../../assets/img/acads-tertiary/office-ad.jpg';

const TertiaryAcads = () => {
    return (
        <>
            <Row className={isDesktop ? "ml-4 pl-2" : "text-center"} xs="12" md="12" lg="12">
                <Col className="mt-5" xs="12" md="1" lg="1">
                    <h3 className="font-weight-bolder text-danger-edit">Curriculum</h3>
                </Col>
                <Col className={isDesktop ? "mt-5 pt-3 ml-5 pr-5" : "text-center"} xs="12" md="1" lg="1">
                    <h3 className={isDesktop ? "font-weight-bolder text-danger-edit text-left" : "font-weight-bolder text-danger-edit mr-5 ml-5 mt-3 mb-2"} style={{ fontSize: "40px", borderTop: "4px solid" }}></h3>
                </Col>
            </Row>

            <Row className={isDesktop ? "d-flex mt-3 ml-5" : "d-flex mt-3 ml-5 mr-5 text-justify"} xs="12" md="12" lg="12">
                <p className="text-secondary font-weight-bolder">
                    SAPC course offerings are responsible to the needs of the times and in consonance with student skills and interests.
                <br /><br />
                All business and related courses are offered in ladderized curriculum. After two years (4 semesters) an Associate Diploma
                <br />
                is awarded with the option of pursuing the full 4 years degree courses.
                </p>
            </Row>

            <Container fluid={true} className="bg-light">
                <Row lg="12" md="12" xs="12" className={isDesktop ? "align-items-center justify-content-center d-flex mt-5 pt-3 mb-5 ml-3" : "align-items-center justify-content-center d-flex mt-5 pt-3 mb-5 ml-3 mr-2"}>
                    <Col lg="8" md="8" xs="12" className="text-left mt-5">
                        <h4 className="text-danger-edit font-weight-bolder">Bachelor of Science in Hospitality Management – Ladderized Curriculum</h4>
                        <p className={isDesktop ? "text-secondary mr-2" : "text-secondary mr-2 text-justify"} style={{ fontSize: "14px" }}>
                            <strong>The program equips students with essential skills, knowledge, competencies and attitude to pursue and succeed  in a career in the tourism industry and/or hospitality sectors. Apply basic techniques in performing prescribed  range of specific functions in the areas of Food and Beverage, Front Office, and Housekeeping Operations as required in accommodation, food and beverages enterprises; undertakes planning and initiation of alternative approaches to skills and knowledge applications across a broad range of technical and procedural requirements.</strong>
                            <br /><br />
                            The program aims to produce graduates who can:
                            <ol>
                                <li className="list-number">Function as an effective and skilled worker in every aspect of food management and hotel supervision and administration.</li>
                                <li className="list-number">To integrate  stewardship, accountability, excellence and moral values in the exercise of their function.</li>
                                <li className="list-number">Provide leadership is the promotion of the countries natural and cultural attraction to domestic and international travelers.</li>
                            </ol>
                        </p>
                    </Col>

                    <Col lg="4" md="4" xs="12">
                        {isDesktop ?
                            <Container className="acads-tertiary-cont">
                                <img src={back} style={{ width: "350px" }} className="tertiary-image back-image" />
                                <img src={hospitality} style={{ width: "350px" }} className="tertiary-image front-image" />
                            </Container>
                            :
                            <img src={hospitality} style={{ width: "350px" }} className="w-100" />
                        }
                    </Col>
                </Row>

                {isDesktop ?
                    <Row lg="12" md="12" xs="12" className="align-items-center justify-content-center d-flex pt-3">
                        <Col lg="4" md="4">
                            <Container className="acads-tertiary-cont2">
                                <Row>
                                    <img src={back} style={{ width: "350px" }} className="tertiary-image back-image2" />
                                    <img src={businessAd2} style={{ width: "350px" }} className="tertiary-image front-image2" />
                                </Row>
                            </Container>

                            <Container className="acads-tertiary-cont2">
                                <Row>
                                    <img src={back} style={{ width: "350px" }} className="tertiary-image back-image2-1" />
                                    <img src={businessAd1} style={{ width: "350px" }} className="tertiary-image front-image2-1" />
                                </Row>
                            </Container>
                        </Col>

                        <Col lg="8" md="8" className="text-left">
                            <h4 className="text-danger-edit font-weight-bolder">Bachelor of Science in Business Administration</h4>
                            <p className="text-secondary mr-2" style={{ fontSize: "14px" }}>
                                <strong>Human Resource Development Program aims to prepare the graduates for a career in the field of Human Resource Management in various corporations whether in the manufacturing, marketing and service sectors, or in the different types of industries such as pharmaceutical, semi-conductor, food and beverage, banking industries and other types of organizations.</strong>
                                <br /><br />
                            The program aims to produce graduates who can:
                            <ol>
                                    <li className="list-number">Exhibit proficiency in the major facets of concepts, principles, theories, and philosophies in Human Resource of business operations.</li>
                                    <li className="list-number">Effectively show management/marketing techniques, skills and principles to enable them to deal with actual situation of problem solving and decision making.</li>
                                    <li className="list-number">Appreciate the HR role in the organization and how they can make meaningful contributions as a strategic partner in building the organization to become globally competitive.</li>
                                    <li className="list-number">Manifest  stewardship, accountability, excellence and  moral integrity in the exercise of one’s personal and  professional life.</li>
                                </ol>
                            The Operations Management Program prepares the students for the acquisition of competencies and skills needed as managers in manufacturing and service oriented businesses. It focuses on managing the processes to produce and distribute products and services. Major overall activities often include product creation, development, production and distribution. Operations Management covers all operations within the organization and related activities including managing purchases, inventory control, quality control, storage, logistics and evaluation. A great deal of focus is on efficiency and effectiveness of processes.
                            <ol>
                                    <li className="list-number">Show know-how with concepts, principles and the theories of Operations Management as well display competencies and skills as entrepreneurs and managers.</li>
                                    <li className="list-number">Organize and manage activities in manufacturing and service related businesses.</li>
                                    <li className="list-number">Manifest  stewardship, accountability, excellence and moral integrity in the exercise of  one’s personal and professional life.</li>
                                    <li className="list-number">Prepare the students to pursue a teaching career or graduate studies in business.</li>
                                </ol>
                            </p>
                        </Col>
                    </Row>
                    :
                    <Row xs="12" className="align-items-center justify-content-center d-flex mt-5 pt-3 mb-5 ml-3 mr-2">
                        <Col xs="12" md="8" className="text-left">
                            <h4 className="text-danger-edit font-weight-bolder">Bachelor of Science in Business Administration</h4>
                            <p className="text-secondary text-justify" style={{ fontSize: "14px" }}>
                                <strong>Human Resource Development Program aims to prepare the graduates for a career in the field of Human Resource Management in various corporations whether in the manufacturing, marketing and service sectors, or in the different types of industries such as pharmaceutical, semi-conductor, food and beverage, banking industries and other types of organizations.</strong>
                                <br /><br />
                                The program aims to produce graduates who can:
                                <ol>
                                    <li className="list-number">Exhibit proficiency in the major facets of concepts, principles, theories, and philosophies in Human Resource of business operations.</li>
                                    <li className="list-number">Effectively show management/marketing techniques, skills and principles to enable them to deal with actual situation of problem solving and decision making.</li>
                                    <li className="list-number">Appreciate the HR role in the organization and how they can make meaningful contributions as a strategic partner in building the organization to become globally competitive.</li>
                                    <li className="list-number">Manifest  stewardship, accountability, excellence and  moral integrity in the exercise of one’s personal and  professional life.</li>
                                </ol>
                                The Operations Management Program prepares the students for the acquisition of competencies and skills needed as managers in manufacturing and service oriented businesses. It focuses on managing the processes to produce and distribute products and services. Major overall activities often include product creation, development, production and distribution. Operations Management covers all operations within the organization and related activities including managing purchases, inventory control, quality control, storage, logistics and evaluation. A great deal of focus is on efficiency and effectiveness of processes.
                                <ol>
                                    <li className="list-number">Show know-how with concepts, principles and the theories of Operations Management as well display competencies and skills as entrepreneurs and managers.</li>
                                    <li className="list-number">Organize and manage activities in manufacturing and service related businesses.</li>
                                    <li className="list-number">Manifest  stewardship, accountability, excellence and moral integrity in the exercise of  one’s personal and professional life.</li>
                                    <li className="list-number">Prepare the students to pursue a teaching career or graduate studies in business.</li>
                                </ol>
                            </p>
                        </Col>

                        <Col md="4" xs="12">
                            <img src={businessAd2} style={{ width: "350px" }} className="w-100 mb-3" />
                            <img src={businessAd1} style={{ width: "350px" }} className="w-100" />
                        </Col>
                    </Row>
                }


                <Row lg="12" md="12" xs="12" className={isDesktop ? "align-items-center justify-content-center d-flex ml-3 mr-3 mt-5 pt-3" : "align-items-center justify-content-center d-flex ml-3 mr-3"}>
                    <Col lg="8" md="8" xs="12" className={isDesktop ? "text-left mb-5" : "text-justify"}>
                        <h4 className="text-danger-edit font-weight-bolder text-left">Bachelor of Arts in Psychology</h4>
                        <p className="text-secondary" style={{ fontSize: "14px" }}>
                            <strong>The program prepares students for jobs that may involve training, testing, research and intervention in industrial, clinical, and educational settings.  It also provides preparation for graduate studies in psychology as well as further studies in other field of specialization such as medicine, law, and business management.</strong>
                            <br /><br />
                            The program aims to produce graduates who:
                            <ol>
                                <li className="list-number">Can be proficient in dealing with people of different level.</li>
                                <li className="list-number">Possess high moral and ethical standards and values in his relation with others.</li>
                                <li className="list-number">Can undertake research using the knowledge and skills in psychology and able to communicate the result of such research to both specialist and non-specialist audiences.</li>
                                <li className="list-number">Are equipped with knowledge in understanding people with problems in their relationship with others.</li>
                            </ol>
                        </p>
                    </Col>

                    <Col lg="4" md="4" xs="12">
                        {isDesktop ?
                            <Container className="acads-tertiary-cont">
                                <img src={back} style={{ width: "350px" }} className="tertiary-image back-image2-2" />
                                <img src={psych} style={{ width: "350px" }} className="tertiary-image front-image2-2" />
                            </Container>
                            :
                            <img src={psych} style={{ width: "350px" }} className="w-100 mb-5" />
                        }
                    </Col>
                </Row>

                <Row className={isDesktop ? "align-items-center justify-content-center d-flex ml-3 mr-3 mt-4 pt-2" : "align-items-center justify-content-center d-flex ml-3 mr-3"}>
                    <Col md="8" className={isDesktop ? "text-left mb-5 pb-5" : "text-justify"}>
                        <h4 className="text-danger-edit font-weight-bolder text-left">Associate in Office Administration</h4>
                        <p className="text-secondary mr-2" style={{ fontSize: "14px" }}>
                            <strong>The program prepares students for a career in an outcomes focused, technology rich professional environment. It also provides preparation for a four- year course in BS in Office Administration.</strong>
                            <br /><br />
                            The program aims to produce graduates who:
                            <ol>
                                <li className="list-number">Are adept in the current techniques in office practice and procedures, development of office systems and technology, efficient team-building and management skills.</li>
                                <li className="list-number">Possess effective human relations and communication skill to become key players in day-to-day office operations.</li>
                                <li className="list-number">Possess high moral standards and values in his relation with the others.</li>
                                <li className="list-number">Are equipped with leadership skills needed to cope with the increasing responsibility in the field of business and industry.</li>
                            </ol>
                        </p>
                    </Col>

                    <Col md="4" className="pb-5">
                        {isDesktop ?
                            <Container className="acads-tertiary-cont">
                                <img src={back} style={{ width: "350px" }} className="tertiary-image back-image2-3" />
                                <img src={officeAd} style={{ width: "350px" }} className="tertiary-image front-image2-3" />
                            </Container>
                            :
                            <img src={officeAd} style={{ width: "350px" }} className="w-100 mb-3" />
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TertiaryAcads;
