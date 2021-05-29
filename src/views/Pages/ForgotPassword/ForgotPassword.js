import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    FormGroup,
    Input
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import {
    isDesktop
} from "react-device-detect";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const ForgotPassword = (props) => {

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    const { control, handleSubmit, register, errors, reset, getValues, setValue } = useForm();
    const history = useHistory();

    if(modal === false){
        Swal.fire({
            icon: 'success',
            title: 'An email has been sent for your password change!',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(function(){
            window.location.replace('http://localhost:3000/login');
        }, 3000);
    }

    return (
        <div className="two-background justify-content-center align-items-center d-flex">
            <Modal isOpen={modal} toggle={toggle} className="landingPage modal-center">
                <ModalBody>
                    <span style={{fontSize: "25px"}} className="font-weight-bolder hand-pointer" placeholder="Back" onClick={() => history.push('/login')}>&#8592;</span>
                    <div class={isDesktop ? "text-center mt-5 mb-5 mx-5" : "text-center mt-5 mb-5" }>
                        <h3 className="font-weight-bolder"><i className="fa fa-lock" style={{fontSize: "50px"}}></i> FORGOT PASSWORD</h3>
                        <p className="mt-3 mb-3 text-secondary font-weight-bolder">
                            To reset your password, provide your account's email address.
                        </p>
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
                        <Button className="bg-warning-edit text-white font-weight-bolder border-0 w-100 button-transition" onClick={toggle} >SUBMIT</Button>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}
export default ForgotPassword;