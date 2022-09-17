import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap'
import "../css/regis-login.css"




export default class RegisterationPage extends Component {



    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCnfPassword = this.onChangeCnfPassword.bind(this);
        this.onRadioClick = this.onRadioClick.bind(this);
        this.togglePages = this.togglePages.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleError = this.handleError.bind(this);


        this.state = {
            username: '',
            gender: '',
            dob: new Date(),
            email: "",
            password: "",
            confpassword: "",
            errmessage:""
            
        }
    }


    componentDidMount() {
        document.getElementById('pass').style.display = "none";
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }



    onChangeDate(dob) {
        this.setState({
            dob: dob
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeCnfPassword(e) {
        this.setState({
            confpassword: e.target.value
        });
    }



    onRadioClick(e) {
        if (e.target.value === 'Male') {
            document.getElementById('ml').checked = true;
            document.getElementById('fl').checked = false;
            this.setState({
                gender: e.target.value
            })

        } else {
            document.getElementById('ml').checked = false;
            document.getElementById('fl').checked = true;
            this.setState({
                gender: e.target.value
            })

        }
    }


    togglePages(e) {

        if (e.target.id === 'topass') {
            document.getElementById('info').style.display = "none";
            document.getElementById('pass').style.display = "";
        }
        else {
            document.getElementById('info').style.display = "";
            document.getElementById('pass').style.display = "none";

        }
    }

    handleError(val){
        if (val.response){
            this.setState({
                errmessage: val.response.data
            })
        }
    }


    onSubmit(e) {
        e.preventDefault();

        
        if (this.state.password === this.state.confpassword) {
                const user = {
                    username: this.state.username,
                    gender: this.state.gender,
                    dob: this.state.dob,
                    email: this.state.email,
                    password: this.state.password,
                }
                axios.post('http://localhost:5000/auth/user/register', user)
                  .catch(function(error) {
                    alert(error.response.data);
                  });
            } 
        else {
            console.log("password not matched");
        }
           
        

        

        

        // axios.post('http://localhost:5000/auth/user/register', user)
        //     .then(res => console.log(res.data));


        // window.location = '/';


    }















    render() {
        return (
            <div>

                <div>
                <p>  {this.errmessage} </p> 
                </div>
                <div className="mainbox">
                    <h3 className="reg-title">CREATE ACCOUNT</h3>
                    {/* User info*/}
                    <div id="info" >
                        <div>
                            <div className="inp-title">Name</div>
                            <div className="inp-field-box">                             
                                <input type="text"
                                    className="inp-field"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />

                            </div>
                        </div>

                        <div className="inp-box">
                            <div className="inp-title">Email</div>
                            <div className="inp-field-box">
                                <input type="email"
                                    className="inp-field"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />

                            </div>
                        </div>
                        <div className="inp-box">
                            <div className="inp-title">Gender</div>
                            <div >
                                <input type="radio" value="Male" id="ml" onClick={this.onRadioClick} />
                                <label className="radiobox">Male</label>
                                <p className="gap"></p>
                                <input type="radio" value="Female" id="fl" onClick={this.onRadioClick} />
                                <label className="radiobox" >Female</label>

                            </div>
                        </div>
                        <div className="inp-box">
                            <div className="inp-title">Date Of Birth</div>

                            <div className="inp-field-box">
                            
                                <DatePicker  className="inp-field"
                            selected={this.state.dob}
                            onChange={this.onChangeDate}
                            />

                            </div>

                        </div>
                        <div>
                            <div id="topass" className="btn-prop text-center" onClick={this.togglePages} >
                                Next
                            </div>
                        </div>
                    </div>
                    {/* User Password */}
                    <div id="pass">
                        <br></br>
                        <div>
                            <div className="inp-title">Create Password</div>
                            <div className="inp-field-box">
                                <input type="password" className="inp-field"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                
                                />

                            </div>
                        </div>
                        <br></br>

                        <div>
                            <div className="inp-title">Confirm Password</div>
                            <div className="inp-field-box">
                                <input type="password" className="inp-field" 
                                value={this.state.confpassword}
                                onChange={this.onChangeCnfPassword}
                                />

                            </div>
                        </div>
                        <div id="toinfo" className="btn-prop2 text-center float-bottom" onClick={this.togglePages} >
                            Back
                            </div>
                        <div className="btn-prop3 text-center float-bottom" onClick={this.onSubmit} >
                            Register
                            </div>
                    </div>
                
                </div>
            </div>

        )
    }
}