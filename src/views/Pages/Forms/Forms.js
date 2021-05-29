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
import BasicEducationForm from './BasicEducationForm.js';
import TertiaryEducationForm from './TertiaryEducationForm.js';
import ScholarshipForm from './ScholarshipForm.js';
import PaymentForm from './PaymentForm.js';
import classnames from 'classnames';
import { defineLocale } from 'moment';
import { Stepper, Step } from 'react-form-stepper';

const Forms = () => {

    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    const [activeTab, setActiveTab] = useState('1');
    const history = useHistory();
    const [currentStep, setCurrentStep] = useState(0);

    const handleSetCurrentStep = () => {
        if (currentStep != 2) {
            setCurrentStep(currentStep + 1)
        }
    }
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col md="1" className="px-0">
                        <div style={{ position: 'sticky', top: "0", height: "90vh" }} className="d-flex flex-column align-items-center w-100 pt-3 mt-3 px-0 mx-0 text-center">
                            <img src={SapcLogo} style={{ width: "4rem" }} onClick={() => history.push('/portal')} />
                            <div className="d-flex flex-column justify-content-between align-items-center h-100 pt-5 w-100">
                                <Button className="btn bg-danger-edit border-0 w-100 rounded-0 py-4">Admission</Button>
                                <p style={{ position: "absolute", bottom: 0 }}>Logout</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="9">
                        <Stepper activeStep={currentStep} className="w-100">
                            <Step label="Form" onClick={() => setCurrentStep(0)} />
                            <Step label="Scholarship" onClick={() => setCurrentStep(1)} />
                            <Step label="Payment" onClick={() => setCurrentStep(2)} />
                        </Stepper>

                        {currentStep == 0 ?
                            <BasicEducationForm />
                            : currentStep == 1 ?
                                <ScholarshipForm />
                                :
                                <PaymentForm />
                        }
                    </Col>
                    <Col md="2"></Col>
                </Row>
            </Container>
        </>
    )
}

export default Forms;