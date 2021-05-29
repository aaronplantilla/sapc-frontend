import React from 'react'
import { Redirect } from 'react-router-dom'
import jwt_decode from "jwt-decode";

class PrivateRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : "";

        try{
            const valid_token = jwt_decode(isAuthenticated)
            if (valid_token) return <Component />
        }catch(error){
            return <Redirect to={{ pathname: '/login' }} />
        }
    }
}

export default PrivateRoute;