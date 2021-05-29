import { ENDPOINT } from "../constants/api";
import axios from "axios";
import { notifyError } from "./Toaster";

export const authActions = {
  login,
  registration
};
const headers = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest"
};

async function login(data, setAuthenticated, setButtonSpinner) {
  try {
    let res = await axios.post(ENDPOINT + '/login', data, { headers: headers });
    console.log(res.data)
    if (res.data.data.is_verify) {
      if (res.data.data.token) {
        localStorage.setItem('jwtToken', res.data.data.token)
        localStorage.setItem('email', res.data.data.email)
        setAuthenticated(true)
        window.location.reload(2000)
      } else {
        notifyError("Login Failed! Invalid Email or Password")
      }
    } else {
      if (res.data.data.token) {
        notifyError("Account is not yet verified. Please check your email for verification. Thank you!");
      } else {
        notifyError("Login Failed! Invalid Email or Password")
      }
    }
    setButtonSpinner(false)
  } catch (err) {
    console.log(err.response)
    // if (err.response) {
    //   if (err.response.Error) {
    //     notifyError(err.response.Error);
    //   }
    //   if (err.response.data && err.response.data.data.email_address) {
    //     notifyError(err.response.data.data.email_address);
    //   }
    // } else {
    //   notifyError('Login Failed! Invalid Email or Password');
    // }
  }
  setButtonSpinner(false)
}

async function registration(data, setErrorMessage, setButtonSpinner, buttonSpinner, setRegistrationDone) {
  try {
    let res = await axios.post(ENDPOINT + '/register', data, { headers: headers });
    setButtonSpinner(false)
    setRegistrationDone(true)
  } catch (err) {
    console.log(err.response)
    if (err.response) {
      if (err.response.Error) {
        notifyError(err.response.Error);
      }
      if (err.response.data && err.response.data.email_address) {
        notifyError(err.response.data.email_address);
      }
    } else {
      notifyError('Registration Failed!');
    }
    setButtonSpinner(false)
  }
}