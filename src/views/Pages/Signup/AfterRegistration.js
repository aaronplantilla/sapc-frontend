import React from 'react'
import { Button } from 'reactstrap'
import { useHistory } from "react-router-dom";

const AfterRegistration = () => {

    const history = useHistory();

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center text-danger-edit">Thank you for registration! <br /> Please check your email for verification</h1>
            <Button className="btn bg-warning rounded-pill py-2 px-4 border-0" onClick={()=>{history.push('./login')}}>Login</Button>
        </div>
    )
}

export default AfterRegistration;