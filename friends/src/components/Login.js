import React from 'react';
// import axios from 'axios'; -- this is changed to axiosWithAuth
import { axiosWithAuth } from '../utils/axiosWithAuth';


class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    //Handle change

    handleChange = e => {
        // console.log(e);
        this.setState({
          credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
          }
        })
    }

    // login

    login = e => {
        e.preventDefault();  
        axiosWithAuth()
        //we make a post request to the login endpoint , we send in our credentials.
        .post("/api/login", this.state.credentials)
        .then (res => {
            // res.data.payload is my token
            // redux - send the token to redux store
            // browser storage - localStorage -- WE ARE USING LOCAL STORAGE - THE LEAST Secure choice
            // Cookies

            //Save token in local storage
            localStorage.setItem('token', JSON.stringify(res.data.payload))
            this.props.history.push('/protected')

        })
        .catch(err => console.log({err}))      
    }



    render () {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    <br/>


                    <input
                      type="text"
                      name="password"
                      placeholder="Password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                      />
                      <br/>

                    <button>Login</button>

                </form>
            </div>
        )
    }
}

export default Login;
