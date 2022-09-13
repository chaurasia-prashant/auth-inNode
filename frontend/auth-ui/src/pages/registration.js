import React, { Component } from 'react';
import 'bootstrap'
import "../css/regis-login.css"


export default class RegisterationPage extends Component {

    render() {
        return (
            <div>
                <body className="bg-color" >
                    <div className="mainbox">
                        <h3 className="reg-title">CREATE ACCOUNT</h3>
                        <div>
                            <div className="inp-title">Name</div>
                            <div className="inp-field-box">
                                <input className="inp-field" />

                            </div>
                        </div>

                        <div className="inp-box">
                            <div className="inp-title">Email</div>
                            <div className="inp-field-box">
                                <input className="inp-field" />

                            </div>
                        </div>
                        <div className="inp-box">
                            <div className="inp-title">Date Of Birth</div>

                            
                        </div>
                        {/* <div className="">
                        <label>Username: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                    </div> */}
                    </div>
                </body>
            </div>
        )
    }
}