import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap'
import "../css/regis-login.css"




export default class LoginPage extends Component {


    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            email: "",
            password: "",
            errmessage: ""

        }
    }


    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }


    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const userLogin = {

            email: this.state.email,
            password: this.state.password,
        }


        axios.post('http://localhost:5000/auth/user/login', userLogin)
            .then(
                console.log("login success")
            ).catch(err => {
                alert(err.response.data)

            })

    }




    render() {
        return (
            <div>
                <div className="mainbox">
                    <h3 className="reg-title">LOGIN</h3>


                    <br></br>
                    <div>
                        <div className="inp-title">Email</div>
                        <div className="inp-field-box">
                            <input type="email" className="inp-field"
                                value={this.state.email}
                                onChange={this.onChangeEmail}

                            />

                        </div>
                    </div>
                    <br></br>

                    <div>
                        <div className="inp-title">Password</div>
                        <div className="inp-field-box">
                            <input type="password" className="inp-field"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />

                        </div>
                    </div>
                    <div className="btn-prop text-center float-bottom" onClick={this.onSubmit} >
                        Login
                            </div>

                    <div>
                        <p className="text-prop">Don't have a account Create here</p>

                    </div>
                    <a href='/register' className="text-white text-decoration-none">
                        <div className="btn-prop2 text-center float-bottom" >
                            Register
                            </div>
                    </a>

                </div>
            </div>
        )
    }
}