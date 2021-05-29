import React, { useState, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Form,
    InputGroup,
    InputGroupAddon,
    Spinner,
    UncontrolledTooltip,
    Container
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import Callout from '../../../assets/img/be-a-paduan-call-out.png'
import {
    BrowserView,
    MobileView,
    isDesktop,
    isMobile,
    isTablet
} from "react-device-detect";
import { useHistory } from "react-router-dom";
import { authActions } from "../../../services/AuthService";


const SignupForm = ({ setRegistrationDone }) => {
    const { control, handleSubmit, register, errors, reset, getValues, setValue } = useForm();
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState("")
    const [buttonSpinner, setButtonSpinner] = useState(false);

    const onSubmit = (data) => {
        setButtonSpinner(!buttonSpinner)
        authActions.registration(data, setErrorMessage, setButtonSpinner, buttonSpinner, setRegistrationDone)
        // setRegistrationDone(true)
    };

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [isActive, setIsActive] = useState(false);
    const activeButton = () => setIsActive(!isActive);

    return (
        <>
            {/* SignUp */}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col xs="12" md="4" className={isDesktop ? "bg-light mb-4 name-space2" : "bg-light mb-4 my-5"}>
                        <FormGroup>
                            <Label htmlFor="last_name" className="text-secondary">Last Name</Label>
                            <Controller
                                as={
                                    <Input
                                        className="form-control signIn rounded-0 bg-light"
                                    />
                                }
                                onChange={([event]) => {
                                    return event;
                                }}
                                value=""
                                defaultValue=""
                                type="text"
                                id="last_name"
                                name="last_name"
                                control={control}
                                rules={{ required: true }}
                                invalid={errors.last_name ? true : false}
                            />
                            {errors.last_name && (
                                <div
                                    style={{
                                        marginTop: "0.25rem",
                                        fontSize: "80%",
                                        color: "#f86c6b",
                                    }}
                                >
                                    Last name is required!
                                </div>
                            )}
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="4" className={isDesktop ? "bg-light mb-4 name-space" : "bg-light mb-4"}>
                        <FormGroup>
                            <Label htmlFor="given_name" className="text-secondary">First Name</Label>
                            <Controller
                                as={
                                    <Input
                                        className="form-control signIn rounded-0 bg-light"
                                    />
                                }
                                onChange={([event]) => {
                                    return event;
                                }}
                                value=""
                                defaultValue=""
                                type="text"
                                id="given_name"
                                name="given_name"
                                control={control}
                                rules={{ required: true }}
                                invalid={errors.given_name ? true : false}
                            />
                            {errors.given_name && (
                                <div
                                    style={{
                                        marginTop: "0.25rem",
                                        fontSize: "80%",
                                        color: "#f86c6b",
                                    }}
                                >
                                    Given Name is required!
                                </div>
                            )}
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="3" className={isDesktop ? "bg-light mb-4 ml-3" : "bg-light mb-4"}>
                        <FormGroup>
                            <Label htmlFor="middle_name" className="text-secondary">Middle Name</Label>
                            <Controller
                                as={
                                    <Input
                                        className="form-control signIn rounded-0 bg-light"
                                    />
                                }
                                onChange={([event]) => {
                                    return event;
                                }}
                                value=""
                                defaultValue=""
                                type="text"
                                id="middle_name"
                                name="middle_name"
                                control={control}
                                rules={{ required: true }}
                                invalid={errors.middle_name ? true : false}
                            />
                            {errors.middle_name && (
                                <div
                                    style={{
                                        marginTop: "0.25rem",
                                        fontSize: "80%",
                                        color: "#f86c6b",
                                    }}
                                >
                                    Middle Name is required!
                                </div>
                            )}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="12" className="bg-light mb-4">
                        <FormGroup>
                            <Label htmlFor="email_address" className="text-secondary">Email</Label>
                            <Controller
                                as={
                                    <Input
                                        className="form-control signIn rounded-0 bg-light"
                                    />
                                }
                                onChange={([event]) => {
                                    return event;
                                }}
                                value=""
                                defaultValue=""
                                type="email_address"
                                id="email_address"
                                name="email_address"
                                control={control}
                                rules={{ required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ }}
                                invalid={errors.email_address ? true : false}
                            />
                            {errors.email_address && errors.email_address.type == "required" && (
                                <div
                                    style={{
                                        marginTop: "0.25rem",
                                        fontSize: "80%",
                                        color: "#f86c6b",
                                    }}
                                >
                                    Email address is required!
                                </div>
                            )}
                            {errors.email_address && errors.email_address.type == "pattern" && (
                                <div
                                    style={{
                                        marginTop: "0.25rem",
                                        fontSize: "80%",
                                        color: "#f86c6b",
                                    }}
                                >
                                    Not a valid email address!
                                </div>
                            )}
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="12" className="bg-light mb-4">
                        <FormGroup>
                            <Label htmlFor="password" className="text-secondary">Password</Label>
                            <Controller
                                as={
                                    <Input
                                        className="form-control signIn rounded-0 bg-light"
                                    />
                                }
                                onChange={([event]) => {
                                    return event;
                                }}
                                value=""
                                defaultValue=""
                                type="password"
                                id="password"
                                name="password"
                                control={control}
                                rules={{ required: true, patter: /^[a-zA-Z!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,}$/ }}
                                invalid={errors.password ? true : false}
                            />
                            {errors.password && errors.password.type == "required" && (
                                <div
                                    style={{
                                        marginTop: "0.25rem",
                                        fontSize: "80%",
                                        color: "#f86c6b",
                                    }}
                                >
                                    Password is Required!
                                </div>
                            )}
                            {errors.password && errors.password.type == "pattern" && (
                                <div
                                    style={{
                                        marginTop: "0.25rem",
                                        fontSize: "80%",
                                        color: "#f86c6b",
                                    }}
                                >
                                    Password must be minimum 8 characters with lowercase, uppercase or special characters!
                                </div>
                            )}
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="12" className="bg-light mb-4">
                        <FormGroup>
                            <Label htmlFor="confirm_password" className="text-secondary">Repeat Password</Label>
                            <Controller
                                as={
                                    <Input
                                        className="form-control signIn rounded-0 bg-light"
                                    />
                                }
                                onChange={([event]) => {
                                    return event;
                                }}
                                value=""
                                defaultValue=""
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                control={control}
                                rules={{ required: true, validate: value => value == getValues('password') }}
                                invalid={errors.confirm_password ? true : false}
                            />
                            {errors.confirm_password && errors.confirm_password.type == 'required' && (
                                <div
                                    style={{
                                        marginTop: "0.25rem",
                                        fontSize: "80%",
                                        color: "#f86c6b",
                                    }}
                                >
                                    Confirm Password is required!
                                </div>
                            )}
                            {errors.confirm_password && errors.confirm_password.type == 'validate' && (
                                <div
                                    style={{
                                        marginTop: "0.25rem",
                                        fontSize: "80%",
                                        color: "#f86c6b",
                                    }}
                                >
                                    Password and Confirm Password does not matched!
                                </div>
                            )}
                        </FormGroup>
                    </Col>
                </Row>
                {/* <Row className="align-items-center">
                  {isDesktop ? 
                    <FormGroup check className="mt-4 text-secondary">
                      <Label check>
                        <Input type="checkbox" name="remember"/> By signing up I agree with <span className="terms-condition">terms and conditions.</span>
                      </Label>
                     </FormGroup>
                  : 
                    <FormGroup check className="mt-4 text-secondary">
                      <Col>
                        <Label check>
                          <Input type="checkbox" name="remember"/> By signing up I agree with <span className="terms-condition">terms and conditions.</span>
                        </Label>
                      </Col>
                    </FormGroup>
                  }
              </Row> */}

                <div className={isDesktop ? "d-flex w-100 mb-4" : "w-100 mb-4"}>
                    {/* <Button className={isDesktop ? "bg-warning text-white font-weight-bolder rounded-pill border-0 py-3 px-5 w-50 mt-4 signup-submit" : isMobile ? "bg-warning text-white font-weight-bolder rounded-pill border-0 py-3 px-5 w-100 signIn-mobile" : "bg-warning text-white font-weight-bolder rounded-pill border-0 py-3 px-5 w-100"}>Submit</Button> */}
                    {/* <Button className="bg-warning text-white font-weight-bolder rounded-pill border-0 py-3 px-5 w-50 mt-4 ml-auto">Submit</Button> */}
                   {isDesktop ?
                    <FormGroup check className="mt-4 mr-4 align-items-center justify-content-center">
                        <Label check>
                            <Input type="checkbox" name="remember" onChange={activeButton}/> By checking this box, you agree to our
                        </Label>
                        <br />
                        <a className="hand-pointer text-primary" onClick={toggle}>Terms and Conditions.</a>
                    </FormGroup>
                   : 
                   <FormGroup check className="">
                        <Label check>
                            <Input type="checkbox" name="remember" onChange={activeButton}/> By checking this box, you agree to our
                        </Label>
                        <br />
                        <a className="hand-pointer text-primary" onClick={toggle}>Terms and Conditions.</a>
                    </FormGroup>
                   }
                   {/* <FormGroup check className="mt-4 mr-4 align-items-center justify-content-center">
                        <Label check>
                            <Input type="checkbox" name="remember" onChange={activeButton}/> By checking this box, you agree to our
                        </Label>
                        <br />
                        <a className="hand-pointer text-primary" onClick={toggle}>Terms and Conditions.</a>
                    </FormGroup> */}
                    <Modal isOpen={modal} toggle={toggle} className="landingPage modal-center" backdrop="static">
                        <ModalBody className="modal-terms">
                            <div class={isDesktop ? "mt-5 mb-5 mx-5" : "text-center mt-5 mb-5"}>
                                <p className="text-justify mb-5">
                                    <span className="text-danger-edit font-weight-bolder">TERMS AND CONDITIONS</span>
                                    <br /><br />
                                    Our website follows all legal requirements to protect your privacy. Our Privacy Policy is a legal statement that explains how may collect information from you, how we may share your information, and how you can limit our sharing of your information. However, you must not use our website in any way that causes, or may cause damage to the website or impairment of the availability or accessibility of the website; to copy, store, host, transmit, send, use or distribute any material which consists of (or is linked to) any spyware, computer virus or any other malicious computer software.
                                    <br /><br />
                                    The information and materials provided at the site may be used for informational purposes only. By accessing, the SAPC official website, you agree to be bound by these terms and conditions, which apply to all visits that you make, both now and in the future. If you disagree with any part of the terms then you may not access the Service. Terms apply to all teachers, students and other users who access or use the Service.
                                    <br /><br />
                                    I hereby acknowledge that I have read, understand and agree to the above terms and conditions and I have willingly shared/disclosed all information contained within this website and that this information is <strong>TRUE AND CORRECT</strong> to the best of my knowledge.
                                </p>
                                <Row className="justify-content-center align-items-center">
                                    <Button className="bg-warning-edit text-white font-weight-bolder border-0 w-50 button-transition" onClick={toggle} >I AGREE</Button>
                                </Row>
                            </div>
                        </ModalBody>
                    </Modal>

                    <Button className={isDesktop ? "bg-danger-edit text-white font-weight-bolder rounded-pill border-0 py-3 px-4 w-25 mt-4" : "bg-danger-edit text-white font-weight-bolder rounded-pill border-0 py-3 px-4 w-50 mt-4"} onClick={() => history.push('/login')}>Cancel</Button>
                    {isActive ?
                        <Button
                            type="submit"
                            id="save-card-type"
                            disabled={buttonSpinner}
                            className={isDesktop ? "bg-warning-edit text-white font-weight-bolder rounded-pill border-0 py-3 px-4 w-25 mt-4 ml-auto" : "bg-warning text-white font-weight-bolder rounded-pill border-0 py-3 px-4 w-50 mt-4 ml-auto"}
                        >
                            {buttonSpinner ? (
                                <Fragment>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                            &nbsp;Processing...
                                </Fragment>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                        :
                        <Button
                            type="submit"
                            id="save-card-type"
                            disabled={true}
                            className={isDesktop ? "bg-warning-edit text-white font-weight-bolder rounded-pill border-0 py-3 px-4 w-25 mt-4 ml-auto" : "bg-warning text-white font-weight-bolder rounded-pill border-0 py-3 px-4 w-50 mt-4 ml-auto"}
                        >Submit</Button>
                    }
                    
                </div>
            </Form>
        </>
    );
}

export default SignupForm;