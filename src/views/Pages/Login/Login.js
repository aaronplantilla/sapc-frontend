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
  Container,
  Alert,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import Logo from '../../../assets/img/SAPC-Logo-red.png'
import { authActions } from "../../../services/AuthService";
import {
  BrowserView,
  MobileView,
  isDesktop,
  isMobile,
  isTablet
} from "react-device-detect";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const { control, handleSubmit, register, errors, reset, getValues, setValue } = useForm();
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false)
  const [buttonSpinner, setButtonSpinner] = useState(false);

  const onSubmit = (data) => {
    setButtonSpinner(true)
    authActions.login(data, setAuthenticated, setButtonSpinner);
  };

  useEffect(() => {
    if (authenticated) {
      history.push('/portal')
    }
  }, [authenticated])

  return (
    <>
      <Row className="LoginPage px-0 mx-0">

        {/* Login Dashboard */}
        <Col md="4" xs="12">
          <Col md="12" xs="12" className={isDesktop ? "mx-4" : ""}>
            <Button onClick={() => history.push('/')} className={isDesktop ? "bg-danger-edit text-white font-weight-bolder rounded-pill button-transition back-button border-0" : "bg-danger-edit text-white font-weight-bolder rounded-pill border-0 remember-forgot py-3 w-75 button-transition back-button-mobile"}>Back to Homepage</Button>
          </Col>

          <Row className={isDesktop ? "h-100 flex-column justify-content-center w-100 get-to-center-login" : "h-100 flex-column align-items-center text-center justify-content-center mx-3"}>
            <Form onSubmit={handleSubmit(onSubmit)}>

              <h2 className="text-danger-edit mb-5">Login to Dashboard</h2>
              <Row>
                <Col xs="12" md="9" className="bg-light mb-4">
                  <Label htmlFor="email_address" className="text-secondary font-weight-bolder ">Email</Label>
                  <FormGroup>
                    <Controller
                      as={
                        <Input
                          className="form-control bg-light signIn rounded-0"
                        />
                      }
                      onChange={([event]) => {
                        return event;
                      }}
                      value=""
                      defaultValue=""
                      type="email"
                      id="email_address"
                      name="email_address"
                      control={control}
                      rules={{ required: true }}
                      invalid={errors.email_address ? true : false}
                    />
                    {errors.email_address && (
                      <div
                        style={{
                          marginTop: "0.25rem",
                          fontSize: "80%",
                          color: "#f86c6b",
                        }}
                      >
                        Email is required!
                      </div>
                    )}
                  </FormGroup>
                </Col>
                <Col xs="12" md="9" className="bg-light">
                  <Label htmlFor="password" className="text-secondary font-weight-bolder">Password</Label>
                  <FormGroup>
                    <Controller
                      as={
                        <Input
                          className="form-control signIn bg-light rounded-0"

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
                      rules={{ required: true }}
                      invalid={errors.password ? true : false}
                    />
                    {errors.password && (
                      <div
                        style={{
                          marginTop: "0.25rem",
                          fontSize: "80%",
                          color: "#f86c6b",
                        }}
                      >
                        Password is required!
                      </div>
                    )}
                  </FormGroup>
                </Col>
              </Row>


              <Col className="mt-4">
                <a href="forgot-password" className="text-warning">Forgot Password?</a>
              </Col>


              <Row className="align-items-center justify-content-between w-100">
                <Col md="6" xs="12" className="pb-5">
                  <Button
                    type="submit"
                    id="save-card-type"
                    disabled={buttonSpinner}
                    className={isDesktop ? "bg-warning-edit text-white font-weight-bolder rounded-pill border-0 py-3 px-5 w-75 mt-4 button-transition" : "bg-warning-edit text-white font-weight-bolder rounded-pill border-0 remember-forgot py-3 px-5 w-75 mt-4 mb-5 button-transition"}
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
                      "Sign In"
                    )}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Col>

        {/* SignUp */}
        <Col md={isTablet ? "12" : "8"} xs="12" className="login-image">
          <Row className="h-100 flex-column justify-content-center align-items-center text-center">
            <img src={Logo} style={{ height: "5rem", width: "5rem", marginBottom: "4rem" }} />
            <h1 className="text-white w-50 mb-5 pb-5">Are you a new student?</h1>
            <Button onClick={() => history.push('/sign-up')} className={isDesktop ? "bg-white text-danger-edit font-weight-bolder rounded-pill border-0 py-3 px-5 w-25 button-transition" : "bg-white text-danger-edit font-weight-bolder rounded-pill border-0 py-3 px-5 w-50 button-transition"}>Sign Up</Button>
          </Row>
        </Col>

      </Row>
    </>
  );
}

export default Login;