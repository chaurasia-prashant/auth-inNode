import React, { Component } from 'react';
import 'bootstrap'
import "../css/welcome-page.css"


export default class WelcomePage extends Component {

    render() {
        return (
            <div>
                <body >
                    <br />
                    <br />
                    <div>
                        <h1 className="text-center" >WELCOME</h1>
                        <h3 className="text-center">
                            Let's be a part of my world
                        </h3>
                    </div>
                    <div>
                        <a href='/register' className="text-white text-decoration-none">
                            <div className="btn-prop1 text-center">
                                Sign up
                            </div>
                        </a>
                        <a href='/login' className="text-white text-decoration-none">
                            <div className="btn-prop2 text-center">
                                Login
                            </div>
                        </a>
                    </div>
                </body>
            </div>
        )
    }
}