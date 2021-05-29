import React, { Fragment, useEffect, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container, Label } from 'reactstrap';
import { useForm, Controller } from "react-hook-form";
import Form from '../../../assets/img/form.png'
import Payment from '../../../assets/img/payment.png'
import Scholarship from '../../../assets/img/scholarship.png'
import FormActive from '../../../assets/img/form-active.png'
import PaymentActive from '../../../assets/img/payment-active.png'
import ScholarshipActive from '../../../assets/img/scholarship-active.png'
import SapcLogo from '../../../assets/img/SAPC-Logo-red.png'
import '../../../App.css';
import Select from 'react-select';
import { useHistory } from "react-router-dom";
import BasicEducationForm from './BasicEducationForm.js'
import ScholarshipForm from './ScholarshipForm.js'
import classnames from 'classnames';

const Forms = () => {

    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    const [activeTab, setActiveTab] = useState('1');
    const history = useHistory();

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col md="1" style={{ height: "100vh" }} className="d-flex flex-column align-items-center w-100 justify-content-center h-100 text-center">
                            <img src={SapcLogo} style={{ width: "4rem" }} onClick={() => history.push('/portal')} className="w-100 text-center h-100" />
                    </Col>
                    <Col md="9">
                        <Nav tabs className="d-flex align-items-center px-5">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    <div className="d-flex flex-column text-center align-items-center">
                                        <img src={activeTab === '1' ? FormActive : Form} style={{ width: "2rem" }} />
                                        <p className={activeTab === "1" ? "text-danger-edit font-weight-bolder" : "text-secondary font-weight-bolder"}>Form</p>
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    <div className="d-flex flex-column text-center align-items-center">
                                        <img src={activeTab === '2' ? ScholarshipActive : Scholarship} style={{ width: "2rem" }} />
                                        <p className={activeTab === "2" ? "text-danger-edit font-weight-bolder" : "text-secondary font-weight-bolder"}>Scholarship</p>
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    <div className="d-flex flex-column text-center align-items-center">
                                        <img src={activeTab === '3' ? PaymentActive : Payment} style={{ width: "2rem" }} />
                                        <p className={activeTab === "3" ? "text-danger-edit font-weight-bolder" : "text-secondary font-weight-bolder"}>Payment</p>
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem className="ml-auto">
                                {admissionAnswers.education_type != "tesda_course" ?
                                    <>
                                        <p className="text-secondary"><span className="font-weight-bolder">Student Type:</span> {admissionAnswers.student_type.label}</p>
                                        <p className="text-secondary"><span className="font-weight-bolder">Grade/Year Level:</span> {admissionAnswers.grade_year_level.label}</p>
                                    </>
                                    : ""}
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        {admissionAnswers.education_type == 'basic_education' ?
                                            <BasicEducationForm />
                                            : ""}
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <ScholarshipForm />
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Forms;