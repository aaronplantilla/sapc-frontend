import React, { useEffect, useState, useRef, Fragment } from "react";
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
import SignupForm from './SignUpForm'
import AfterRegistration from './AfterRegistration'

const Signup = (props) => {
  const { control, handleSubmit, register, errors, reset, getValues, setValue } = useForm();
  const [registrationDone, setRegistrationDone] = useState(false)
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("")

  const onSubmit = (data) => {
    authActions.registration(data, setRegistrationDone, setErrorMessage)
  };

  // useEffect(() => {
  //   if (registrationDone) {
  //     history.push('/portal')
  //   }
  // }, [registrationDone])

  return (
    <>
      <Container fluid={true} className="LoginPage">

        <Row>
          {/* BeAPaduan */}
          <Col md={isDesktop ? "4" : "12"} xs="12" className="signup-image">
            {isDesktop ?
              <Row className={isDesktop ? "h-100 justify-content-center align-items-center text-center" : "h-100 flex-column justify-content-center align-items-center text-center"}>
                <img src={Callout} style={{ height: "5rem", width: "5rem" }} className="callout" />
                <h1 className="text-white be-a">be a</h1>
                <h1 className="text-warning justify-content-center align-items-center text-center paduan">PADUAN</h1>
              </Row>
              :
              <Row className={isDesktop ? "h-100 justify-content-center align-items-center text-center" : "h-100 flex-column justify-content-center align-items-center text-center"}>
                <img src={Callout} style={{ height: "5rem", width: "5rem" }} className="callout-m" />
                <h1 className="text-white be-a-m">be a</h1>
                <h1 className="text-warning justify-content-center align-items-center text-center paduan-m">PADUAN</h1>
              </Row>
            }
          </Col>

          {/* SignUp */}
          <Col md={isDesktop ? "8" : "12"} xs="12" className={isDesktop ? "px-5" : "pl-5 pr-5"}>
            {/* <div className={isDesktop ? "h-100 flex-column justify-content-center align-items-center get-to-center ml-auto" : "h-100 flex-column align-items-center text-center justify-content-center w-100"}> */}
              <div className="w-100 h-100 get-to-center">
              {registrationDone ?
              <AfterRegistration /> 
                : <SignupForm setRegistrationDone={setRegistrationDone} />
                }
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;