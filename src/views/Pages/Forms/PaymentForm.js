import React, { Fragment, useEffect, useState } from 'react';
import {
    Container,
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    CustomInput,
    Input,
    Button
} from 'reactstrap';
import { useForm, Controller } from "react-hook-form";
import SapcLogo from '../../../assets/img/SAPC-Logo-red.png'
import '../../../App.css';
import Select from 'react-select';
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { educationActions } from "../../../services/EducationSelectionService.js";

const PaymentForm = ({ currentStep, setCurrentStep, setLoading, paymentForm, setPaymentForm, newTuitionFee, setNewTuitionFee, schoolFees, setSchoolFees, paymentMode, setPaymentMode }) => {

    const admissionAnswers = localStorage.getItem('admissionAnswers') ? JSON.parse(localStorage.getItem('admissionAnswers')) : ""
    const { register, handleSubmit, errors, control, setValue, getValues } = useForm();
    const [totalFees, setTotalFees] = useState(0);
    console.log(admissionAnswers)
    const handlePreviousBtn = () => {
        setPaymentForm({...paymentForm, new_tuition_fee: newTuitionFee})
        setPaymentForm({...paymentForm, total_fees: totalFees})
        setCurrentStep(currentStep - 1)
    }

    const onSubmit = (data) => {
        setPaymentForm({...paymentForm, new_tuition_fee: newTuitionFee})
        setPaymentForm({...paymentForm, total_fees: totalFees})
        setCurrentStep(currentStep + 1);
    }

    useEffect(() => {
        educationActions.getApplications(null, null, null, null, setSchoolFees, null);
    }, []);

    useEffect(() => {
        if ((schoolFees && schoolFees.length >= 1) && paymentForm.tuition_fee == "") {
            schoolFees.map(fee => {
                if (admissionAnswers.grade_year_level.value == fee.grade_level_id) {
                    if (paymentForm.tuition_fee != "") {
                        fee.tuition_fee = paymentForm.tuition_fee;
                        setPaymentForm(fee);
                    } else {
                        setPaymentForm(fee);
                    }
                }
            })
        }
    }, [schoolFees])

    const handleSelectPaymentMode = (e) => {
        let total = 0;
        if (e == 'annual_fee') {
            total = parseFloat(paymentForm.discounted_tuituion_fee);
        } else {
            total = parseFloat(paymentForm.tuition_fee);
        }
        setNewTuitionFee(total)
    }

    useEffect(() => {
        let totalPayment = 0;
        let tuition = newTuitionFee != "" ? newTuitionFee : paymentForm.tuition_fee;
        totalPayment = parseFloat(tuition) + parseFloat(paymentForm.miscellaneous_fee) + parseFloat(paymentForm.other_fee);
        setTotalFees(totalPayment)
    }, [newTuitionFee, paymentForm])

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container className="my-5">
                    <Row className="mb-5 justify-content-between">
                        <Col md="3" xs="12">
                            <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>PAYMENT MODE</Label>
                                </div>
                                <div className="w-100 py-3">
                                    <Row>
                                        <Col md="12" xs="12">
                                            <FormGroup check>
                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="paymentMode"
                                                        rules={{ required: true }}
                                                        invalid={errors.paymentMode ? true : false}
                                                        defaultValue={paymentForm.paymentMode}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                // value="1"
                                                                name="paymentMode"
                                                                onChange={e => {
                                                                    setValue('paymentMode', "annual_fee")
                                                                    handleSelectPaymentMode("annual_fee")
                                                                    setPaymentForm({ ...paymentForm, paymentMode: "annual_fee" })
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={paymentForm.paymentMode == "annual_fee" ? true : false}
                                                                defaultValue={paymentForm.paymentMode}
                                                            />
                                                        )}
                                                    />
                                        Annual Fee
                                        </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="paymentMode"
                                                        rules={{ required: true }}
                                                        invalid={errors.paymentMode ? true : false}
                                                        defaultValue={paymentForm.paymentMode}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                // value="1"
                                                                name="paymentMode"
                                                                onChange={e => {
                                                                    setValue('paymentMode', "semestral_fee")
                                                                    handleSelectPaymentMode("semestral_fee")
                                                                    setPaymentForm({ ...paymentForm, paymentMode: "semestral_fee" })
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={paymentForm.paymentMode == "semestral_fee" ? true : false}
                                                                defaultValue={paymentForm.paymentMode}
                                                            />
                                                        )}
                                                    />
                                        Semestral Fee
                                        </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="paymentMode"
                                                        rules={{ required: true }}
                                                        invalid={errors.paymentMode ? true : false}
                                                        defaultValue={paymentForm.paymentMode}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                name="paymentMode"
                                                                onChange={e => {
                                                                    setValue('paymentMode', "monthly_a")
                                                                    handleSelectPaymentMode("monthly_a")
                                                                    setPaymentForm({ ...paymentForm, paymentMode: "monthly_a" })
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={paymentForm.paymentMode == "monthly_a" ? true : false}
                                                                defaultValue={paymentForm.paymentMode}
                                                            />
                                                        )}
                                                    />
                                        Monthly A
                                        </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="paymentMode"
                                                        rules={{ required: true }}
                                                        invalid={errors.paymentMode ? true : false}
                                                        defaultValue={paymentForm.paymentMode}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                name="paymentMode"
                                                                onChange={e => {
                                                                    setValue('paymentMode', "monthly_b")
                                                                    handleSelectPaymentMode("monthly_b")
                                                                    setPaymentForm({ ...paymentForm, paymentMode: "monthly_b" })
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={paymentForm.paymentMode == "monthly_b" ? true : false}
                                                                defaultValue={paymentForm.paymentMode}
                                                            />
                                                        )}
                                                    />
                                        Monthly B
                                        </Label>
                                            </FormGroup>
                                        </Col>
                                        {errors.paymentMode && (
                                            <div
                                                style={{
                                                    marginTop: "0.25rem",
                                                    fontSize: "80%",
                                                    color: "#f86c6b",
                                                }}
                                                className="px-2"
                                            >
                                                Payment mode is required!
                                            </div>
                                        )}
                                    </Row>
                                </div>
                            </Row>
                            {/* <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>PAYMENT METHOD</Label>
                                </div>
                                <div className="w-100">
                                    <Row className="mb-5">
                                        <Col md="6" xs="12">
                                            <FormGroup check>
                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="paymentMethod"
                                                        rules={{ required: true }}
                                                        invalid={errors.paymentMethod ? true : false}
                                                        defaultValue={paymentForm.paymentMethod}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                value="cash"
                                                                name="paymentMethod"
                                                                onChange={e => {
                                                                    setValue('paymentMethod', e.target.value)
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={paymentForm.paymentMethod == "cash" ? true : false}
                                                            />
                                                        )}
                                                    />
                                        Cash
                                        </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="paymentMethod"
                                                        rules={{ required: true }}
                                                        invalid={errors.paymentMethod ? true : false}
                                                        defaultValue={paymentForm.paymentMethod}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                value="gcash"
                                                                name="paymentMethod"
                                                                onChange={e => {
                                                                    setValue('paymentMethod', e.target.value)
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={paymentForm.paymentMethod == "gcash" ? true : false}
                                                            />
                                                        )}
                                                    />
                                        G-Cash
                                        </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="paymentMethod"
                                                        rules={{ required: true }}
                                                        invalid={errors.paymentMethod ? true : false}
                                                        defaultValue={paymentForm.paymentMethod}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                value="bpiTransfer"
                                                                name="paymentMethod"
                                                                onChange={e => {
                                                                    setValue('paymentMethod', e.target.value)
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={paymentForm.paymentMethod == "bpiTransfer" ? true : false}
                                                            />
                                                        )}
                                                    />
                                        BPI Transafer
                                        </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Controller
                                                        control={control}
                                                        name="paymentMethod"
                                                        rules={{ required: true }}
                                                        invalid={errors.paymentMethod ? true : false}
                                                        defaultValue={paymentForm.paymentMethod}
                                                        render={({ onChange, value, onBlur, name }) => (
                                                            <Input
                                                                type="radio"
                                                                value="lbc"
                                                                name="paymentMethod"
                                                                onChange={e => {
                                                                    setValue('paymentMethod', e.target.value)
                                                                    return e.target.value
                                                                }}
                                                                defaultChecked={paymentForm.paymentMethod == "lbc" ? true : false}
                                                            />
                                                        )}
                                                    />
                                        LBC
                                        </Label>
                                            </FormGroup>
                                        </Col>

                                        {errors.paymentMethod && (
                                            <div
                                                style={{
                                                    marginTop: "0.25rem",
                                                    fontSize: "80%",
                                                    color: "#f86c6b",
                                                }}
                                                className="px-2"
                                            >
                                                Payment method is required!
                                            </div>
                                        )}
                                    </Row>
                                </div>
                            </Row> */}
                        </Col>

                        {/* Payment Details */}
                        <Col md="8" xs="12">
                            <Row className="border border-2 border-warning py-2 mb-5 px-3">
                                <div className="w-100 px-2" style={{ marginTop: "-1.4rem" }}>
                                    <Label className="text-danger-edit text-center font-weight-bolder mb-1 px-3" style={{ backgroundColor: "white" }}>Select the items you want to pay</Label>
                                </div>
                                <div className="w-100">
                                    <Row className="mt-4 mb-5 mx-3">
                                        <Col xs="6" className="text-left">
                                            <h4 className="text-danger-edit font-weight-bolder">Tuition Fee</h4>
                                            <i className="text-secondary">Payment upon enrolment</i>
                                        </Col>
                                        <Col xs="6" className="text-right">
                                            <h4 className="text-danger-edit font-weight-bolder">{newTuitionFee != "" ? newTuitionFee : paymentForm.tuition_fee}</h4>
                                        </Col>
                                    </Row>

                                    <Row className="mt-4 mb-5 mx-3">
                                        <Col xs="6" className="text-left">
                                            <h4 className="text-danger-edit font-weight-bolder">Miscellaneous Fee</h4>
                                            <i className="text-secondary">Payment upon enrolment</i>
                                        </Col>
                                        <Col xs="6" className="text-right">
                                            <h4 className="text-danger-edit font-weight-bolder">{paymentForm.miscellaneous_fee}</h4>
                                        </Col>
                                    </Row>

                                    <Row className="mt-4 mb-5 mx-3">
                                        <Col xs="6" className="text-left">
                                            <h4 className="text-danger-edit font-weight-bolder">Other Fees</h4>
                                            <i className="text-secondary">Payment upon enrolment</i>
                                        </Col>
                                        <Col xs="6" className="text-right">
                                            <h4 className="text-danger-edit font-weight-bolder">{paymentForm.other_fee}</h4>
                                        </Col>
                                    </Row>

                                    <Row className="mt-4 mb-5 mx-3">
                                        <Col xs="6" className="text-left">
                                            <h4 className="text-danger-edit font-weight-bolder text-right mr-4 pr-1">TOTAL: </h4>
                                        </Col>
                                        <Col xs="6" className="text-right">
                                            <h4 className="text-danger-edit font-weight-bolder">{totalFees.toFixed(2)}</h4>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col md="6" xs="6" className="text-center w-100">
                            <Button type="button" onClick={handlePreviousBtn} className="bg-white border-warning text-warning-edit rounded-pill py-3 px-5 font-weight-bolder">Previous</Button>
                            <Button className="border-0 bg-white text-dark rounded-pill py-3 px-5 font-weight-bolder">Cancel</Button>
                        </Col>

                        <Col md="6" xs="6" className="text-center w-100">
                            <Button className="bg-warning text-white border-0 rounded-pill py-3 px-5 font-weight-bolder">Next</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>

        </>
    )
}

export default PaymentForm;